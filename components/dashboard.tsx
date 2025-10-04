"use client";

import * as React from "react";
import { supabase } from "@/utils/supabaseClient";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { Skeleton } from "@/components/ui/skeleton";
import {
    Item,
    ItemActions,
    ItemContent,
    ItemDescription,
    ItemMedia,
    ItemTitle,
} from "@/components/ui/item";

export function Dashboard() {
    const [email, setEmail] = React.useState<string | null>(null);
    const [createdAt, setCreatedAt] = React.useState<string | null>(null);
    const [lastSignIn, setLastSignIn] = React.useState<string | null>(null);
    const [loading, setLoading] = React.useState(false);
    const router = useRouter();

    React.useEffect(() => {
        async function fetchUser() {
            const {
                data: { user },
            } = await supabase.auth.getUser();
            if (user) {
                setEmail(user.email ?? "");
                setCreatedAt(user.created_at ?? "");
                setLastSignIn(user.last_sign_in_at ?? "");
            }
        }
        fetchUser();
    }, []);

    async function handleLogout() {
        setLoading(true);
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error("Sign out error:", error.message);
            setLoading(false);
        } else {
            router.push("/");
        }
    }

    return (
        <div className="flex w-full max-w-lg flex-col">
            <Item variant="outline">
                <ItemMedia className="align-self-center">
                    {email ? (
                        <Avatar className="size-10">
                            <AvatarImage src="https://i.pravatar.cc/40" />
                            <AvatarFallback>ER</AvatarFallback>
                        </Avatar>
                    ) : (
                        <Skeleton className="size-10 rounded-full animate-pulse" />
                    )}
                </ItemMedia>
                <ItemContent>
                    <ItemTitle>
                        {email ? (
                            email
                        ) : (
                            <Skeleton className="h-4 w-[150px] animate-pulse" />
                        )}
                    </ItemTitle>

                    <ItemDescription className="text-xs">
                        {createdAt ? (
                            <div>
                                Account created:{" "}
                                {new Date(createdAt).toLocaleString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                    second: "2-digit",
                                })}
                            </div>
                        ) : (
                            <Skeleton className="h-3 w-[175px] rounded-full animate-pulse" />
                        )}
                    </ItemDescription>

                    <ItemDescription className="text-xs">
                        {lastSignIn ? (
                            <div>
                                Last sign in:{" "}
                                {new Date(lastSignIn).toLocaleString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                    second: "2-digit",
                                })}
                            </div>
                        ) : (
                            <Skeleton className="h-3 w-[175px] rounded-full animate-pulse" />
                        )}
                    </ItemDescription>
                </ItemContent>
                <ItemActions>
                    <Button
                        onClick={handleLogout}
                        size="sm"
                        variant="outline"
                        className="cursor-pointer"
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <Spinner className="size-4 mr-2" />
                                Signing out...
                            </>
                        ) : (
                            "Sign out"
                        )}
                    </Button>
                </ItemActions>
            </Item>
        </div>
    );
}
