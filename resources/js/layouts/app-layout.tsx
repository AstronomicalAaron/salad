import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import { type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';

interface AppLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default ({ children, breadcrumbs, ...props }: AppLayoutProps) => (
    <AppLayoutTemplate breadcrumbs={breadcrumbs} {...props}>
        <div className="flex min-h-screen bg-[#FAF3E0] text-[#1b1b18] justify-center">
            <main className="flex w-full flex-col-reverse lg:max-w-4xl lg:flex-row justify-center items-center">
                {children}
            </main>
        </div>
    </AppLayoutTemplate>
);
