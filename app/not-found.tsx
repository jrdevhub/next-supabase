// app/not-found.tsx (nebo jiná složka v app routeru)
"use client";

import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyTitle,
} from "@/components/ui/empty";

export default function NotFound() {
    return (
        <Empty>
            <EmptyHeader>
                <EmptyTitle>404 - Not Found</EmptyTitle>
                <EmptyDescription>
                    Oops! The page you are looking for does not exist.
                </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
                <EmptyDescription>
                    Need help? <a href="#">Contact support</a>
                </EmptyDescription>
            </EmptyContent>
        </Empty>
    );
}
