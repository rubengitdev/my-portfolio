import { useState } from 'react';
import Navbar from './components/Navbar';
import type { ProfileInfo } from './types';
import { data } from './data/data';
import Footer from './components/Footer';
import Hero from './components/Hero';

function App() {
    const [profile, setProfile] = useState<ProfileInfo>(data.profile);
    const [activeSection, setActiveSection] = useState('hero');

    const handleNavigate = (sectionId: string) => {
        document
            .getElementById(sectionId)
            ?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-600 selection:text-white">
            {/* NAVBAR COMPONENT */}
            <Navbar
                profile={profile}
                activeSection={activeSection}
                onNavigate={handleNavigate}
            />

            <main className="flex-1">
                {/* HERO SECTION */}
                <Hero
                    profile={profile}
                    socialLinks={data.socialLinks}
                    onNavigate={handleNavigate}
                />
            </main>

            {/* FOOTER COMPONENT */}
            <Footer
                profile={profile}
                socialLinks={data.socialLinks}
                onNavigate={handleNavigate}
            />
        </div>
    );
}

export default App;
