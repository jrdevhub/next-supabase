"use client";

export default function PrivacyPolicyPage() {
    return (
        <main className="container mx-auto max-w-3xl py-10 px-6 space-y-8">
            <header>
                <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
                <p className="text-muted-foreground">
                    Last updated: October 2025
                </p>
            </header>

            <section>
                <h2 className="text-xl font-semibold mb-2">
                    1. Information We Collect
                </h2>
                <p>
                    We may collect personal information such as your name, email
                    address, and usage data when you use our services.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">
                    2. How We Use Information
                </h2>
                <p>
                    The information we collect is used to provide, maintain, and
                    improve our services, and to communicate with you.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">
                    3. Sharing of Information
                </h2>
                <p>
                    We do not sell or rent your personal information. We may
                    share data with trusted third parties who assist us in
                    operating our services.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
                <p>
                    We implement reasonable security measures to protect your
                    information, but no method of transmission over the Internet
                    is 100% secure.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">5. Your Rights</h2>
                <p>
                    You may request access to, correction of, or deletion of
                    your personal data by contacting us.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">
                    6. Changes to This Policy
                </h2>
                <p>
                    We may update this Privacy Policy from time to time.
                    Continued use of our services constitutes acceptance of the
                    updated policy.
                </p>
            </section>
        </main>
    );
}
