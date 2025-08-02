import { SidebarInset } from '@/components/ui/sidebar';
import * as React from 'react';

interface AppContentProps extends React.ComponentProps<'main'> {
    variant?: 'header' | 'sidebar';
}

export function AppContent({ variant = 'header', children, ...props }: AppContentProps) {
    if (variant === 'sidebar') {
        return <SidebarInset {...props}>{children}</SidebarInset>;
    }

    return (
        <div className="flex min-h-screen bg-[#FAF3E0] text-[#1b1b18] justify-center">
            <main className="flex w-full flex-col-reverse lg:max-w-4xl lg:flex-row justify-center items-center">
                {children}
            </main>
        </div>
    );
}
