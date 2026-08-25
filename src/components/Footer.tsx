import { ArrowUp, Code2 } from 'lucide-react';
import type { ProfileInfo, SocialLink } from '../types';
import SocialLinks from './SocialLinks';

interface FooterProps {
    profile: ProfileInfo;
    socialLinks: SocialLink[];
    onNavigate: (sectionId: string) => void;
}

const Footer = ({ profile, socialLinks, onNavigate }: FooterProps) => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer
            id="main-footer"
            className="bg-slate-950 border-t border-slate-900 pt-16 pb-12"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-900">
                    {/* Brand & Bio (6 cols) */}
                    <div className="md:col-span-6 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-linear-to-tr from-indigo-600 to-cyan-400 flex items-center justify-center text-white shadow-md">
                                <Code2 className="w-5 h-5" />
                            </div>
                            <span className="font-bold text-lg text-white tracking-tight">
                                {profile.name}
                            </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
                            Engineered with React, TypeScript, and modern
                            Tailwind CSS design principles.
                        </p>
                    </div>

                    {/* Quick Navigation Links (3 cols) */}
                    <div className="md:col-span-3 space-y-3">
                        <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                            Quick Navigation
                        </h4>
                        <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                            <li>
                                <button
                                    onClick={() => onNavigate('hero')}
                                    className="hover:text-indigo-400 transition-colors"
                                >
                                    About
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => onNavigate('skills')}
                                    className="hover:text-indigo-400 transition-colors"
                                >
                                    Skills
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => onNavigate('projects')}
                                    className="hover:text-indigo-400 transition-colors"
                                >
                                    Projects
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => onNavigate('contact')}
                                    className="hover:text-indigo-400 transition-colors"
                                >
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Social Profiles & Back to top (3 cols) */}
                    <div className="md:col-span-3 space-y-3">
                        <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                            Connect Online
                        </h4>
                        <SocialLinks links={socialLinks} variant="compact" />

                        <div className="pt-3">
                            <button
                                id="footer-back-to-top"
                                onClick={scrollToTop}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                            >
                                <span>Back to Top</span>
                                <ArrowUp className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom copyright line */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                    <p>
                        © {currentYear} {profile.name}. All rights reserved.
                    </p>
                    <div className="flex items-center gap-1">
                        <span>
                            Built with precision using React, TypeScript &
                            Tailwind CSS
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
