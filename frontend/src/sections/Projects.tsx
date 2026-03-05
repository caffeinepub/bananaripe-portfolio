import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Projects = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const projects = [
        {
            id: '1',
            title: 'E-Commerce Platform',
            description:
                'A full-featured e-commerce platform with real-time inventory management, payment processing, and advanced analytics dashboard.',
            image: '/assets/generated/project-ecommerce.dim_800x600.jpg',
            techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
            projectUrl: 'https://example.com',
            githubUrl: 'https://github.com',
        },
        {
            id: '2',
            title: 'Mobile Fitness App',
            description:
                'Cross-platform mobile application for fitness tracking with AI-powered workout recommendations and social features.',
            image: '/assets/generated/project-mobile-app.dim_600x800.jpg',
            techStack: ['React Native', 'TypeScript', 'Firebase', 'TensorFlow'],
            projectUrl: 'https://example.com',
            githubUrl: 'https://github.com',
        },
        {
            id: '3',
            title: 'SaaS Dashboard',
            description:
                'Modern SaaS analytics dashboard with real-time data visualization, team collaboration tools, and customizable widgets.',
            image: '/assets/generated/project-web-app.dim_800x600.jpg',
            techStack: ['Next.js', 'GraphQL', 'MongoDB', 'D3.js', 'WebSocket'],
            projectUrl: 'https://example.com',
            githubUrl: 'https://github.com',
        },
    ];

    return (
        <section id="projects" className="relative px-6 py-24 md:py-32" ref={sectionRef}>
            <div className="container mx-auto max-w-6xl">
                <div
                    className={`mb-16 text-center transition-all duration-1000 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                >
                    <h2 className="mb-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                        Featured Projects
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        A selection of my recent work showcasing expertise in full-stack development,
                        UI/UX design, and modern web technologies.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`transition-all duration-1000 ${
                                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                            }`}
                            style={{ transitionDelay: `${200 * index}ms` }}
                        >
                            <Card className="group h-full overflow-hidden border-2 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                    <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <Button
                                            size="sm"
                                            variant="secondary"
                                            className="shadow-lg"
                                            asChild
                                        >
                                            <a
                                                href={project.projectUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`View ${project.title} live demo`}
                                            >
                                                <ExternalLink className="mr-2 h-4 w-4" />
                                                Demo
                                            </a>
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="secondary"
                                            className="shadow-lg"
                                            asChild
                                        >
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`View ${project.title} source code on GitHub`}
                                            >
                                                <Github className="mr-2 h-4 w-4" />
                                                Code
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="mb-3 text-xl font-bold">{project.title}</h3>
                                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech) => (
                                            <Badge
                                                key={tech}
                                                variant="outline"
                                                className="text-xs font-medium"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
