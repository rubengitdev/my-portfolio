import { useEffect, useState } from 'react';
import type { ProfileInfo } from '../types';
import { ArrowUpRight, Code2, Menu, X } from 'lucide-react';
import Button from './Button';

interface NavbarProps {
    profile: ProfileInfo;
    activeSection: string;
    onNavigate: (sectionId: string) => void;
}

const Navbar = ({ profile, activeSection, onNavigate }: NavbarProps) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMenuClick = (id: string) => {
        setMobileMenuOpen(false);
        onNavigate(id);
    };

    const navItems = [
        { id: 'hero', label: 'About' },
        { id: 'projects', label: 'Projects' },
        { id: 'skills', label: 'Skills' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <header
            id="main-navbar"
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
                isScrolled
                    ? 'bg-slate-950/85 backdrop-blur-md shadow-lg shadow-black/20 py-3.5'
                    : 'bg-transparent py-5'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                {/* START BRAND LOGO */}
                <button
                    className="flex items-center gap-3 group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg p-1 cursor-pointer"
                    id="navbar-brand-button"
                    onClick={() => handleMenuClick('hero')}
                >
                    <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-indigo-600 via-indigo-500 to-cyan-400 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
                        <Code2 className="w-5 h-5" />
                    </div>
                    <div>
                        <span className="font-bold text-lg text-slate-100 tracking-tight block group-hover:text-indigo-400 transition-colors">
                            {profile.name}
                        </span>
                        <span className="text-xs text-slate-400 font-medium flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            {profile.status === 'available'
                                ? 'Available for Work'
                                : 'Software Engineer'}
                        </span>
                    </div>
                </button>

                {/* START DESKTOP NAVIGATION LINKS */}
                <nav
                    id="desktop-nav-links"
                    className="hidden md:flex items-center gap-1 px-4 py-3"
                >
                    {navItems.map((item) => {
                        const isActive = activeSection === item.id;
                        return (
                            <button
                                key={item.id}
                                id={`nav-link-${item.id}`}
                                onClick={() => handleMenuClick(item.id)}
                                className={`relative px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                                    isActive
                                        ? 'text-white bg-indigo-600 shadow-sm shadow-indigo-500/30'
                                        : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                                }`}
                            >
                                {item.label}
                            </button>
                        );
                    })}
                </nav>
                {/* END DESKTOP NAVIGATION LINKS */}

                {/* START RIGHT CTA */}
                <div className="hidden md:flex items-center gap-3">
                    <Button
                        id="nav-cta-contact-button"
                        onClick={() => handleMenuClick('contact')}
                        variant="primary"
                    >
                        <span>Let's Talk</span>
                        <ArrowUpRight className="w-4 h-4" />
                    </Button>
                </div>
                {/* END RIGHT CTA */}

                {/* START MOBILE HAMBURGER TOGGLE */}
                <div className="flex md:hidden items-center gap-2">
                    <button
                        id="mobile-menu-toggle-button"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                        aria-label="Toggle Navigation Menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="w-5 h-5" />
                        ) : (
                            <Menu className="w-5 h-5" />
                        )}
                    </button>
                </div>
            </div>
            {/* END MOBILE HAMBURGER TOGGLE */}

            {/* START MOBILE DRAWER MENU */}
            {mobileMenuOpen && (
                <div
                    id="mobile-nav-drawer"
                    className="md:hidden bg-slate-950/95 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 mt-2 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top duration-200"
                >
                    <div className="flex flex-col space-y-1">
                        {navItems.map((item) => {
                            const isActive = activeSection === item.id;
                            return (
                                <button
                                    key={item.id}
                                    id={`mobile-nav-link-${item.id}`}
                                    onClick={() => handleMenuClick(item.id)}
                                    className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                                        isActive
                                            ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30'
                                            : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                                    }`}
                                >
                                    {item.label}
                                </button>
                            );
                        })}
                    </div>

                    <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
                        <button
                            id="mobile-nav-cta-contact"
                            onClick={() => handleMenuClick('contact')}
                            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-600 text-white font-medium text-sm shadow-md"
                        >
                            <span>Get In Touch</span>
                            <ArrowUpRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            )}
            {/* END MOBILE DRAWER MENU */}
        </header>
    );
};

export default Navbar;
