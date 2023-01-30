interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

export interface Skill extends SanityBody {
    _type: "skill";
    image: Image;
    title: string;
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    aboutInfo: string;
    heroPicture: Image;
    aboutPicture: Image;
}

export interface Project extends SanityBody {
    _type: "project";
    title: string;
    summary: string;
    linkToBuild: string;
    technologies: Skill[];
}