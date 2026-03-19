import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import FAQSection from '@/components/FAQSection';
import RelatedLinks from '@/components/RelatedLinks';
import { services, industries, locations } from '@/utils/helpers';
import { CheckCircle } from 'lucide-react';

const serviceFaqs: Record<string, { question: string; answer: string }[]> = {
  default: [
    { question: 'How long does it take to see results?', answer: 'Most clients see initial improvements within 30-60 days, with significant results in 3-6 months depending on the service and competitive landscape.' },
    { question: 'What industries do you work with?', answer: 'We serve 12+ industries including Healthcare, E-Commerce, Real Estate, Education, FinTech, and SaaS.' },
    { question: 'How do you measure success?', answer: 'We track KPIs specific to your goals — traffic, conversions, revenue, ROAS, and more — with transparent monthly reporting.' },
    { question: 'Do you offer custom packages?', answer: 'Absolutely. Every strategy is tailored to your business goals, budget, and competitive landscape.' },
  ],
};

const Service = () => {
  const { service: serviceSlug } = useParams<{ service: string }>();
  const service = services.find((s) => s.slug === serviceSlug);

  if (!service) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="font-display font-bold text-3xl text-foreground mb-4">Service Not Found</h1>
            <p className="text-muted-foreground">The service you're looking for doesn't exist.</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const benefits = [
    `Increase qualified traffic and leads with targeted ${service.shortTitle} strategies`,
    'Data-driven approach with transparent reporting and measurable ROI',
    'Dedicated account manager with deep industry expertise',
    'Scalable campaigns that grow with your business',
    'Competitive analysis and continuous optimization',
    'Integration with your existing marketing stack',
  ];

  const process = [
    { step: '01', title: 'Discovery & Audit', desc: `We analyze your current ${service.shortTitle} performance, competitors, and market opportunities.` },
    { step: '02', title: 'Strategy Development', desc: 'We create a custom roadmap aligned with your business goals and KPIs.' },
    { step: '03', title: 'Execution', desc: `Our experts implement the strategy across all relevant ${service.shortTitle} channels.` },
    { step: '04', title: 'Optimization & Reporting', desc: 'Continuous A/B testing, optimization, and transparent performance reporting.' },
  ];

  return (
    <>
      <SEOHead
        title={`${service.title} Services`}
        description={service.description}
        canonical={`/services/${service.slug}`}
        keywords={`${service.shortTitle}, ${service.title}, digital marketing, Viralstan`}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 gradient-bg-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl mb-6">{service.icon}</motion.div>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
                {service.title} <span className="gradient-text">Services</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-muted-foreground leading-relaxed">
                {service.description}
              </motion.p>
            </div>
          </div>
        </section>

        {/* What is */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-6">What is {service.title}?</h2>
            <p className="text-muted-foreground leading-relaxed">
              {service.title} is a critical component of any modern digital marketing strategy. At Viralstan, our {service.shortTitle} services combine technical expertise, creative strategy, and data analytics to deliver measurable results that drive real business growth. Whether you're looking to increase brand awareness, generate qualified leads, or boost conversions, our team has the tools and experience to make it happen.
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 gradient-bg-subtle">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-8">Why Choose Our {service.shortTitle} Services?</h2>
            <div className="space-y-4">
              {benefits.map((b) => (
                <motion.div key={b} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{b}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground text-center mb-12">Our {service.shortTitle} Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {process.map((p) => (
                <motion.div key={p.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-card border shadow-card"
                >
                  <span className="font-display font-bold text-3xl gradient-text">{p.step}</span>
                  <h3 className="font-display font-semibold text-foreground mt-3 mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="py-12">
          <div className="container mx-auto px-4 space-y-8">
            <RelatedLinks title="Related Industries" links={industries.map((i) => ({ title: i.title, to: `/services/${service.slug}/${i.slug}` }))} />
            <RelatedLinks title="Available Locations" links={locations.map((l) => ({ title: `${l.title}, ${l.state}`, to: `/services/${service.slug}/location/${l.slug}` }))} />
            <RelatedLinks title="Other Services" links={services.filter((s) => s.slug !== service.slug).map((s) => ({ title: s.shortTitle, to: `/services/${s.slug}` }))} />
          </div>
        </section>

        <FAQSection faqs={serviceFaqs.default} />
        <CTASection title={`Ready to Grow with ${service.shortTitle}?`} subtitle={`Let our ${service.shortTitle} experts create a custom strategy for your brand.`} />
      </main>
      <Footer />
    </>
  );
};

export default Service;
