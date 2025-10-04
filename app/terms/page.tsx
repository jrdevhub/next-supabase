"use client";

export default function TermsOfUsePage() {
    return (
        <main className="container mx-auto max-w-3xl py-10 px-6 space-y-8">
            <header>
                <h1 className="text-3xl font-bold mb-4">Terms of Use</h1>
                <p className="text-muted-foreground">
                    Last updated: October 2025
                </p>
            </header>

            <section>
                <h2 className="text-xl font-semibold mb-2">
                    1. Acceptance of Terms
                </h2>
                <p>
                    By accessing and using this website, you agree to comply
                    with and be bound by these Terms of Use. If you do not
                    agree, you must not use our services.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">2. Eligibility</h2>
                <p>
                    You must be at least 18 years old or have the consent of a
                    parent or guardian to use our services.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">
                    3. Use of Services
                </h2>
                <p>
                    You agree not to misuse our services, attempt unauthorized
                    access, or engage in any activity that disrupts or harms the
                    platform.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">
                    4. Intellectual Property
                </h2>
                <p>
                    All content, trademarks, and materials provided on this site
                    are the property of the company or its licensors. You may
                    not copy, distribute, or modify them without prior written
                    consent.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">
                    5. Limitation of Liability
                </h2>
                <p>
                    We are not liable for any damages resulting from the use or
                    inability to use our services, to the maximum extent
                    permitted by law.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">6. Governing Law</h2>
                <p>
                    These Terms are governed by the laws of your jurisdiction.
                    Any disputes shall be resolved in the courts of that
                    jurisdiction.
                </p>
            </section>
        </main>
    );
}
