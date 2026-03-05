import { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { SiGithub, SiLinkedin, SiX } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
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

    const contactInfo = {
        email: 'alexandra.chen@example.com',
        phone: '+1 (555) 123-4567',
        location: 'San Francisco, CA',
    };

    const socialLinks = [
        {
            platform: 'GitHub',
            url: 'https://github.com',
            icon: SiGithub,
            color: 'hover:text-foreground',
        },
        {
            platform: 'LinkedIn',
            url: 'https://linkedin.com',
            icon: SiLinkedin,
            color: 'hover:text-[#0A66C2]',
        },
        {
            platform: 'X (Twitter)',
            url: 'https://x.com',
            icon: SiX,
            color: 'hover:text-foreground',
        },
    ];

    return (
        <section id="contact" className="relative px-6 py-24 md:py-32" ref={sectionRef}>
            <div className="container mx-auto max-w-4xl">
                <div
                    className={`mb-16 text-center transition-all duration-1000 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                >
                    <h2 className="mb-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                        Let's Work Together
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        Have a project in mind or want to discuss opportunities? I'd love to hear from
                        you. Let's create something amazing together.
                    </p>
                </div>

                <div>
                    {/* Contact Cards */}
                    <div
                        className={`mb-12 transition-all delay-200 duration-1000 ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}
                    >
                        <Card className="border-2 shadow-lg">
                            <CardContent className="p-8">
                                <div className="grid gap-6 md:grid-cols-3">
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                            <Mail className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="mb-1 font-semibold">Email</h3>
                                            <a
                                                href={`mailto:${contactInfo.email}`}
                                                className="text-sm text-muted-foreground transition-colors hover:text-primary"
                                            >
                                                {contactInfo.email}
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                            <Phone className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="mb-1 font-semibold">Phone</h3>
                                            <a
                                                href={`tel:${contactInfo.phone}`}
                                                className="text-sm text-muted-foreground transition-colors hover:text-primary"
                                            >
                                                {contactInfo.phone}
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                            <MapPin className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="mb-1 font-semibold">Location</h3>
                                            <p className="text-sm text-muted-foreground">
                                                {contactInfo.location}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* CTA Button */}
                    <div
                        className={`mb-12 text-center transition-all delay-400 duration-1000 ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}
                    >
                        <Button
                            size="lg"
                            className="group min-w-[200px] text-base font-semibold shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                            asChild
                        >
                            <a href={`mailto:${contactInfo.email}`}>
                                <Mail className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
                                Send Email
                            </a>
                        </Button>
                    </div>

                    {/* Social Links */}
                    <div
                        className={`transition-all delay-600 duration-1000 ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}
                    >
                        <div className="text-center">
                            <h3 className="mb-6 text-lg font-semibold">Connect With Me</h3>
                            <div className="flex items-center justify-center gap-4">
                                {socialLinks.map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={social.platform}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.platform}
                                            className={`flex h-12 w-12 items-center justify-center rounded-lg border-2 border-border bg-card text-muted-foreground transition-all hover:scale-110 hover:border-primary hover:shadow-lg ${social.color}`}
                                        >
                                            <Icon className="h-5 w-5" />
                                        </a>
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

export default Contact;
