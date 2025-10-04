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
                return;
            }

            if (session) {
                // Načteme uživatele
                const { data: userData, error } = await supabase.auth.getUser();

                if (error) {
                    router.replace("/");
                    return;
                }

                const otpVerified =
                    userData?.user.user_metadata?.otp_verified === true;

                if (!otpVerified && pathname !== "/otp") {
                    if (userData?.user?.email) {
                        router.replace(
                            `/otp?email=${encodeURIComponent(userData.user.email)}`,
                        );
                    }
                    return;
                }

                if (otpVerified && pathname === "/") {
                    router.replace("/dashboard");
                    return;
                }
            }

            setLoading(false);
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
