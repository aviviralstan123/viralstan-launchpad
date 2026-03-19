import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

const CTASection = ({
  title = "Ready to Accelerate Your Growth?",
  subtitle = "Join 500+ brands that trust Viralstan to deliver measurable marketing results. Let's build your growth engine together.",
  buttonText = "Get Your Free Strategy Call",
  buttonLink = "/contact",
}: CTASectionProps) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl gradient-bg p-12 md:p-16 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
          <div className="relative z-10">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-foreground mb-4">{title}</h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">{subtitle}</p>
            <Link
              to={buttonLink}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-background text-foreground font-semibold hover:bg-background/90 transition-colors"
            >
              {buttonText} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
