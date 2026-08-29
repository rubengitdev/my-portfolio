import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { data } from './data/data';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import type { Project } from './types';
import Certifications from './components/Certifications';

function App() {
    const [activeSection, setActiveSection] = useState('hero');
    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null,
    );
    const profile = data.profile;
    const projects = data.projects;
    const certifications = data.certifications;

    // HANDLE CURSOR BACKGROUND GLOW
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            document.documentElement.style.setProperty(
                '--cursor-x',
                `${e.clientX}px`,
            );
            document.documentElement.style.setProperty(
                '--cursor-y',
                `${e.clientY}px`,
            );
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // HANDLE DESKTOP NAVIGATION LINK BACKGROUND COLOR
    useEffect(() => {
        const sections = [
            'hero',
            'projects',
            'certifications',
            'skills',
            'contact',
        ];
        const handleScroll = () => {
            const scrollY = window.scrollY + 200;
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el && el.offsetTop <= scrollY) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Preview Modal
    const handleOpenProjectModal = (project: Project) => {
        setSelectedProject(project);
    };

    const handleCloseProjectModal = () => {
        setSelectedProject(null);
    };

    const handleNavigate = (sectionId: string) => {
        setActiveSection(sectionId);
        document
            .getElementById(sectionId)
            ?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        // START MAIN CONTAINER
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-600 selection:text-white">
            {/* START HANDLE MOUSE GLOW */}
            <div
                className="fixed inset-0 pointer-events-none z-30 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px at var(--cursor-x, 50%) var(--cursor-y, 50%), rgba(99,102,241,0.15), transparent 80%)`,
                }}
            />
            {/* END HANDLE MOUSE GLOW */}

            {/* START NAVBAR COMPONENT */}
            <Navbar
                profile={profile}
                activeSection={activeSection}
                onNavigate={handleNavigate}
            />
            {/* END NAVBAR COMPONENT */}

            {/* START MAIN COMPONENTS */}
            <main className="flex-1">
                {/* START HERO SECTION */}
                <Hero
                    profile={profile}
                    socialLinks={data.socialLinks}
                    onNavigate={handleNavigate}
                />
                {/* END HERO SECTION */}

                {/* START PROJECTS COMPONENT */}
                <Projects
                    projects={projects}
                    onOpenProjectModal={handleOpenProjectModal}
                />

                <ProjectModal
                    project={selectedProject}
                    onClose={handleCloseProjectModal}
                />
                {/* END PROJECTS COMPONENT */}

                {/* START CERTIFICATIONS COMPONENTS */}
                <Certifications certifications={certifications} />
                {/* END CERTIFICATIONS COMPONENTS */}

                {/* START SKILLS SECTION */}
                <Skills skills={data.skills} />
                {/* END SKILLS SECTION */}

                {/* START CONTACT SECTION */}
                <Contact profile={profile} />
                {/* END CONTACT SECTION */}
            </main>
            {/* END MAIN COMPONENTS */}

            {/* FOOTER COMPONENT */}
            <Footer
                profile={profile}
                socialLinks={data.socialLinks}
                onNavigate={handleNavigate}
            />
        </div>
        // END MAIN CONTAINER
    );
}

export default App;
