import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="border-t border-border bg-muted/30 px-6 py-8">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground md:flex-row md:text-left">
                    <p>© 2025 Alexandra Chen. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        Built with{' '}
                        <Heart className="h-4 w-4 fill-red-500 text-red-500" aria-label="love" /> using{' '}
                        <a
                            href="https://caffeine.ai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold transition-colors hover:text-primary"
                        >
                            caffeine.ai
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
