import Link from "next/link";
import { IconFolderCode } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
} from "@/components/ui/empty";

export default function TermsPage() {
    return (
        <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
            <div className="w-full max-w-sm">
                <Empty className="border border-dashed">
                    <EmptyHeader>
                        <EmptyMedia variant="icon">
                            <IconFolderCode />
                        </EmptyMedia>
                        <EmptyTitle>No Content Yet</EmptyTitle>
                        <EmptyDescription>
                            There is currently no content to display on this
                            page. Please check back later.
                        </EmptyDescription>
                    </EmptyHeader>
                    <EmptyContent>
                        <Link href="/">
                            <Button
                                variant="outline"
                                size="sm"
                                className="cursor-pointer"
                            >
                                Go To Home
                            </Button>
                        </Link>
                    </EmptyContent>
                </Empty>
            </div>
        </div>
    );
}
