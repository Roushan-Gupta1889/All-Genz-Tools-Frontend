import { motion } from "framer-motion";
import { Mail, ArrowRight, Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import contactIllustration from "@/assets/contact-illustration.svg";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-muted/30 scroll-mt-20">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-start"
          >
            <img
              src={contactIllustration}
              alt="Contact illustration"
              className="w-full max-w-md"
            />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center lg:text-left"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Let's Connect
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Have a Tool Idea or{" "}
              <span className="text-primary">Feedback?</span>
            </h2>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We're always looking to build tools that solve real problems.
              Got an idea for a tool you wish existed? Want to report a bug or
              suggest an improvement? We'd love to hear from you.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="group" asChild>
                <a href="https://wa.me/919341101889">
                  <Mail className="h-4 w-4" />
                  Get In Touch
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:allgenztool@gmail.com?subject=Tool%20Suggestion">
                  <Calendar className="h-4 w-4" />
                  Suggest a Tool
                </a>
              </Button>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              Or reach us directly at{" "}
              <a
                href="mailto:allgenztool@gmail.com"
                className="text-primary hover:underline font-medium"
              >
                allgenztool@gmail.com
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
