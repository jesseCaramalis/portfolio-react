

interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: 'image';
    asset: {
        _ref: string;
        _type: 'reference';
    };
}

export interface PageInfo extends SanityBody {
    _type: 'pageInfo';
    backgroundInformation: string;
    role: string;
    heroImage: Image;
    name: string;
    profilePic: Image;
}

export interface Technology extends SanityBody {
    _type: 'technology';
    image: Image;
    title: string;
}

export interface Skill extends SanityBody {
    _type: 'skill';
    image: Image;
    title: string;
}

export interface Project extends SanityBody {
    _type: 'project';
    title: string;
    linkToBuild: string;
    image: Image;
    summary: string;
    technologies: Technology[];
}

export interface Social extends SanityBody {
    _type: 'social';
    title: string;
    url: string;
}