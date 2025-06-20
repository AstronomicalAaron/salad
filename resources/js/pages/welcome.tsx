import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import Login from '@/pages/auth/login';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <div className="flex min-h-screen bg-[#FAF3E0] text-[#1b1b18] justify-center">
                    <main className="flex w-full flex-col-reverse lg:max-w-4xl lg:flex-row justify-center items-center">
                        <Login canResetPassword={true}></Login>
                    </main>
            </div>
        </>
    );
}
