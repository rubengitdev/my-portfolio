import { ArrowDown, CheckCircle2, FileText, Send } from 'lucide-react';
import type { ProfileInfo, SocialLink } from '../types';
import SocialLinks from './SocialLinks';
import { useState } from 'react';
import Button from './Button';

interface HeroProps {
    profile: ProfileInfo;
    socialLinks: SocialLink[];
    onNavigate: (sectionId: string) => void;
}

const Hero = ({ profile, socialLinks, onNavigate }: HeroProps) => {
    const [downloadedResume, setDownloadedResume] = useState(false);

    const handleDownloadResume = () => {
        // Reference resume.pdf located in the assets folder
        const resumeUrl = new URL('../assets/resume.pdf', import.meta.url).href;
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = `${profile.name.replace(/\s+/g, '_')}_Resume.pdf`;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setDownloadedResume(true);
        setTimeout(() => setDownloadedResume(false), 3000);
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden"
        >
            {/* Subtle background ambient glows */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-137.5 h-137.5 bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
            <div className="absolute top-1/3 right-10 w-87.5 h-87.5 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    {/* Left Column: Text & CTAs (7 cols on lg) */}
                    <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
                        {/* Main Headline */}
                        <div className="space-y-3">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                                Crafting user-friendly digital experiences with{' '}
                                <span className="bg-linear-to-r from-indigo-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
                                    passion & code.
                                </span>
                            </h1>
                            <p className="text-lg sm:text-xl text-slate-300 font-medium">
                                Passionate {profile.role}.
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
                            <Button
                                id="hero-view-projects-button"
                                onClick={() => onNavigate('projects')}
                                variant="primary"
                                size="lg"
                            >
                                <span>View Projects</span>
                                <ArrowDown className="w-4 h-4 animate-bounce" />
                            </Button>

                            <button
                                id="hero-contact-button"
                                onClick={() => onNavigate('contact')}
                                className="px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white font-semibold text-sm transition-all duration-200 flex items-center gap-2 cursor-pointer"
                            >
                                <span>Contact Me</span>
                                <Send className="w-4 h-4 text-indigo-400" />
                            </button>

                            {/* TODO: Fix download resume to use my resume instead */}
                            <button
                                id="hero-download-cv-button"
                                onClick={handleDownloadResume}
                                className="px-5 py-3.5 rounded-xl bg-slate-900/50 hover:bg-slate-900 border border-slate-800/80 text-slate-300 hover:text-white text-sm font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer"
                                title="Resume"
                            >
                                {downloadedResume ? (
                                    <>
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                        <span className="text-emerald-400 font-medium">
                                            Resume Downloaded
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        <FileText className="w-4 h-4 text-slate-400" />
                                        <span>Resume</span>
                                    </>
                                )}
                            </button>
                        </div>

                        {/* Social Links Bar */}
                        <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <span className="text-xs text-slate-400 font-medium">
                                Connect with me:
                            </span>
                            <SocialLinks
                                links={socialLinks}
                                email={profile.email}
                                variant="hero"
                            />
                        </div>
                    </div>

                    {/* Right Column: User Picture Showcase (5 cols on lg) */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-end">
                        <div className="relative group">
                            {/* Decorative background glow rings */}
                            <div className="absolute -inset-2 bg-linear-to-tr from-indigo-600 via-sky-500 to-cyan-400 rounded-3xl opacity-30 group-hover:opacity-60 blur-xl transition-all duration-500 -z-10" />

                            {/* Photo Frame Container */}
                            <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-104 lg:h-128 rounded-2xl bg-slate-900 border-2 border-slate-700/80 group-hover:border-indigo-500/60 shadow-2xl overflow-hidden transition-all duration-300">
                                {/* User Picture */}
                                <img
                                    id="hero-profile-picture"
                                    src={profile.avatarUrl}
                                    alt={`${profile.name} - Profile`}
                                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                />

                                {/* Gradient vignette overlay */}
                                {/* <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-transparent to-black/20 pointer-events-none" /> */}
                            </div>

                            {/* Floating Badge 1: Tech Stack */}
                            <div className="absolute -top-4 -left-4 px-3 py-2 rounded-xl bg-slate-900/90 border border-slate-800 shadow-xl backdrop-blur-md flex items-center gap-2 animate-bounce duration-1000">
                                <span className="text-xs font-semibold text-slate-200">
                                    Frontend Developer
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
