"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import kaka from './images/ka.jpg'



interface NavLink {
    title: string;
    icon: string;
    key: string;
}

const PRIMARY_COLOR: string = '#FF5C00'; 
const BACKGROUND_COLOR: string = '#1D1C1D';
const CARD_BACKGROUND: string = '#1a1a1a';



const navLinks: NavLink[] = [
    { title: "Home", icon: "fas fa-home", key: 'home' },
    { title: "About Me", icon: "fas fa-user", key: 'about' },
    { title: "Resume/CV", icon: "fas fa-file-alt", key: 'resume' },
    { title: "Portfolio/Works", icon: "fas fa-briefcase", key: 'portfolio' },
    { title: "Services/Skills", icon: "fas fa-cogs", key: 'skills' },
    { title: "Testimonials/Feedback", icon: "fas fa-comments", key: 'feedback' }, 
    { title: "Contact", icon: "fas fa-envelope", key: 'contact' },
];


const HomeContent: React.FC = () => (
  <section id="home">
    <p className="text-lg font-medium mb-4">
      Let&apos;s Work <span className="text-primary-orange font-bold">Together!</span>
    </p>

    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
      Hi From <span className="text-primary-orange">Chaiyasit,</span>
      <br />
      Interactive Designer & Fullstack Web Developer
    </h1>

    <p className="text-gray-400 text-base md:text-lg mb-10 max-w-2xl">
      I am a passionate and dedicated full-stack developer with over 3 years of experience crafting beautiful and functional digital experiences. I focus on building responsive, accessible, and high-performance web applications, specializing in the modern React ecosystem.
    </p>

    <div className="flex space-x-12 md:space-x-16">
      <div>
        <p className="text-5xl md:text-6xl font-extrabold text-primary-orange">3+</p>
        <p className="text-sm md:text-base text-gray-400 mt-1">
          Years of Experience
        </p>
      </div>

            <div>
                <p className="text-5xl md:text-6xl font-extrabold text-primary-orange">10+</p>
                <p className="text-sm md:text-base text-gray-400 mt-1">
                    Projects Completed
                </p>
            </div>
            
        </div>
    </section>
);



// --- MAIN APP COMPONENT ---

