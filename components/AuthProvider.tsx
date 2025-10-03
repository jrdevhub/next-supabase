"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { supabase } from "@/utils/supabaseClient";
import { Spinner } from "@/components/ui/spinner"

const whitelist = ["/", "/terms", "/privacy"];

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkSession = async () => {
            const { data } = await supabase.auth.getSession();
            const session = data.session;

            const isWhitelisted = whitelist.includes(pathname);

            if (!session && !isWhitelisted) {
                // není přihlášen, jde na chráněnou stránku => redirect na login (root)
                router.replace("/");
            } else if (session && pathname === "/") {
                // je přihlášen, chce root => redirect na dashboard
                router.replace("/dashboard");
            } else {
                // všechno OK, zobraz děcko
                setLoading(false);
            }
        };

        checkSession();
    }, [pathname, router]);

    if (loading) {
        return (
            <div className="flex flex-col justify-center items-center h-screen gap-4">
                <Spinner className="size-8" />
                <p className="text-sm text-muted-foreground">Verifying...</p>
            </div>
        );
    }

    return <>{children}</>;
}
