import type { ProfileInfo, SocialLink } from '../types';

export const data: {
    profile: ProfileInfo;
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
    },
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
