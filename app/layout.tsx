import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/components/AuthProvider";
import { ThemeToggler } from "@/components/theme-toggler";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
    title: "Next & Supabase",
    description:
        "A boilerplate template for building modern websites with Next.js and Supabase, designed for fast development and easy customization.",
};

import { ThemeProvider } from "@/components/theme-provider";

type RootLayoutProps = {
    children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <>
            <html lang="en" dir="ltr" suppressHydrationWarning>
                <body>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <AuthProvider>
                            <div className="absolute left-[30px] top-[30px] w-10 h-10">
                                <Logo />
                            </div>
                            {children}
                            <div className="absolute right-[30px] top-[30px]">
                                <ThemeToggler />
                            </div>
                        </AuthProvider>
                    </ThemeProvider>
                </body>
            </html>
        </>
    );
}
