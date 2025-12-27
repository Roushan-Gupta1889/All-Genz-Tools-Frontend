import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs: FAQItem[] = [
        {
            question: "How much can I compress a PDF?",
            answer: "Our tool can reduce PDF file size by up to 90% depending on the content and quality settings you choose. The actual compression ratio depends on factors like image quality, resolution, and the original PDF structure."
        },
        {
            question: "Is PDF compression free?",
            answer: "Yes! All Genz Tools PDF compressor is 100% free with no signup required. There are no hidden fees, premium tiers, or limitations on the number of files you can compress."
        },
        {
            question: "Is my PDF safe?",
            answer: "Absolutely. Files are automatically deleted from our servers after 2 minutes. We never store, share, or access your PDFs. Your privacy is our top priority."
        },
        {
            question: "What file size can I compress?",
            answer: "You can compress PDF files of various sizes. Our tool handles both small and large PDFs efficiently. For optimal performance, we recommend files under 100MB."
        },
        {
            question: "Do I need to sign up?",
            answer: "No signup required! Simply upload your PDF, choose your compression settings, and download the compressed file. It's that simple."
        },
        {
            question: "Will compression affect PDF quality?",
            answer: "You have full control over the quality settings. Choose 'Safe' for minimal quality loss or 'Aggressive' for maximum compression. We use advanced algorithms to maintain readability while reducing file size."
        },
        {
            question: "How long does compression take?",
            answer: "Most PDFs are compressed within seconds. Processing time depends on file size and complexity, but typically ranges from 5-30 seconds."
        },
        {
            question: "Can I compress password-protected PDFs?",
            answer: "Currently, password-protected PDFs need to be unlocked before compression. We're working on adding support for encrypted files in the future."
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-section" style={styles.section}>
            <div className="container" style={styles.container}>
                <h2 style={styles.title}>Frequently Asked Questions</h2>
                <p style={styles.subtitle}>
                    Everything you need to know about our PDF compression tool
                </p>

                <div className="faq-list" style={styles.faqList}>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="faq-item"
                            style={styles.faqItem}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                style={styles.questionButton}
                                aria-expanded={openIndex === index}
                            >
                                <h3 style={styles.question}>{faq.question}</h3>
                                {openIndex === index ? (
                                    <ChevronUp size={20} style={styles.icon} />
                                ) : (
                                    <ChevronDown size={20} style={styles.icon} />
                                )}
                            </button>

                            {openIndex === index && (
                                <div style={styles.answer}>
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        padding: '80px 20px',
        backgroundColor: '#f8f9fa',
    } as React.CSSProperties,

    container: {
        maxWidth: '800px',
        margin: '0 auto',
    } as React.CSSProperties,

    title: {
        fontSize: '2.5rem',
        fontWeight: 700,
        textAlign: 'center' as const,
        marginBottom: '12px',
        color: '#1a1a1a',
    } as React.CSSProperties,

    subtitle: {
        fontSize: '1.1rem',
        textAlign: 'center' as const,
        color: '#666',
        marginBottom: '48px',
    } as React.CSSProperties,

    faqList: {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '16px',
    } as React.CSSProperties,

    faqItem: {
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
        transition: 'box-shadow 0.3s ease',
    } as React.CSSProperties,

    questionButton: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        textAlign: 'left' as const,
    } as React.CSSProperties,

    question: {
        fontSize: '1.2rem',
        fontWeight: 600,
        color: '#1a1a1a',
        margin: 0,
        flex: 1,
    } as React.CSSProperties,

    icon: {
        color: '#6366f1',
        flexShrink: 0,
        marginLeft: '16px',
    } as React.CSSProperties,

    answer: {
        marginTop: '16px',
        paddingTop: '16px',
        borderTop: '1px solid #e5e7eb',
        fontSize: '1rem',
        lineHeight: '1.6',
        color: '#4b5563',
    } as React.CSSProperties,
};

export default FAQ;
