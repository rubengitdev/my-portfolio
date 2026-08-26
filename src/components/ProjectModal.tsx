import { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';
import type { Project } from '../types';

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
    // Close on Escape key
    useEffect(() => {
        if (!project) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [project, onClose]);

    // project is null → render nothing. This is the whole "is it open" logic.
    if (!project) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
        >
            {/* Backdrop - click to close */}
            <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" />

            {/* Modal Content */}
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    aria-label="Close project details"
                    className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-slate-950/80 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Thumbnail */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                    <img
                        src={project.thumbnailGifUrl}
                        alt={`${project.title} Preview`}
                        className="w-full h-full object-contain"
                        style={{ imageRendering: 'pixelated' }}
                    />
                </div>

                {/* Body */}
                <div className="p-6 sm:p-8 space-y-6">
                    {/* Title + Category */}
                    <div className="space-y-2">
                        <span className="inline-block px-2.5 py-1 rounded-lg bg-indigo-950/60 border border-indigo-500/30 text-[11px] font-semibold text-indigo-400 capitalize">
                            {project.category}
                        </span>
                        <h2
                            id="project-modal-title"
                            className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight"
                        >
                            {project.title}
                        </h2>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                        {project.description}
                    </p>

                    {/* Features */}
                    {project.features.length > 0 && (
                        <div className="space-y-2">
                            <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wide">
                                Features
                            </h3>
                            <ul className="space-y-1.5">
                                {project.features.map((feature, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-start gap-2 text-sm text-slate-400"
                                    >
                                        <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag, idx) => (
                            <span
                                key={idx}
                                className="px-2.5 py-0.5 rounded-md bg-slate-800/80 border border-slate-700/60 text-[11px] font-medium text-slate-300"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* GitHub Link */}
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold transition-colors"
                        >
                            <ExternalLink className="w-4 h-4" />
                            <span>View on GitHub</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
