import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="border-t border-border/50 bg-muted/30">
      <div className="container mx-auto max-w-5xl px-6 py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to shrink your PDFs?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Start compressing now. It's free, fast, and completely private.
          </p>
          
          <div className="mt-10">
            <Button variant="hero" size="xl" asChild>
              <Link to="/pdf-compressor">
                Compress PDF Now
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
