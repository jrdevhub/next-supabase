import { LoginForm } from "@/components/login-form";
import { ThemeToggler } from "@/components/theme-toggler";

export default function LoginPage() {
    return (
        <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
            <ThemeToggler />
            <div className="w-full max-w-sm">
                <LoginForm />
            </div>
        </div>
    );
}
