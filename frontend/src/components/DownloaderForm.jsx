import { useState } from 'react';
import axios from 'axios';

function DownloaderForm() {
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [videoPreviewUrl, setVideoPreviewUrl] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError('');
        setVideoPreviewUrl(null);

        try {
            const response = await axios.post('http://localhost:4000/download', 
                { url },
                { responseType: 'blob' }
            );

            const previewUrl = window.URL.createObjectURL(new Blob([response.data]));
            setVideoPreviewUrl(previewUrl);

        } catch (err) {
            const errorMessage = 'Download failed. The post may be private or the URL is incorrect.';
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };
    
    const handleDownload = () => {
        if (!videoPreviewUrl) return;
        const link = document.createElement('a');
        link.href = videoPreviewUrl;
        link.setAttribute('download', 'instagram_video.mp4');
        document.body.appendChild(link);
        link.click();
        link.remove();
    };

    return (
        <div className="w-full max-w-md">
            <form onSubmit={handleSubmit} className="p-4 bg-white shadow-xl">
                <label htmlFor="url-input" className="sr-only">Instagram Post URL</label>
                <input
                    id="url-input"
                    name="url-input" 
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Paste Instagram URL here..."
                    className="p-3 border-2 border-gray-300 w-full focus:outline-none focus:border-[#8BF83C] focus:ring-2 focus:ring-[#8BF83C]/50"
                />
                <button 
                    type="submit" 
                    disabled={loading}
                    className={`
                        w-full bg-[#03045E] text-white p-3 mt-3 font-bold 
                        transition-all duration-300 ease-in-out
                        hover:brightness-125 hover:-translate-y-1 
                        disabled:bg-gray-400 disabled:cursor-not-allowed
                        ${loading ? 'animate-pulse' : ''}
                    `}
                >
                    {loading ? 'Processing...' : 'Get Video'}
                </button>
            </form>

            {error && (
                <div className="mt-4 p-3 bg-red-100 text-red-700">
                    <p><strong>Error:</strong> {error}</p>
                </div>
            )}
            
            {videoPreviewUrl && (
                <div className="mt-6 p-4 bg-gray-50 shadow-inner">
                    <h3 className="text-center font-bold text-lg text-gray-700 mb-4">Video Preview</h3>
                    
                    <div className="w-full max-w-xs mx-auto" style={{ aspectRatio: '9 / 16' }}>
                        <video 
                            controls
                            autoPlay
                            playsInline
                            muted
                            loop
                            src={videoPreviewUrl} 
                            className="w-full h-full object-cover bg-black"
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <button
                        onClick={handleDownload}
                        className="w-full bg-[#8BF83C] text-[#03045E] p-3 mt-4 font-bold transition-transform duration-300 hover:scale-105"
                    >
                        Download Now
                    </button>
                </div>
            )}
        </div> 
    );
}

export default DownloaderForm;