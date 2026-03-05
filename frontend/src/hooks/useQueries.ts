import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Project, Experience, Service, Skill, ContactInfo } from '../backend';

export function useGetAllProjects() {
    const { actor, isFetching } = useActor();

    return useQuery<Project[]>({
        queryKey: ['projects'],
        queryFn: async () => {
            if (!actor) return [];
            return actor.getAllProjects();
        },
        enabled: !!actor && !isFetching,
    });
}

export function useGetFeaturedProjects() {
    const { actor, isFetching } = useActor();

    return useQuery<Project[]>({
        queryKey: ['projects', 'featured'],
        queryFn: async () => {
            if (!actor) return [];
            return actor.getFeaturedProjects();
        },
        enabled: !!actor && !isFetching,
    });
}

export function useGetAllExperiences() {
    const { actor, isFetching } = useActor();

    return useQuery<Experience[]>({
        queryKey: ['experiences'],
        queryFn: async () => {
            if (!actor) return [];
            return actor.getAllExperiences();
        },
        enabled: !!actor && !isFetching,
    });
}

export function useGetAllServices() {
    const { actor, isFetching } = useActor();

    return useQuery<Service[]>({
        queryKey: ['services'],
        queryFn: async () => {
            if (!actor) return [];
            return actor.getAllServices();
        },
        enabled: !!actor && !isFetching,
    });
}

export function useGetSkills() {
    const { actor, isFetching } = useActor();

    return useQuery<Skill[]>({
        queryKey: ['skills'],
        queryFn: async () => {
            if (!actor) return [];
            return actor.getSkills();
        },
        enabled: !!actor && !isFetching,
    });
}

export function useGetContactInfo() {
    const { actor, isFetching } = useActor();

    return useQuery<ContactInfo>({
        queryKey: ['contact'],
        queryFn: async () => {
            if (!actor) throw new Error('Actor not initialized');
            return actor.getContactInfo();
        },
        enabled: !!actor && !isFetching,
        retry: false,
    });
}

export function useAddProject() {
    const { actor } = useActor();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (project: {
            id: string;
            title: string;
            description: string;
            imageUrl: string;
            techStack: string[];
            projectUrl: string;
            githubUrl: string;
            featured: boolean;
        }) => {
            if (!actor) throw new Error('Actor not initialized');
            return actor.addOrUpdateProject(
                project.id,
                project.title,
                project.description,
                project.imageUrl,
                project.techStack,
                project.projectUrl,
                project.githubUrl,
                project.featured
            );
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['projects'] });
        },
    });
}

export function useAddExperience() {
    const { actor } = useActor();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (experience: {
            id: string;
            title: string;
            company: string;
            location: string;
            duration: string;
            description: string;
            skills: string[];
        }) => {
            if (!actor) throw new Error('Actor not initialized');
            return actor.addExperience(
                experience.id,
                experience.title,
                experience.company,
                experience.location,
                experience.duration,
                experience.description,
                experience.skills
            );
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['experiences'] });
        },
    });
}

export function useAddService() {
    const { actor } = useActor();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (service: {
            id: string;
            title: string;
            description: string;
            icon: string;
        }) => {
            if (!actor) throw new Error('Actor not initialized');
            return actor.addService(service.id, service.title, service.description, service.icon);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['services'] });
        },
    });
}

export function useAddSkill() {
    const { actor } = useActor();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (skill: { name: string; level: string; icon: string }) => {
            if (!actor) throw new Error('Actor not initialized');
            return actor.addSkill(skill.name, skill.level, skill.icon);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['skills'] });
        },
    });
}

export function useSetContactInfo() {
    const { actor } = useActor();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (contact: {
            email: string;
            phone: string;
            socialLinks: Array<{ platform: string; url: string; icon: string }>;
        }) => {
            if (!actor) throw new Error('Actor not initialized');
            return actor.setContactInfo(contact.email, contact.phone, contact.socialLinks);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['contact'] });
        },
    });
}
