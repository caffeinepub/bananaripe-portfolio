import { useEffect, useRef, useState } from 'react';
import { Briefcase, Code, Layers, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Experience = () => {
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

    const experiences = [
        {
            id: '1',
            title: 'Senior Full-Stack Developer',
            company: 'TechCorp Solutions',
            location: 'San Francisco, CA',
            duration: '2022 - Present',
            description:
                'Leading development of enterprise-scale web applications, mentoring junior developers, and architecting cloud-native solutions.',
            skills: ['React', 'Node.js', 'AWS', 'TypeScript', 'GraphQL'],
        },
        {
            id: '2',
            title: 'Full-Stack Developer',
            company: 'Digital Innovations Inc',
            location: 'Remote',
            duration: '2020 - 2022',
            description:
                'Built and maintained multiple client projects, implemented CI/CD pipelines, and improved application performance by 40%.',
            skills: ['Vue.js', 'Python', 'Docker', 'PostgreSQL'],
        },
        {
            id: '3',
            title: 'Frontend Developer',
            company: 'StartupHub',
            location: 'New York, NY',
            duration: '2018 - 2020',
            description:
                'Developed responsive web applications, collaborated with design team to implement pixel-perfect UIs, and optimized for accessibility.',
            skills: ['React', 'JavaScript', 'CSS', 'Figma'],
        },
    ];

    const services = [
        {
            id: '1',
            icon: Code,
            title: 'Web Development',
            description:
                'Building responsive, performant web applications using modern frameworks and best practices.',
        },
        {
            id: '2',
            icon: Layers,
            title: 'UI/UX Design',
            description:
                'Creating intuitive, beautiful interfaces that prioritize user experience and accessibility.',
        },
        {
            id: '3',
            icon: Sparkles,
            title: 'Technical Consulting',
            description:
                'Providing expert guidance on architecture, technology stack selection, and best practices.',
        },
        {
            id: '4',
            icon: Briefcase,
            title: 'Project Management',
            description:
                'Leading development teams, managing timelines, and ensuring successful project delivery.',
        },
    ];

    return (
        <section id="experience" className="relative bg-muted/30 px-6 py-24 md:py-32" ref={sectionRef}>
            <div className="container mx-auto max-w-6xl">
                {/* Experience Section */}
                <div
                    className={`mb-16 transition-all duration-1000 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                >
                    <h2 className="mb-4 text-center font-display text-4xl font-bold tracking-tight sm:text-5xl">
                        Experience
                    </h2>
                    <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-muted-foreground">
                        My professional journey building innovative solutions for diverse clients and
                        industries.
                    </p>

                    <div className="space-y-6">
                        {experiences.map((exp, index) => (
                            <div
                                key={exp.id}
                                className={`transition-all duration-1000 ${
                                    isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                                }`}
                                style={{ transitionDelay: `${150 * index}ms` }}
                            >
                                <Card className="group border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
                                    <CardContent className="p-6 md:p-8">
                                        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                                            <div className="flex-1">
                                                <h3 className="mb-2 text-xl font-bold md:text-2xl">
                                                    {exp.title}
                                                </h3>
                                                <div className="mb-3 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                                                    <span className="font-semibold text-primary">
                                                        {exp.company}
                                                    </span>
                                                    <span>•</span>
                                                    <span>{exp.location}</span>
                                                </div>
                                                <p className="mb-4 leading-relaxed text-muted-foreground">
                                                    {exp.description}
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {exp.skills.map((skill) => (
                                                        <span
                                                            key={skill}
                                                            className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="shrink-0 text-sm font-semibold text-muted-foreground md:text-right">
                                                {exp.duration}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Services Section */}
                <div
                    className={`mt-24 transition-all delay-300 duration-1000 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                >
                    <h2 className="mb-4 text-center font-display text-4xl font-bold tracking-tight sm:text-5xl">
                        Services
                    </h2>
                    <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-muted-foreground">
                        Comprehensive technical services tailored to bring your ideas to life.
                    </p>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={service.id}
                                    className={`transition-all duration-1000 ${
                                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                    }`}
                                    style={{ transitionDelay: `${500 + 100 * index}ms` }}
                                >
                                    <Card className="group h-full border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-xl">
                                        <CardHeader>
                                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                                                <Icon className="h-6 w-6 text-primary" />
                                            </div>
                                            <CardTitle className="text-xl">{service.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm leading-relaxed text-muted-foreground">
                                                {service.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
