export interface ProfileInfo {
    name: string;
    role: string;
    bio: string[];
    status: 'available' | 'open to work' | 'open for collab';
    email: string;
    avatarUrl: string;
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
