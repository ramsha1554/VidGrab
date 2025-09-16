const express = require('express');
const puppeteer = require('puppeteer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.post('/download', async (req, res) => {
    const { url } = req.body;
    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    let browser;
    try {
        browser = await puppeteer.launch({ headless: "new" });
        const page = await browser.newPage();

        let videoBuffer = null;
        
        page.on('response', async (response) => {
            const responseUrl = response.url();
           
            if (response.headers()['content-type'] === 'video/mp4') {
                if (!videoBuffer) { // Only capture the first video buffer
                    videoBuffer = await response.buffer();
                }
            }
        });

        await page.goto(url, { waitUntil: 'networkidle2' });

        if (videoBuffer) {
            res.setHeader('Content-Type', 'video/mp4');
            res.setHeader('Content-Disposition', 'attachment; filename="instagram_video.mp4"');
            res.send(videoBuffer);
        } else {
         
            const videoSelector = 'video.x1lliihq';
            await page.waitForSelector(videoSelector);
            const videoUrl = await page.$eval(videoSelector, (video) => video.src);
            
            if (videoUrl.startsWith('blob:')) {
                 const session = await page.target().createCDPSession();
                 const { result } = await session.send('IO.read', { handle: videoUrl.split('blob:')[1] });
                 const buffer = Buffer.from(result, 'base64');
                 res.setHeader('Content-Type', 'video/mp4');
                 res.setHeader('Content-Disposition', 'attachment; filename="instagram_video.mp4"');
                 res.send(buffer);
            } else {
                 throw new Error('Video source not found or not a blob.');
            }
        }

    } catch (error) {
        console.error('Download process failed:', error);
        res.status(500).json({ error: 'Failed to process video download.' });
    } finally {
        if (browser) {
            await browser.close();
        }
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});