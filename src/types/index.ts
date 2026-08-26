export interface ProfileInfo {
    name: string;
    role: string;
    bio: string[];
    status: 'available' | 'open to work' | 'open for collab';
    email: string;
    avatarUrl: string;
    whatsappUrl?: string;
    whatsappNumber?: string;
}

export interface SocialLink {
    id: string;
    name: string;
    platform: 'github' | 'linkedin' | 'discord' | 'email';
    url: string;
    username: string;
    icon: string;
    primary?: boolean;
}

export type SkillCategory = 'all' | 'frontend' | 'backend' | 'tools' | 'design';

export interface Skill {
    id: string;
    name: string;
    category: 'frontend' | 'backend' | 'tools' | 'design';
    icon: string;
    description?: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    category: 'open source' | 'closed source';
    tags: string[];
    features: string[];
    thumbnailGif: string;
    githubUrl?: string;
}
