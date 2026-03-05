import { ArrowDown, Briefcase, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="hero"
            className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20"
        >
            {/* Animated background gradient */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
            
            <div className="container mx-auto max-w-6xl">
                <div
                    className={`text-center transition-all duration-1000 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                >
                    {/* Greeting */}
                    <p
                        className={`mb-4 text-lg font-medium tracking-wide text-muted-foreground transition-all delay-200 duration-700 ${
                            isVisible ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        Hello, I'm
                    </p>

                    {/* Name */}
                    <h1
                        className={`mb-6 font-display text-5xl font-bold tracking-tight transition-all delay-300 duration-1000 sm:text-6xl md:text-7xl lg:text-8xl ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                        }`}
                    >
                        Alexandra Chen
                    </h1>

                    {/* Role */}
                    <h2
                        className={`mb-8 text-2xl font-semibold text-primary transition-all delay-500 duration-1000 sm:text-3xl md:text-4xl ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                        }`}
                    >
                        Full-Stack Developer & UI/UX Designer
                    </h2>

                    {/* Value Statement */}
                    <p
                        className={`mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-muted-foreground transition-all delay-700 duration-1000 sm:text-xl ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                        }`}
                    >
                        Crafting elegant digital experiences that blend beautiful design with robust
                        functionality. Specialized in building scalable web applications and
                        user-centric interfaces.
                    </p>

                    {/* CTA Buttons */}
                    <div
                        className={`flex flex-col items-center justify-center gap-4 transition-all delay-1000 duration-1000 sm:flex-row ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                        }`}
                    >
                        <Button
                            size="lg"
                            onClick={() => scrollToSection('projects')}
                            className="group min-w-[180px] text-base font-semibold shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                        >
                            <Briefcase className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
                            View Projects
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            onClick={() => scrollToSection('contact')}
                            className="group min-w-[180px] border-2 text-base font-semibold shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                        >
                            <Mail className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
                            Contact Me
                        </Button>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div
                    className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all delay-1000 duration-1000 ${
                        isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <div
                        className="animate-bounce cursor-pointer"
                        onClick={() => scrollToSection('about')}
                        role="button"
                        tabIndex={0}
                        aria-label="Scroll to about section"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                scrollToSection('about');
                            }
                        }}
                    >
                        <ArrowDown className="h-6 w-6 text-muted-foreground" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
