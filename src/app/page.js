import Head from 'next/head';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Home() {
    return (
        <div className="h-screen bg-black text-white relative" style={{ backgroundImage: `url('https://sndp.mediadelivery.fi/img/658/3d13de12ffdc18b115eae063915b4bd8.jpg.webp')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            
            <div className="absolute inset-0 bg-black opacity-30"></div> 
            
            <Head>
                <title>Lauri Joona</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <nav className="p-4 z-10">
                <ul className="flex justify-center space-x-4">
                    <li className="hover:underline cursor-pointer">SCHEDULE</li>
                    <li className="hover:underline cursor-pointer">STORE</li>
                    <li className="hover:underline cursor-pointer">CONTACT ME</li>
                </ul>
            </nav>

            <main className="flex flex-col justify-center items-center h-[calc(100vh-8rem)] z-10">
                <h1 className="text-6xl font-bold mb-4">LAURI JOONA</h1>
                <p className="text-2xl">WRC 2 DRIVER</p>
            </main>

            <footer className="p-4 flex justify-center space-x-4 z-10">
                <a href="https://www.instagram.com/laurijoonaofficial/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram fa-2x"></i>
                </a>
                <a href="https://www.facebook.com/lauri.joona/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook fa-2x"></i>
                </a>
                <a href="https://www.tiktok.com/@laurijoonaofficial/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-tiktok fa-2x"></i>
                </a>
            </footer>
        </div>
    );
}

