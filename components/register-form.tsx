"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/utils/supabaseClient";
import { AlertCircleIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Spinner } from "@/components/ui/spinner";
import { Alert, AlertTitle } from "@/components/ui/alert";

export function RegisterForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => setError(null), 4000);
            return () => clearTimeout(timer);
        }
    }, [error]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error) {
            setError(error.message);
            setLoading(false);
            return;
        }

        // Pokud uživatel existuje, ale není potvrzený
        if (data?.user && !data.user.confirmed_at) {
            setError("This email is already registered.");
            setLoading(false);
            return;
        }

        // Pokud vše proběhlo OK
        router.push("/login");
        setLoading(false);
    };

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <form onSubmit={handleSubmit}>
                <FieldGroup>
                    <div className="flex flex-col items-center gap-2 text-center">
                        <h1 className="text-xl font-bold">
                            Create your account
                        </h1>
                        <FieldDescription>
                            Already have an account?{" "}
                            <Link
                                href="/login"
                                className="underline underline-offset-4 hover:no-underline"
                            >
                                Sign in
                            </Link>
                        </FieldDescription>
                    </div>

                    <Field>
                        <FieldLabel htmlFor="email">Email</FieldLabel>
                        <Input
                            id="email"
                            type="email"
                            placeholder="user@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Field>

                    <Field>
                        <FieldLabel htmlFor="password">Password</FieldLabel>
                        <Input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </Field>

                    <Field>
                        <Button
                            type="submit"
                            className="w-full cursor-pointer"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <Spinner className="size-4" />
                                    Creating account...
                                </>
                            ) : (
                                "Sign Up"
                            )}
                        </Button>
                    </Field>
                </FieldGroup>
            </form>

            <FieldDescription className="px-6 text-center">
                By clicking continue, you agree to our{" "}
                <a href="#">Terms of Service</a> and{" "}
                <a href="#">Privacy Policy</a>.
            </FieldDescription>

            {error && (
                <div className="fixed bottom-[30px] left-1/2 -translate-x-1/2 z-50 w-full max-w-sm">
                    <Alert variant="destructive">
                        <AlertCircleIcon />
                        <AlertTitle>{error}</AlertTitle>
                    </Alert>
                </div>
            )}
        </div>
    );
}
