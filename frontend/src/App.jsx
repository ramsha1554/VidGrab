import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DownloaderForm from './components/DownloaderForm';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-['Poppins']">
      <Navbar />
      
      <main className="flex-grow flex flex-col items-center justify-center p-4 bg-gradient-to-br from-blue-100 to-purple-200">
        
        <header className="text-center mb-10">
          <div className="p-8 bg-white/60  shadow-xl backdrop-blur-md">
            
           
            <h1 className="text-4xl font-extrabold text-[#03045E]">
              Instagram Video Downloader
            </h1>
            
            {/* 1. Reduced font size from text-lg to text-base */}
            {/* 2. Changed text color to a slightly softer dark gray */}
            <p className="text-gray-600 mt-3 text-base">
              Paste a link to a public video post to download it.
            </p>

          </div>
        </header>
        
        <DownloaderForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;