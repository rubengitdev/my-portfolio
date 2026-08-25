import type { ProfileInfo, Skill, SocialLink } from '../types';
import profilePhoto from '../assets/profile-pic.jpg';

export const data: {
    profile: ProfileInfo;
    skills: Skill[];
    socialLinks: SocialLink[];
} = {
    profile: {
        name: 'Ruben Cahyadi',
        role: 'Front-end Developer',
        bio: [
            'I specialize in TypeScript, modern React architectures, serverless backends, and responsive design systems. My focus is on writing clean, maintainable code with high test coverage and optimal performance.',
            "When I'm not writing code, you can find me exploring new open-source libraries, contributing to tech communities, or perfecting micro-interactions in Figma.",
        ],
        status: 'available',
        email: 'rubencahyadi504@gmail.com',
        avatarUrl: profilePhoto,
    },
    skills: [
        // FRONTEND SKILL
        {
            id: 'react',
            name: 'React 19',
            category: 'frontend',
            icon: 'Code2',
            description:
                'Component architecture, hoks, server components, and performance profiling.',
        },
        {
            id: 'typescript',
            name: 'Typescript',
            category: 'frontend',
            icon: 'FileCode',
            description:
                'Strict typing, generics, AST utilities, and enterprise scale codebases.',
        },
        {
            id: 'css',
            name: 'CSS: Cascading Style Sheets',
            category: 'frontend',
            icon: 'Palette',
            description:
                'a standard stylesheet language used to control the visual presentation, layout, and formatting of documents written in HTML or XML.',
        },
        {
            id: 'tailwind',
            name: 'Tailwind CSS',
            category: 'frontend',
            icon: 'Palette',
            description:
                'an open-source, utility-first CSS framework used by web developers to build custom user interfaces quickly.',
        },
        {
            id: 'node',
            name: 'Node.js',
            category: 'backend',
            icon: 'Server',
            description:
                'open-source, cross-platform runtime environment that allows you to run JavaScript code outside of a web browser.',
        },
        {
            id: 'express',
            name: 'Express.js',
            category: 'backend',
            icon: 'Server',
            description:
                'minimal and flexible web application framework for Node.js that simplifies the process of building web applications and APIs',
        },
        {
            id: 'postgresql',
            name: 'PostgreSQL',
            category: 'backend',
            icon: 'Server',
            description:
                'a free, open-source relational database management system that uses and extends the SQL language to safely store, manage, and scale complex data workloads.',
        },
        {
            id: 'neovim',
            name: 'Neovim',
            category: 'tools',
            icon: 'Server',
            description:
                'a free, open-source fork of the Vim text editor designed to aggressively refactor its source code for greater extensibility, modern UI integration, and asynchronous plugin execution',
        },
        {
            id: 'vscode',
            name: 'VSCode',
            category: 'tools',
            icon: 'Server',
            description:
                'a free, lightweight code editor made by Microsoft for Windows, macOS, and Linux.',
        },
        {
            id: 'postman',
            name: 'Postman',
            category: 'tools',
            icon: 'Server',
            description:
                'a popular platform used by developers and testers to build, test, and manage APIs (Application Programming Interfaces)',
        },
        {
            id: 'figma',
            name: 'Figma',
            category: 'design',
            icon: 'Server',
            description:
                'a cloud-based digital design and collaboration tool used to create websites, mobile apps, and user interfaces',
        },
    ],
    socialLinks: [
        {
            id: 'github',
            name: 'GitHub',
            platform: 'github',
            url: 'https://github.com',
            username: '@rubengitdev',
            icon: 'Github',
            primary: true,
        },
        {
            id: 'linkedin',
            name: 'LinkedIn',
            platform: 'linkedin',
            url: 'https://linkedin.com',
            username: 'in/ruben-cahyadi',
            icon: 'Linkedin',
            primary: true,
        },
        {
            id: 'discord',
            name: 'Discord',
            platform: 'discord',
            url: 'https://discord.com',
            username: 'rubendiscord',
            icon: 'MessageSquare',
            primary: false,
        },
    ],
};
