import {
    Instagram,
    Send, // Using Send for Telegram
    Twitter,
    Mail, // Using Mail for Email
    Github,
} from 'lucide-react';

import profilePic from '@/assets/me.jpeg';
import travelBg from '@/assets/travel-dark-bg-1.jpg';
import logo from '@/assets/logo.png';

const links = [
    { href: 'https://getyourguide.tp.st/O2gRPpzL', src: 'https://raw.githubusercontent.com/thetwopisceans/linktree/c68cb473d2de1454e1949e6ca44971d5c296921d/assets/gyg_logo.svg', alt: 'GetYourGuide' },
    { href: 'https://agoda.tp.st/ZEcYskb9', src: 'https://raw.githubusercontent.com/thetwopisceans/linktree/073bc7c6cf89f713b8d2a79ac67248ff9070e6c7/assets/agoda_logo.svg', alt: 'Agoda' },
    { href: 'https://airhelp.tp.st/sncV94At', src: 'https://raw.githubusercontent.com/thetwopisceans/linktree/073bc7c6cf89f713b8d2a79ac67248ff9070e6c7/assets/airhelp_logo.svg', alt: 'AirHelp' },
    { href: 'https://cheapoair.tp.st/Q6g6Netc', src: 'https://raw.githubusercontent.com/thetwopisceans/linktree/073bc7c6cf89f713b8d2a79ac67248ff9070e6c7/assets/cheapair_logo.svg', alt: 'CheapOair' },
    { href: 'https://eatwith.tp.st/raDQCBCG', src: 'https://raw.githubusercontent.com/thetwopisceans/linktree/073bc7c6cf89f713b8d2a79ac67248ff9070e6c7/assets/eatwith_logo.svg', alt: 'EatWith' },
    { href: 'https://tp.st/ilpIKfKX', src: 'https://raw.githubusercontent.com/thetwopisceans/linktree/073bc7c6cf89f713b8d2a79ac67248ff9070e6c7/assets/expedia_logo.svg', alt: 'Expedia' },
    { href: 'https://flixbus.tp.st/6E1lmANC', src: 'https://raw.githubusercontent.com/thetwopisceans/linktree/073bc7c6cf89f713b8d2a79ac67248ff9070e6c7/assets/flixbus_logo.svg', alt: 'FlixBus' },
    { href: 'https://hilton.tp.st/KWkVv0JC', src: 'https://raw.githubusercontent.com/thetwopisceans/linktree/073bc7c6cf89f713b8d2a79ac67248ff9070e6c7/assets/hilton_logo.svg', alt: 'Hilton' },
    { href: 'https://hostelworld.tp.st/L5x6A2Ek', src: 'https://raw.githubusercontent.com/thetwopisceans/linktree/073bc7c6cf89f713b8d2a79ac67248ff9070e6c7/assets/hostelworld_logo.svg', alt: 'Hostelworld' },
    { href: 'https://klook.tp.st/u0w0SS5I', src: 'https://raw.githubusercontent.com/thetwopisceans/linktree/073bc7c6cf89f713b8d2a79ac67248ff9070e6c7/assets/klook_logo.svg', alt: 'Klook' },
    { href: 'https://omio.tp.st/ahI2FmOI', src: 'https://raw.githubusercontent.com/thetwopisceans/linktree/073bc7c6cf89f713b8d2a79ac67248ff9070e6c7/assets/omio_logo.svg', alt: 'Omio' },
    { href: 'https://oyohotels.tp.st/ols8vgQv', src: 'https://raw.githubusercontent.com/thetwopisceans/linktree/073bc7c6cf89f713b8d2a79ac67248ff9070e6c7/assets/oyo_logo.svg', alt: 'OYO' },
    { href: 'https://trainline.tp.st/mSg75zME', src: 'https://raw.githubusercontent.com/thetwopisceans/linktree/073bc7c6cf89f713b8d2a79ac67248ff9070e6c7/assets/trainline_logo.svg', alt: 'Trainline' },
    { href: 'https://trip.tp.st/TSjcIaN6', src: 'https://raw.githubusercontent.com/thetwopisceans/linktree/073bc7c6cf89f713b8d2a79ac67248ff9070e6c7/assets/trip_logo.svg', alt: 'Trip.com' },
    { href: 'https://viator.tp.st/7Ruv7XSN', src: 'https://raw.githubusercontent.com/thetwopisceans/linktree/073bc7c6cf89f713b8d2a79ac67248ff9070e6c7/assets/viator_logo.svg', alt: 'Viator' },
];

const LinksPage = () => {
    return (
        <div
            className="flex min-h-screen flex-col items-center justify-center bg-[#121212] bg-cover bg-fixed bg-center bg-no-repeat bg-blend-luminosity py-16 text-white"
            style={{ backgroundImage: `url(${travelBg})` }}
        >
            <img
                src={profilePic}
                alt="The Two Piscean's profile pic"
                className="mb-2 mt-3 w-[30vw] rounded-full sm:w-[20vw] md:w-[12vw]"
            />
            <img src={logo} alt="Logo" width={150} className="m-2.5" />
            <p className="mb-4 max-w-xl rounded-lg border border-[#ff4081] bg-black/50 p-4 text-center text-lg md:text-xl">
                Your ultimate destination for hassle-free travel planning! We've curated a collection of our favorite travel resources for you.
            </p>
            <div className="grid w-4/5 grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {links.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-20 items-center justify-center rounded-lg border border-[#ff4081] bg-[#333] p-2 transition-all duration-300 ease-in-out hover:bg-[#444] hover:shadow-[0_0_10px_#ff4081,0_0_20px_#ff4081,0_0_30px_#ff4081]"
                    >
                        <img
                            src={link.src}
                            alt={`${link.alt} Logo`}
                            className="h-full w-full object-contain brightness-150 invert"
                        />
                    </a>
                ))}
            </div>
            <div className="mt-16 flex space-x-6">
                <a href="https://www.instagram.com/thetwopisceans/" target="_blank" rel="noopener noreferrer" className="text-white transition-transform hover:scale-110">
                    <Instagram />
                </a>
                <a href="https://t.me/thetwopisceans" target="_blank" rel="noopener noreferrer" className="text-white transition-transform hover:scale-110">
                    <Send />
                </a>
                <a href="https://twitter.com/thetwopisceans" target="_blank" rel="noopener noreferrer" className="text-white transition-transform hover:scale-110">
                    <Twitter />
                </a>
                <a href="mailto:thetwopisceans@gmail.com" className="text-white transition-transform hover:scale-110">
                    <Mail />
                </a>
                <a href="https://github.com/thetwopisceans" target="_blank" rel="noopener noreferrer" className="text-white transition-transform hover:scale-110">
                    <Github />
                </a>
            </div>
        </div>
    );
};

export default LinksPage;