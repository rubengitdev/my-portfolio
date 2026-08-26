import { useMemo, useState } from 'react';
import { FolderGit2, ArrowRight, ExternalLink } from 'lucide-react';
import type { Project } from '../types';

interface ProjectsProps {
    projects: Project[];
    onOpenProjectModal: (project: Project) => void;
}

const Projects = ({ projects, onOpenProjectModal }: ProjectsProps) => {
    const [selectedFilter, setSelectedFilter] = useState<string>('All');

    const filterCategories = useMemo(() => {
        const unique = Array.from(new Set(projects.map((p) => p.category)));
        return ['All', ...unique];
    }, [projects]);

    const filteredProjects = useMemo(() => {
        if (selectedFilter === 'All') return projects;
        return projects.filter((p) => p.category === selectedFilter);
    }, [projects, selectedFilter]);

    return (
        <section
            id="projects"
            className="py-24 relative bg-slate-950/60 border-y border-slate-900"
        >
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-400 text-xs font-semibold">
                        <FolderGit2 className="w-3.5 h-3.5" />
                        <span>Featured Work</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                        Projects Showcase
                    </h2>
                    <p className="text-base text-slate-400">
                        Click on any project thumbnail to inspect details and
                        see the interactive preview.
                    </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
                    {filterCategories.map((cat) => {
                        const count =
                            cat === 'All'
                                ? projects.length
                                : projects.filter((p) => p.category === cat)
                                      .length;
                        return (
                            <button
                                key={cat}
                                id={`project-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                                onClick={() => setSelectedFilter(cat)}
                                aria-pressed={selectedFilter === cat}
                                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                                    selectedFilter === cat
                                        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 font-semibold'
                                        : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                                }`}
                            >
                                <span>{cat}</span>
                                <span
                                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                                        selectedFilter === cat
                                            ? 'bg-indigo-700 text-white'
                                            : 'bg-slate-800 text-slate-500'
                                    }`}
                                >
                                    {count}
                                </span>
                            </button>
                        );
                    })}
                </div>

                <div
                    id="projects-grid"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                >
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            id={`project-card-${project.id}`}
                            className="group flex flex-col rounded-2xl sm:rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900/95 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/10 overflow-hidden hover:-translate-y-1.5"
                        >
                            <button
                                id={`project-thumbnail-trigger-${project.id}`}
                                onClick={() => onOpenProjectModal(project)}
                                className="relative aspect-video w-full overflow-hidden bg-slate-950 cursor-pointer group/thumb text-left"
                                aria-label={`Open preview modal for ${project.title}`}
                            >
                                <img
                                    src={project.thumbnailGifUrl}
                                    alt={`${project.title} Preview`}
                                    className="w-full h-full object-contain group-hover/thumb:scale-105 transition-transform duration-500"
                                    style={{ imageRendering: 'pixelated' }}
                                />

                                <div className="absolute inset-0 bg-slate-950/40 group-hover/thumb:bg-slate-950/60 transition-colors flex items-center justify-center" />

                                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                                    <span className="px-2.5 py-1 rounded-lg bg-slate-950/85 backdrop-blur-md border border-slate-700/80 text-[11px] font-semibold text-slate-200">
                                        {project.category}
                                    </span>
                                </div>
                            </button>

                            <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between space-y-4">
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between gap-2">
                                        <h3
                                            onClick={() =>
                                                onOpenProjectModal(project)
                                            }
                                            className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors cursor-pointer"
                                        >
                                            {project.title}
                                        </h3>
                                    </div>

                                    <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-1.5">
                                    {project.tags
                                        .slice(0, 4)
                                        .map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className="px-2.5 py-0.5 rounded-md bg-slate-800/80 border border-slate-700/60 text-[11px] font-medium text-slate-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    {project.tags.length > 4 && (
                                        <span className="px-1.5 py-0.5 rounded-md bg-slate-800 text-[11px] font-medium text-slate-400">
                                            +{project.tags.length - 4}
                                        </span>
                                    )}
                                </div>

                                <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-2">
                                    <button
                                        id={`project-card-modal-button-${project.id}`}
                                        onClick={() =>
                                            onOpenProjectModal(project)
                                        }
                                        className="flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer"
                                    >
                                        <span>Inspect Details</span>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </button>

                                    <div className="flex items-center gap-2">
                                        {project.githubUrl && (
                                            <a
                                                id={`project-card-github-${project.id}`}
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                                                title="View GitHub Repository"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
