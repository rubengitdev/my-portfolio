import { Check, Copy, ExternalLink, Mail, MessageSquare } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import type { SocialLink } from '../types';
import { useState } from 'react';

interface SocialLinksProps {
    links: SocialLink[];
    variant?: 'hero' | 'compact' | 'footer' | 'cards';
    email?: string;
}

const SocialLinks = ({ links, variant = 'hero', email }: SocialLinksProps) => {
    const [copiedEmail, setCopiedEmail] = useState(false);

    const handleCopyEmail = (e: React.MouseEvent) => {
        e.preventDefault();
        if (!email) return;
        navigator.clipboard.writeText(email);
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2200);
    };

    const getPlatformIcon = (platform: string) => {
        switch (platform) {
            case 'github':
                return <FaGithub className="w-5 h-5" />;
            case 'linkedin':
                return <FaLinkedin className="w-5 h-5" />;
            case 'discord':
                return <MessageSquare className="w-5 h-5" />;
            case 'email':
                return <Mail className="w-5 h-5" />;
            default:
                return <ExternalLink className="w-5 h-5" />;
        }
    };

    if (variant === 'cards') {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {links.map((link) => (
                    <a
                        key={link.id}
                        id={`social-card-${link.id}`}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-indigo-500/50 hover:bg-slate-800/80 transition-all duration-200 group"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 group-hover:text-indigo-400 group-hover:bg-indigo-950/40 transition-colors">
                                {getPlatformIcon(link.platform)}
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                                    {link.name}
                                </h4>
                                <p className="text-xs text-slate-400">
                                    {link.username}
                                </p>
                            </div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </a>
                ))}
            </div>
        );
    }

    return (
        <div className="flex flex-wrap items-center gap-3">
            {links.map((link) => (
                <a
                    key={link.id}
                    id={`social-link-icon-${link.id}`}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`${link.name} (${link.username})`}
                    className="relative group p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500/60 hover:bg-indigo-950/30 transition-all duration-200 hover:-translate-y-0.5"
                    aria-label={link.name}
                >
                    {getPlatformIcon(link.platform)}
                    <span className="sr-only">{link.name}</span>

                    {/* Tooltip */}
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-900 text-slate-200 text-[11px] font-medium rounded shadow-md border border-slate-700 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-150 whitespace-nowrap z-30">
                        {link.name}
                    </span>
                </a>
            ))}

            {email && (
                <button
                    id="quick-copy-email-button"
                    onClick={handleCopyEmail}
                    title={copiedEmail ? 'Email Copied!' : 'Copy Email Address'}
                    className="relative group flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500/60 hover:bg-indigo-950/30 transition-all duration-200 hover:-translate-y-0.5 text-xs font-medium"
                >
                    {copiedEmail ? (
                        <>
                            <Check className="w-4 h-4 text-emerald-400 animate-in zoom-in" />
                            <span className="text-emerald-400">Copied!</span>
                        </>
                    ) : (
                        <>
                            <Copy className="w-4 h-4 text-slate-400 group-hover:text-indigo-400 transition-colors" />
                            <span className="hidden sm:inline">Copy Email</span>
                        </>
                    )}
                </button>
            )}
        </div>
    );
};

export default SocialLinks;
