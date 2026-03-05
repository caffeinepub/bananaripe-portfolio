import { useEffect, useRef, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Code2, Palette, Rocket, Zap } from 'lucide-react';

const About = () => {
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

    const skills = [
        { name: 'React & TypeScript', icon: Code2 },
        { name: 'Node.js & Python', icon: Zap },
        { name: 'UI/UX Design', icon: Palette },
        { name: 'Cloud Architecture', icon: Rocket },
        { name: 'GraphQL & REST APIs', icon: Code2 },
        { name: 'Figma & Adobe XD', icon: Palette },
        { name: 'Docker & Kubernetes', icon: Rocket },
        { name: 'PostgreSQL & MongoDB', icon: Zap },
    ];

    return (
        <section id="about" className="relative px-6 py-24 md:py-32" ref={sectionRef}>
            <div className="container mx-auto max-w-6xl">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left Column - Image */}
                    <div
                        className={`flex items-center justify-center transition-all duration-1000 ${
                            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                        }`}
                    >
                        <div className="relative">
                            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl" />
                            <div className="relative overflow-hidden rounded-2xl border-2 border-border bg-card shadow-2xl">
                                <img
                                    src="/assets/generated/profile-photo.dim_400x400.jpg"
                                    alt="Alexandra Chen - Full-Stack Developer"
                                    className="h-auto w-full max-w-md object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div
                        className={`flex flex-col justify-center transition-all delay-200 duration-1000 ${
                            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                        }`}
                    >
                        <h2 className="mb-6 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                            About Me
                        </h2>
                        <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                            <p>
                                I'm a passionate full-stack developer with over 6 years of experience
                                building modern web applications. My journey in tech started with a
                                fascination for how design and code come together to create seamless
                                user experiences.
                            </p>
                            <p>
                                I specialize in React, TypeScript, and Node.js, with a strong focus on
                                creating scalable architectures and pixel-perfect interfaces. When I'm
                                not coding, you'll find me exploring new design trends, contributing to
                                open-source projects, or mentoring aspiring developers.
                            </p>
                            <p>
                                My approach combines technical excellence with creative problem-solving,
                                ensuring every project I work on is both functional and beautiful.
                            </p>
                        </div>

                        {/* Skills */}
                        <div className="mt-8">
                            <h3 className="mb-4 text-xl font-semibold">Core Skills</h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill, index) => {
                                    const Icon = skill.icon;
                                    return (
                                        <div
                                            key={skill.name}
                                            className={`transition-all duration-500 ${
                                                isVisible
                                                    ? 'translate-y-0 opacity-100 scale-100'
                                                    : 'translate-y-4 opacity-0 scale-90'
                                            }`}
                                            style={{ transitionDelay: `${600 + index * 50}ms` }}
                                        >
                                            <Badge
                                                variant="secondary"
                                                className="group cursor-default px-4 py-2 text-sm font-medium transition-all hover:scale-105 hover:shadow-md"
                                            >
                                                <Icon className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
                                                {skill.name}
                                            </Badge>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
