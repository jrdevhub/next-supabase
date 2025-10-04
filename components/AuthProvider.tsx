"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { supabase } from "@/utils/supabaseClient";
import { Spinner } from "@/components/ui/spinner";
import { debug } from "@/utils/debug";

const whitelist = [
    "/",
    "/sign-up",
    "/forgot-password",
    "/reset-password",
    "/privacy",
    "/terms",
    "/otp",
];

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkSession = async () => {
            const { data } = await supabase.auth.getSession();
            const session = data.session;

            debug("log", "[Supabase] Session Data:", session);

            const isWhitelisted = whitelist.includes(pathname);

            if (!session && !isWhitelisted) {
                router.replace("/");
            } else if (session && pathname === "/") {
                router.replace("/dashboard");
            } else {
                setLoading(false);
            }
        };

        checkSession();
    }, [pathname, router]);

    if (loading) {
        return (
            <div className="flex flex-col justify-center items-center h-screen gap-4 sr-only">
                <Spinner className="size-8" />
                <p className="text-sm text-muted-foreground">Verifying...</p>
            </div>
        );
    }

    return <>{children}</>;
}
