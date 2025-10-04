"use client";

import { useState } from "react";
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

export function LoginForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        // Přihlášení přes heslo
        const { error: signInError } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (signInError) {
            setError("Incorrect email or password.");
            setLoading(false);
            return;
        }

        // Nastavení otp_verified na false, protože uživatel ještě neověřil OTP
        const { error: updateError } = await supabase.auth.updateUser({
            data: { otp_verified: false },
        });

        if (updateError) {
            setError("Failed to initialize OTP verification.");
            setLoading(false);
            return;
        }

        // Odeslat OTP na email
        const { error: otpError } = await supabase.auth.signInWithOtp({
            email,
            options: { shouldCreateUser: false },
        });

        if (otpError) {
            setError("Failed to send verification code.");
            setLoading(false);
            return;
        }

        router.push(`/otp?email=${encodeURIComponent(email)}`);
        setLoading(false);
    };

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <form onSubmit={handleSubmit}>
                <FieldGroup>
                    <div className="flex flex-col items-center gap-2 text-center">
                        <h1 className="text-xl font-bold">
                            Login to your account
                        </h1>
                        <FieldDescription>
                            Don&apos;t have an account?{" "}
                            <Link
                                href="/sign-up"
                                className="underline underline-offset-4 hover:no-underline"
                            >
                                Sign up
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
                        <div className="flex items-center">
                            <FieldLabel htmlFor="password">Password</FieldLabel>
                            <Link
                                href="/forgot-password"
                                className="ml-auto text-sm underline-offset-2 hover:underline"
                            >
                                Forgot your password?
                            </Link>
                        </div>
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
                                    Signing in...
                                </>
                            ) : (
                                "Login"
                            )}
                        </Button>
                    </Field>
                </FieldGroup>
            </form>

            <FieldDescription className="px-6 text-center">
                By clicking continue, you agree to our{" "}
                <Link href="/terms">Terms of Service</Link> and{" "}
                <Link href="/privacy">Privacy Policy</Link>.
            </FieldDescription>

            {error && (
                <div className="fixed bottom-[30px] left-1/2 -translate-x-1/2 z-50">
                    <Alert variant="destructive">
                        <AlertCircleIcon />
                        <AlertTitle>
                            Please check your account details and try again.
                        </AlertTitle>
                    </Alert>
                </div>
            )}
        </div>
    );
}
