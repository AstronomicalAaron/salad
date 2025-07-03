import { Link } from '@inertiajs/react';
import AppLogoIcon from '@/components/app-logo-icon';

export default function AuthLayout({ children, title, description, ...props }: { children: React.ReactNode; title: string; description: string }) {
    return (
        <div className="flex flex-col md:flex-row items center bg-white shadow-lg rounded-exl p-8 max-w-4xl rounded-xl">
            <div className="w-full max-w-sm">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col items-center gap-4">
                        <Link href={route('home')} className="flex flex-col items-center gap-2 font-medium">
                                <AppLogoIcon />
                            <span className="sr-only">{title}</span>
                        </Link>
                        <div className="space-y-2 text-center">
                            <h1 className="text-3xl font-bold text-[#4CAF50] mb-2">{title}</h1>
                            <p className="text-center text-lg text-muted-foreground">{description}</p>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}
