import { MessageCircle, ArrowUpRight, Phone } from 'lucide-react';
import type { ProfileInfo } from '../types';
import Button from './Button';

interface ContactProps {
    profile: ProfileInfo;
}

const Contact = ({ profile }: ContactProps) => {
    // Use explicit profile.whatsappUrl if provided, otherwise compute from profile.whatsappNumber or phone
    const rawNumber = profile.whatsappNumber || '0882003453869';
    const cleanPhone = rawNumber.replace(/[^0-9]/g, '');
    const whatsappUrl =
        profile.whatsappUrl ||
        `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
            `Hi ${profile.name}! I saw your portfolio and would like to talk about a project.`,
        )}`;

    const displayNumber = profile.whatsappNumber;
    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            {/* Ambient background lighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-87.5 bg-indigo-600/15 blur-[140px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-75 h-50 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Banner CTA Card */}
                <div
                    id="contact-banner-cta"
                    className="relative rounded-3xl bg-linear-to-b from-slate-900/90 via-slate-900/80 to-slate-950/95 border border-slate-800/90 shadow-2xl p-8 sm:p-12 md:p-16 text-center overflow-hidden group hover:border-indigo-500/40 transition-all duration-300"
                >
                    {/* Subtle grid pattern background */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none opacity-50" />

                    {/* Availability Pill */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-6 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Available for new opportunities</span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-2xl mx-auto mb-4">
                        Reach me out!
                    </h2>

                    {/* Subtitle */}
                    <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed">
                        Have an exciting project, freelance idea, or want to discuss a full-time
                        collaboration? Let's connect directly on WhatsApp!
                    </p>

                    {/* CTA Action Button */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button
                            id="whatsapp-contact-cta-btn"
                            href={whatsappUrl}
                            variant="primary"
                            size="lg"
                        >
                            <MessageCircle className="w-5 h-5 text-indigo-200 group-hover/btn:scale-110 transition-transform" />
                            <span>Let's Talk</span>
                            <ArrowUpRight className="w-5 h-5 text-indigo-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </Button>
                    </div>

                    {/* Footer Details within Banner */}
                    <div className="mt-8 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
                        {displayNumber && (
                            <>
                                <span className="hidden sm:inline text-slate-600">•</span>
                                <span className="flex items-center gap-1.5">
                                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                                    {displayNumber}
                                </span>
                            </>
                        )}
                        <span className="hidden sm:inline text-slate-600">•</span>
                        <span>Fast Response (if I'm not asleep)</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
