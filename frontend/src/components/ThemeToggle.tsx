import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="fixed right-6 top-6 z-50">
            <Button
                variant="outline"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="h-10 w-10 rounded-full border-2 shadow-lg transition-all hover:scale-110 hover:shadow-xl"
                aria-label="Toggle theme"
            >
                {theme === 'dark' ? (
                    <Sun className="h-5 w-5 transition-transform hover:rotate-12" />
                ) : (
                    <Moon className="h-5 w-5 transition-transform hover:rotate-12" />
                )}
            </Button>
        </div>
    );
};

export default ThemeToggle;
