import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/components/AuthProvider";
import { ThemeToggler } from "@/components/ThemeToggler";
import Logo from "@/components/Logo";
import Link from "next/link";
import { ThemeProvider } from "@/components/ThemeProvider";
import SelfXSSWarning from "@/components/SelfXSSWarning";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Next & Supabase",
    description:
        "A boilerplate template for building modern websites with Next.js and Supabase, designed for fast development and easy customization.",
};

type RootLayoutProps = {
    children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html id="next-supabase" lang="en" dir="ltr" suppressHydrationWarning>
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <AuthProvider>
                        <div className="absolute left-[30px] top-[30px] w-10 h-10">
                            <Link href="/" className="block w-full h-full">
                                <Logo />
                            </Link>
                        </div>
                        {children}
                        <div className="flex items-center gap-2 absolute right-[30px] top-[30px]">
                            <Link
                                href="https://github.com/jrdevhub/next-supabase"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="cursor-pointer"
                                >
                                    <Github className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all" />
                                    <span className="sr-only">GitHub</span>
                                </Button>
                            </Link>
                            <ThemeToggler />
                        </div>
                    </AuthProvider>
                </ThemeProvider>
                <SelfXSSWarning />
            </body>
        </html>
    );
}
