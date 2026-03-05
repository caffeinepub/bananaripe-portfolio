import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import ThemeToggle from './components/ThemeToggle';

function App() {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative min-h-screen bg-background text-foreground">
                <ThemeToggle />
                <Hero />
                <About />
                <Projects />
                <Experience />
                <Contact />
                <Footer />
                <Toaster />
            </div>
        </ThemeProvider>
    );
}

export default App;
