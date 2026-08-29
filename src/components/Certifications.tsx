import type { Certification } from '../types';
import { ExternalLink, FileText } from 'lucide-react';

interface CertificationsProps {
    certifications: Certification[];
}

const Certifications = ({ certifications }: CertificationsProps) => {
    return (
        <section
            id="certifications"
            className="py-24 relative bg-slate-950/60 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-400 text-xs font-semibold">
                    <FileText className="w-3.5 h-3.5" />
                    <span>Featured Certificates</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    Certifications
                </h2>
                <p className="text-base text-slate-400">
                    Certificates and Credentials I've completed.
                </p>
            </div>

            <div
                id="certifications-grid"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
                {certifications.map((cert) => (
                    <div
                        key={cert.id}
                        id={`cert-card-${cert.id}`}
                        className="group flex flex-col rounded-2xl sm:rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900/95 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/10 overflow-hidden hover:-translate-y-1.5"
                    >
                        <div className="relative aspect-video w-full overflow-hidden">
                            <img
                                src={cert.thumbnail}
                                alt={cert.title}
                                className="block w-full h-full group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between space-y-4">
                            <div className="space-y-2">
                                <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                                    {cert.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
                                    {cert.description}
                                </p>
                            </div>
                            {cert.certificationUrl && (
                                <div className="pt-3 border-t border-slate-800 flex items-center justify-end">
                                    <a
                                        id={`cert-card-link-${cert.id}`}
                                        href={cert.certificationUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                                        title="View Certification"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
