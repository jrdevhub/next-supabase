"use client";

import {
    Empty,
    EmptyContent,
    EmptyMedia,
    EmptyDescription,
    EmptyHeader,
    EmptyTitle,
} from "@/components/ui/empty";
import { CircleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
            <div className="w-full max-w-sm">
                <Empty>
                    <EmptyHeader>
                        <EmptyMedia variant="icon">
                            <CircleAlert />
                        </EmptyMedia>
                        <EmptyTitle>404 - Page Not Found</EmptyTitle>
                        <EmptyDescription>
                            Oops! The page you&apos;re looking for doesn&apos;t
                            exist or has been moved.
                        </EmptyDescription>
                    </EmptyHeader>
                    <EmptyContent>
                        <Button variant="outline" asChild>
                            <Link href="/">Go Home</Link>
                        </Button>
                    </EmptyContent>
                </Empty>
            </div>
        </div>
    );
}
