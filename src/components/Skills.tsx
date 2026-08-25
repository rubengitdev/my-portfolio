import {
    BarChart3,
    Box,
    Cloud,
    Code2,
    Cpu,
    Database,
    Eye,
    FileCode,
    GitBranch,
    Layers,
    Layout,
    Palette,
    Search,
    Server,
    Sparkles,
    Zap,
} from 'lucide-react';
import type { Skill, SkillCategory } from '../types';
import { useMemo, useState } from 'react';

interface SkillsProps {
    skills: Skill[];
}

const Skills = ({ skills }: SkillsProps) => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const categories: { id: SkillCategory; label: string }[] = [
        {
            id: 'all',
            label: 'All Skills',
        },
        {
            id: 'frontend',
            label: 'Frontend',
        },
        {
            id: 'backend',
            label: 'Backend & Server',
        },
        {
            id: 'tools',
            label: 'Tools',
        },
        {
            id: 'design',
            label: 'Design',
        },
    ];

    const filteredSkills = useMemo(() => {
        return skills.filter((skill) => {
            const matchesCategory =
                selectedCategory === 'all' || skill.category === selectedCategory;
            const matchesSearch =
                skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (skill.description &&
                    skill.description.toLowerCase().includes(searchQuery.toLowerCase()));
            return matchesCategory && matchesSearch;
        });
    }, [skills, selectedCategory, searchQuery]);

    const renderIcon = (iconName: string) => {
        const iconProps = {
            className: 'w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors',
        };
        switch (iconName) {
            case 'Code2':
                return <Code2 {...iconProps} />;
            case 'FileCode':
                return <FileCode {...iconProps} />;
            case 'Palette':
                return <Palette {...iconProps} />;
            case 'Sparkles':
                return <Sparkles {...iconProps} />;
            case 'Cpu':
                return <Cpu {...iconProps} />;
            case 'Server':
                return <Server {...iconProps} />;
            case 'Database':
                return <Database {...iconProps} />;
            case 'Layers':
                return <Layers {...iconProps} />;
            case 'Cloud':
                return <Cloud {...iconProps} />;
            case 'GitBranch':
                return <GitBranch {...iconProps} />;
            case 'Box':
                return <Box {...iconProps} />;
            case 'Zap':
                return <Zap {...iconProps} />;
            case 'Layout':
                return <Layout {...iconProps} />;
            case 'Eye':
                return <Eye {...iconProps} />;
            default:
                return <Code2 {...iconProps} />;
        }
    };

    return (
        <section id="skills" className="relative py-20">
            {/* Background glow */}
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-indigo-600/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Heading */}
                <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-400 text-xs font-semibold">
                        <BarChart3 className="w-3.5 h-3.5" />
                        <span>Technical Proficiencies</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                        Skills & Core Technologies
                    </h2>
                    <p className="text-base text-slate-400">
                        A comprehensive overview of the programming languages, frameworks, developer
                        tools, and architectural patterns I use to deliver end-to-end applications.
                    </p>
                </div>

                {/* Filter and Search Controls */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
                    {/* Category Tabs */}
                    <div
                        id="skills-category-tabs"
                        className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800"
                    >
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                id={`skills-tab-${cat.id}`}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                                    selectedCategory === cat.id
                                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 font-semibold'
                                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                                }`}
                            >
                                <span>{cat.label}</span>
                            </button>
                        ))}
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            id="skills-search-input"
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search skill (e.g., React, Node)..."
                            className="w-full pl-9 pr-4 py-2 bg-slate-900/80 border border-slate-800 focus:border-indigo-500 rounded-xl text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                            >
                                Clear
                            </button>
                        )}
                    </div>
                </div>

                {/* Skills Grid */}
                {filteredSkills.length === 0 ? (
                    <div className="text-center py-16 p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
                        <p className="text-slate-400 text-sm">
                            No skills found matching "{searchQuery}".
                        </p>
                        <button
                            onClick={() => {
                                setSelectedCategory('all');
                                setSearchQuery('');
                            }}
                            className="mt-3 text-xs text-indigo-400 hover:underline"
                        >
                            Reset filters
                        </button>
                    </div>
                ) : (
                    <div
                        id="skills-grid"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
                    >
                        {filteredSkills.map((skill) => (
                            <div
                                key={skill.id}
                                id={`skill-card-${skill.id}`}
                                className="group relative p-5 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-indigo-500/50 hover:bg-slate-900 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1 cursor-pointer"
                            >
                                {/* Top: Icon + Name */}
                                <div className="flex items-start justify-between gap-3 mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:border-indigo-500/40 flex items-center justify-center group-hover:scale-105 transition-all">
                                            {renderIcon(skill.icon)}
                                        </div>
                                        <div>
                                            <h3 className="text-sm sm:text-base font-bold text-slate-100 group-hover:text-white">
                                                {skill.name}
                                            </h3>
                                            <span className="text-xs text-slate-400 capitalize">
                                                {skill.category} •{' '}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                {skill.description && (
                                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                                        {skill.description}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Skills;
