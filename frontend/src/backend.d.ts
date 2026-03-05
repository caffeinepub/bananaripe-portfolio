import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Experience {
    id: string;
    title: string;
    duration: string;
    description: string;
    company: string;
    skills: Array<string>;
    location: string;
}
export interface Skill {
    icon: string;
    name: string;
    level: string;
}
export interface SocialLink {
    url: string;
    icon: string;
    platform: string;
}
export interface Service {
    id: string;
    title: string;
    icon: string;
    description: string;
}
export interface Profile {
    bio: string;
    theme: Theme;
    name: string;
    role: string;
    photoUrl: string;
}
export interface Project {
    id: string;
    title: string;
    featured: boolean;
    description: string;
    githubUrl: string;
    imageUrl: string;
    projectUrl: string;
    techStack: Array<string>;
}
export interface ContactInfo {
    socialLinks: Array<SocialLink>;
    email: string;
    phone: string;
}
export enum Theme {
    dark = "dark",
    light = "light"
}
export interface backendInterface {
    addExperience(id: string, title: string, company: string, location: string, duration: string, description: string, skillsArray: Array<string>): Promise<void>;
    addOrUpdateProfile(name: string, role: string, bio: string, photoUrl: string, theme: Theme): Promise<void>;
    addOrUpdateProject(id: string, title: string, description: string, imageUrl: string, techStack: Array<string>, projectUrl: string, githubUrl: string, featured: boolean): Promise<void>;
    addService(id: string, title: string, description: string, icon: string): Promise<void>;
    addSkill(name: string, level: string, icon: string): Promise<void>;
    getAllExperiences(): Promise<Array<Experience>>;
    getAllProjects(): Promise<Array<Project>>;
    getAllServices(): Promise<Array<Service>>;
    getContactInfo(): Promise<ContactInfo>;
    getExperience(id: string): Promise<Experience>;
    getFeaturedProjects(): Promise<Array<Project>>;
    getProfile(user: Principal): Promise<Profile>;
    getProject(id: string): Promise<Project>;
    getService(id: string): Promise<Service>;
    getSkills(): Promise<Array<Skill>>;
    setContactInfo(email: string, phone: string, socialLinks: Array<SocialLink>): Promise<void>;
}
