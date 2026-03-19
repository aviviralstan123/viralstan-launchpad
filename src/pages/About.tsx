import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { Target, Users, TrendingUp, Award } from 'lucide-react';

const values = [
  { icon: Target, title: 'Results-Driven', desc: 'Every strategy is tied to measurable KPIs. We don\'t just run campaigns — we deliver growth.' },
  { icon: Users, title: 'Client-First', desc: 'Your success is our success. We build lasting partnerships, not one-off transactions.' },
  { icon: TrendingUp, title: 'Data-Obsessed', desc: 'Decisions backed by data, not guesses. We analyze, optimize, and scale what works.' },
  { icon: Award, title: 'Industry Experts', desc: 'Specialized teams for every channel means you get experts, not generalists.' },
];

const About = () => {
  return (
    <>
      <SEOHead title="About Us" description="Learn about Viralstan — a data-driven digital marketing agency helping 500+ brands scale through innovative marketing strategies." canonical="/about" />
      <Header />
      <main>
        <section className="pt-32 pb-20 gradient-bg-subtle">
          <div className="container mx-auto px-4 text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
              We Help Brands <span className="gradient-text">Go Viral</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Viralstan was founded with a simple mission: make world-class digital marketing accessible to every growth-focused brand, regardless of size or budget.
            </motion.p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Founded in 2020, Viralstan started as a two-person consultancy helping local businesses navigate the digital landscape. Today, we're a full-service digital marketing agency serving over 500 brands across 12 industries and 30+ cities.</p>
                <p>Our team of 50+ marketing professionals combines deep technical expertise with creative storytelling to deliver campaigns that don't just look good — they perform. From SEO and PPC to content and social media, we've built a reputation for driving measurable, sustainable growth.</p>
                <p>What sets us apart is our obsession with data. Every campaign starts with research, every decision is backed by analytics, and every result is tracked and optimized. That's how we've maintained a 98% client retention rate and consistently deliver ROI that exceeds industry benchmarks.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 gradient-bg-subtle">
          <div className="container mx-auto px-4">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {values.map((v) => (
                <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-card border shadow-card"
                >
                  <v.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto text-center">
              {[
                { value: '500+', label: 'Clients Worldwide' },
                { value: '50+', label: 'Team Members' },
                { value: '12', label: 'Industries Served' },
                { value: '98%', label: 'Retention Rate' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display font-bold text-3xl gradient-text">{s.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default About;
