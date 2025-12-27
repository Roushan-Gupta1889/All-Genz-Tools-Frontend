import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 bg-background">
                <div className="container mx-auto max-w-4xl px-6 py-16">
                    <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
                    <p className="text-sm text-muted-foreground mb-8">Last updated: December 27, 2024</p>

                    <div className="prose prose-slate dark:prose-invert max-w-none">
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Welcome to All Genz Tools ("we," "our," or "us"). We are committed to protecting your privacy.
                                This Privacy Policy explains how we handle your information when you use our PDF compression tool.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
                            <h3 className="text-xl font-semibold mb-3 mt-4">2.1 Files You Upload</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                When you use our PDF compression service, you upload PDF files to our servers for processing.
                                These files are:
                            </p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                <li>Processed immediately upon upload</li>
                                <li>Automatically deleted from our servers after 2 minutes</li>
                                <li>Never stored permanently</li>
                                <li>Never shared with third parties</li>
                                <li>Never used for any purpose other than compression</li>
                            </ul>

                            <h3 className="text-xl font-semibold mb-3 mt-6">2.2 Automatically Collected Information</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                We may collect basic technical information such as:
                            </p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                <li>IP address (for rate limiting and security)</li>
                                <li>Browser type and version</li>
                                <li>Device type (mobile, desktop, tablet)</li>
                                <li>Approximate location (country level only)</li>
                                <li>Pages visited and time spent</li>
                            </ul>
                            <p className="text-muted-foreground leading-relaxed mt-4">
                                This information is collected anonymously and used only for improving our service.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">We use the collected information to:</p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                <li>Process and compress your PDF files</li>
                                <li>Prevent abuse and ensure service security</li>
                                <li>Improve our service quality and performance</li>
                                <li>Analyze usage patterns (anonymously)</li>
                                <li>Comply with legal obligations</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">4. Data Storage and Security</h2>
                            <h3 className="text-xl font-semibold mb-3 mt-4">4.1 File Storage</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Your uploaded PDF files are:
                            </p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                <li>Stored temporarily in server memory during processing</li>
                                <li>Automatically deleted after 2 minutes</li>
                                <li>Never backed up or archived</li>
                                <li>Transmitted using HTTPS encryption</li>
                            </ul>

                            <h3 className="text-xl font-semibold mb-3 mt-6">4.2 Security Measures</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                We implement industry-standard security measures including:
                            </p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                <li>HTTPS/SSL encryption for all data transmission</li>
                                <li>Secure server infrastructure</li>
                                <li>Regular security audits</li>
                                <li>Automatic file deletion system</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">5. Cookies and Tracking</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                We use minimal cookies and tracking:
                            </p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                <li><strong>Essential Cookies</strong>: Required for the service to function (e.g., session management)</li>
                                <li><strong>Analytics</strong>: Anonymous usage statistics to improve our service</li>
                                <li><strong>No Advertising Cookies</strong>: We do not use advertising or tracking cookies</li>
                            </ul>
                            <p className="text-muted-foreground leading-relaxed mt-4">
                                You can disable cookies in your browser settings, but this may affect service functionality.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">6. Third-Party Services</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                We may use the following third-party services:
                            </p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                <li><strong>Vercel</strong>: Hosting and CDN services</li>
                                <li><strong>Google Analytics</strong>: Anonymous usage analytics (if enabled)</li>
                            </ul>
                            <p className="text-muted-foreground leading-relaxed mt-4">
                                These services have their own privacy policies and we recommend reviewing them.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                <li>Know what data we collect about you</li>
                                <li>Request deletion of your data (though files are auto-deleted)</li>
                                <li>Opt-out of analytics tracking</li>
                                <li>Access your information (if any is stored)</li>
                                <li>File a complaint with data protection authorities</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">8. Children's Privacy</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Our service is not directed to children under 13. We do not knowingly collect information
                                from children. If you believe a child has provided us with information, please contact us.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">9. Changes to This Policy</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We may update this Privacy Policy from time to time. Changes will be posted on this page
                                with an updated "Last updated" date. Continued use of our service after changes constitutes
                                acceptance of the updated policy.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                If you have questions about this Privacy Policy, please contact us:
                            </p>
                            <ul className="list-none text-muted-foreground space-y-2">
                                <li><strong>Email</strong>: allgenztool@gmail.com</li>
                                <li><strong>Website</strong>: https://all-genz-tools-frontend.vercel.app</li>
                            </ul>
                        </section>

                        <div className="mt-12 p-6 bg-muted rounded-lg">
                            <h3 className="text-lg font-semibold mb-2">Summary</h3>
                            <p className="text-muted-foreground">
                                <strong>TL;DR:</strong> We don't store your files. They're deleted after 2 minutes.
                                We collect minimal anonymous data for service improvement. Your privacy is our priority.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
