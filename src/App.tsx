import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import type { ProfileInfo } from './types';
import { data } from './data/data';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Skills from './components/Skills';

function App() {
    const [profile, setProfile] = useState<ProfileInfo>(data.profile);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
            document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const handleNavigate = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-600 selection:text-white">
            <div
                className="fixed inset-0 pointer-events-none z-30 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px at var(--cursor-x, 50%) var(--cursor-y, 50%), rgba(99,102,241,0.15), transparent 80%)`,
                }}
            />
            {/* NAVBAR COMPONENT */}
            <Navbar profile={profile} activeSection={activeSection} onNavigate={handleNavigate} />

            <main className="flex-1">
                {/* HERO SECTION */}
                <Hero
                    profile={profile}
                    socialLinks={data.socialLinks}
                    onNavigate={handleNavigate}
                />

                {/* SKILLS SECTION */}
                <Skills skills={data.skills} />
            </main>

            {/* FOOTER COMPONENT */}
            <Footer profile={profile} socialLinks={data.socialLinks} onNavigate={handleNavigate} />
        </div>
    );
}

export default App;