export default function App() {
    const [activeSection, setActiveSection] = useState<string>('home');

    const ContentRenderer: React.FC = () => {
        switch (activeSection) {
            case 'home':
                return <HomeContent />;
            case 'about':
                return <></>;
            case 'resume':
                return <></>;
            case 'skills':
                return <></>;
            case 'portfolio':
                return <></>;
            case 'feedback':
                return <></>;
            case 'contact':
                return <></>;
            default:
                return <HomeContent />;
        }
    };



    const styleAndConfig: string = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
        <script src="https://cdn.tailwindcss.com"></script>
        
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
            body {
                font-family: 'Inter', sans-serif;
                background-color: ${BACKGROUND_COLOR};
                color: #f0f0f0;
                overflow-x: hidden;
            }
            .text-primary-orange {
                color: ${PRIMARY_COLOR};
            }
            .bg-primary-orange {
                background-color: ${PRIMARY_COLOR};
            }
            .shadow-primary-orange {
                box-shadow: 0 0 15px 5px ${PRIMARY_COLOR}33;
            }
            .sidebar-active {
                color: ${PRIMARY_COLOR};
                background-color: #2a2a2a;
            }
            .transition-all-200 {
                transition: all 200ms ease;
            }
        </style>
        
        <script>
            tailwind.config = {
                theme: {
                    extend: {
                        colors: {
                            'dark-card': '${CARD_BACKGROUND}',
                            'primary-orange': '${PRIMARY_COLOR}',
                        }
                    }
                }
            }
        </script>
    `;

    return (
        <>
            <div dangerouslySetInnerHTML={{ __html: styleAndConfig }} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <div className="p-4 md:p-8 lg:p-12 min-h-screen"> 

                <div className="main-container w-full max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* --- Profile Sidebar (Left Column) --- */}
                        <div className="profile-card lg:col-span-1 p-6 md:p-8 rounded-2xl shadow-2xl bg-dark-card border border-gray-700/50 h-fit lg:sticky lg:top-12">
                            <h2 className="text-3xl font-bold mb-4">
                                <span className="text-primary-orange">C</span>haiyasit
                            </h2>
                            
                            <div className="mb-6 overflow-hidden rounded-2xl border-4 border-gray-700 aspect-square">
                                <Image src={kaka} alt="Profile Image" className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="text-center space-y-2 mb-8">
                                <p className="text-lg font-medium">STU ID: 6652410025</p>
                                <p className="text-sm text-gray-400">Interactive Designer & Fullstack Web Developer</p>
                            </div>

                            <div className="flex justify-center space-x-4 mb-10 text-gray-400">
                                <a href="https://www.facebook.com/ka.ka.461377" target="_blank" rel="noopener noreferrer" className="hover:text-primary-orange transition-all-200 transform hover:scale-110" title="Facebook">
                                    <i className="fab fa-facebook-f text-xl"></i>
                                </a>
                                <a href="#" className="hover:text-primary-orange transition-all-200 transform hover:scale-110" title="Twitter">
                                    <i className="fab fa-twitter text-xl"></i>
                                </a>
                                <a href="https://www.instagram.com/kakalamand/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-orange transition-all-200 transform hover:scale-110" title="Instagram">
                                    <i className="fab fa-instagram text-xl"></i>
                                </a>
                                <a href="#" className="hover:text-primary-orange transition-all-200 transform hover:scale-110" title="LinkedIn">
                                    <i className="fab fa-linkedin-in text-xl"></i>
                                </a>
                                <a href="#" className="hover:text-primary-orange transition-all-200 transform hover:scale-110" title="Google">
                                    <i className="fab fa-google text-xl"></i>
                                </a>
                            </div>

                            <button className="w-full py-3 rounded-xl bg-primary-orange text-black font-bold text-lg shadow-lg hover:shadow-primary-orange/50 transition-all-200 transform hover:scale-[1.02]">
                                HIRE ME !
                            </button>
                        </div>

                        {/* --- Main Content (Right Column - Dynamic) --- */}
                        <div className="main-content lg:col-span-2 p-6 md:p-8 rounded-2xl bg-dark-card/50 min-h-[80vh]">
                            <ContentRenderer />
                        </div>
                        
                    </div>
                </div>
                
                {/* --- Sticky Navigation Bar (Right - Desktop) --- */}
                <div className="fixed right-0 top-1/2 transform -translate-y-1/2 p-3 bg-dark-card/80 backdrop-blur-sm rounded-l-full border border-gray-700/50 hidden lg:block shadow-2xl z-20">
                    <nav className="flex flex-col space-y-4 text-gray-400">
                        {navLinks.map((link) => (
                            <a 
                                key={link.key}
                                href={`#${link.key}`} 
                                onClick={(e: React.MouseEvent) => { e.preventDefault(); setActiveSection(link.key); }} // Explicitly typed MouseEvent
                                className={`p-2 rounded-full hover:text-primary-orange transition-all-200 group relative ${link.key === activeSection ? 'sidebar-active' : 'hover:bg-gray-700/50'}`}
                                title={link.title}
                            >
                                <i className={`${link.icon} text-xl`}></i>
                                {/* Tooltip on hover */}
                                <span className="absolute right-12 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                                    {link.title}
                                </span>
                            </a>
                        ))}
                    </nav>
                </div>

                {/* --- Mobile Navigation Bar (Bottom) --- */}
                <div className="fixed bottom-0 left-0 w-full p-3 bg-dark-card/90 backdrop-blur-sm border-t border-gray-700/50 lg:hidden shadow-3xl z-30">
                    <nav className="flex justify-around text-gray-400">
                        {navLinks.map((link) => (
                            <a 
                                key={link.key}
                                href={`#${link.key}`} 
                                onClick={(e: React.MouseEvent) => { e.preventDefault(); setActiveSection(link.key); }} 
                                className={`flex flex-col items-center p-1 rounded-md text-sm transition-all-200 ${link.key === activeSection ? 'text-primary-orange' : 'hover:text-primary-orange'}`}
                                title={link.title}
                            >
                                <i className={`${link.icon} text-xl mb-1`}></i>
                                <span className='hidden sm:inline'>{link.title.split('/')[0]}</span> 
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </>
    );
}
