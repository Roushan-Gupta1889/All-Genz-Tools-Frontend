import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const TermsOfService = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 bg-background">
                <div className="container mx-auto max-w-4xl px-6 py-16">
                    <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
                    <p className="text-sm text-muted-foreground mb-8">Last updated: December 27, 2024</p>

                    <div className="prose prose-slate dark:prose-invert max-w-none">
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                By accessing and using All Genz Tools ("Service"), you accept and agree to be bound by
                                these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use
                                our Service.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                All Genz Tools provides a free online PDF compression service that allows users to:
                            </p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                <li>Upload PDF files for compression</li>
                                <li>Choose from multiple quality presets</li>
                                <li>Download compressed PDF files</li>
                                <li>Use the service without registration</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
                            <h3 className="text-xl font-semibold mb-3 mt-4">3.1 Acceptable Use</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">You agree to:</p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                <li>Use the Service only for lawful purposes</li>
                                <li>Not upload files containing malware, viruses, or harmful code</li>
                                <li>Not upload files that violate copyright or intellectual property rights</li>
                                <li>Not upload files containing illegal, offensive, or harmful content</li>
                                <li>Not attempt to abuse, exploit, or disrupt the Service</li>
                                <li>Not use automated tools to abuse the Service (e.g., bots, scrapers)</li>
                            </ul>

                            <h3 className="text-xl font-semibold mb-3 mt-6">3.2 File Content</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                You are solely responsible for the content of files you upload. You represent and warrant
                                that you have all necessary rights to upload and process the files through our Service.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">4. Service Limitations</h2>
                            <h3 className="text-xl font-semibold mb-3 mt-4">4.1 File Size and Type</h3>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                <li>Maximum file size: 50 MB per file</li>
                                <li>Supported format: PDF files only</li>
                                <li>Processing time may vary based on file size and server load</li>
                            </ul>

                            <h3 className="text-xl font-semibold mb-3 mt-6">4.2 Rate Limiting</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                To ensure fair usage, we implement rate limiting. Excessive use may result in temporary
                                restrictions. Current limits:
                            </p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
                                <li>Maximum 10 files per hour per IP address</li>
                                <li>Maximum 50 files per day per IP address</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">5. Privacy and Data</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Your privacy is important to us. Please review our Privacy Policy to understand how we
                                handle your data. Key points:
                            </p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                <li>Files are automatically deleted after 2 minutes</li>
                                <li>We do not store your files permanently</li>
                                <li>We do not share your files with third parties</li>
                                <li>All data transmission is encrypted via HTTPS</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
                            <h3 className="text-xl font-semibold mb-3 mt-4">6.1 Our Rights</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                All content, features, and functionality of the Service, including but not limited to:
                            </p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                <li>Website design and layout</li>
                                <li>Text, graphics, logos, and images</li>
                                <li>Software and source code</li>
                                <li>Trademarks and branding</li>
                            </ul>
                            <p className="text-muted-foreground leading-relaxed mt-4">
                                are owned by All Genz Tools and protected by copyright, trademark, and other laws.
                            </p>

                            <h3 className="text-xl font-semibold mb-3 mt-6">6.2 Your Rights</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                You retain all rights to the files you upload. We claim no ownership over your content.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">7. Disclaimer of Warranties</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND,
                                EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
                            </p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                <li>Warranties of merchantability or fitness for a particular purpose</li>
                                <li>Warranties that the Service will be uninterrupted or error-free</li>
                                <li>Warranties regarding the accuracy or reliability of results</li>
                                <li>Warranties that defects will be corrected</li>
                            </ul>
                            <p className="text-muted-foreground leading-relaxed mt-4">
                                We do not guarantee that compressed files will meet your specific requirements or that
                                compression will achieve specific file size reductions.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                TO THE MAXIMUM EXTENT PERMITTED BY LAW, ALL GENZ TOOLS SHALL NOT BE LIABLE FOR:
                            </p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                <li>Any indirect, incidental, special, or consequential damages</li>
                                <li>Loss of data, profits, or business opportunities</li>
                                <li>Damages resulting from use or inability to use the Service</li>
                                <li>Damages from unauthorized access to your files</li>
                                <li>Damages from errors, bugs, or service interruptions</li>
                            </ul>
                            <p className="text-muted-foreground leading-relaxed mt-4">
                                Our total liability shall not exceed $100 USD.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">9. Indemnification</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                You agree to indemnify and hold harmless All Genz Tools from any claims, damages, losses,
                                or expenses (including legal fees) arising from:
                            </p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
                                <li>Your use of the Service</li>
                                <li>Your violation of these Terms</li>
                                <li>Your violation of any rights of another party</li>
                                <li>Content of files you upload</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">10. Service Modifications</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We reserve the right to:
                            </p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
                                <li>Modify or discontinue the Service at any time</li>
                                <li>Change features, functionality, or limitations</li>
                                <li>Suspend or terminate access for violations</li>
                                <li>Update these Terms at any time</li>
                            </ul>
                            <p className="text-muted-foreground leading-relaxed mt-4">
                                We will make reasonable efforts to notify users of significant changes.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">11. Termination</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We may terminate or suspend your access to the Service immediately, without prior notice,
                                for any reason, including but not limited to:
                            </p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
                                <li>Violation of these Terms</li>
                                <li>Abusive or fraudulent behavior</li>
                                <li>Legal requirements</li>
                                <li>Service discontinuation</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">12. Governing Law</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                These Terms shall be governed by and construed in accordance with the laws of India,
                                without regard to its conflict of law provisions. Any disputes shall be resolved in
                                the courts of India.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">13. Contact Information</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                For questions about these Terms, please contact us:
                            </p>
                            <ul className="list-none text-muted-foreground space-y-2">
                                <li><strong>Email</strong>: allgenztool@gmail.com</li>
                                <li><strong>Website</strong>: https://all-genz-tools-frontend.vercel.app</li>
                            </ul>
                        </section>

                        <div className="mt-12 p-6 bg-muted rounded-lg">
                            <h3 className="text-lg font-semibold mb-2">Summary</h3>
                            <p className="text-muted-foreground">
                                <strong>TL;DR:</strong> Use our service responsibly. Don't upload illegal content.
                                We're not liable for damages. Files are deleted after 2 minutes. We can change or
                                discontinue the service anytime. Be nice, and we'll be nice back.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TermsOfService;
