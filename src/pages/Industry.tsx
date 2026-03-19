import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import RelatedLinks from '@/components/RelatedLinks';
import { services, industries, locations } from '@/utils/helpers';
import { CheckCircle } from 'lucide-react';

const Industry = () => {
  const { service: serviceSlug, industry: industrySlug } = useParams<{ service: string; industry: string }>();
  const service = services.find((s) => s.slug === serviceSlug);
  const industry = industries.find((i) => i.slug === industrySlug);

  if (!service || !industry) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center pt-20">
          <h1 className="font-display font-bold text-3xl text-foreground">Page Not Found</h1>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SEOHead
        title={`${service.shortTitle} for ${industry.title}`}
        description={`Professional ${service.title} services tailored for the ${industry.title} industry. ${industry.description}`}
        canonical={`/services/${service.slug}/${industry.slug}`}
      />
      <Header />
      <main>
        <section className="pt-32 pb-20 gradient-bg-subtle">
          <div className="container mx-auto px-4 max-w-3xl">
            <Link to={`/services/${service.slug}`} className="text-sm text-primary font-medium mb-4 inline-block">← Back to {service.shortTitle}</Link>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
              {service.shortTitle} for <span className="gradient-text">{industry.title}</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground">{industry.description}</motion.p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-display font-bold text-2xl text-foreground mb-6">The {industry.title} Marketing Challenge</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              The {industry.title.toLowerCase()} industry faces unique digital marketing challenges — from regulatory compliance to intense competition for customer attention. Generic marketing strategies simply don't work. You need a partner who understands your industry's nuances, audience behaviors, and competitive landscape.
            </p>
            <h2 className="font-display font-bold text-2xl text-foreground mb-6">Our {industry.title} {service.shortTitle} Solution</h2>
            <div className="space-y-3 mb-8">
              {[
                `Industry-specific ${service.shortTitle} strategies designed for ${industry.title.toLowerCase()} brands`,
                'Compliance-aware campaigns that protect your brand reputation',
                'Audience targeting based on deep industry research and data',
                'Competitive benchmarking against top players in your space',
                'Continuous optimization driven by industry-specific KPIs',
              ].map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{b}</span>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl border bg-card shadow-card">
              <h3 className="font-display font-semibold text-lg text-foreground mb-3">Case Study Highlight</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                A leading {industry.title.toLowerCase()} company partnered with Viralstan for {service.shortTitle} services. Within 6 months, they achieved a 280% increase in qualified leads and a 45% reduction in customer acquisition cost.
              </p>
              <div className="flex gap-6">
                <div><span className="font-display font-bold text-xl gradient-text">280%</span><div className="text-xs text-muted-foreground">Lead Growth</div></div>
                <div><span className="font-display font-bold text-xl gradient-text">45%</span><div className="text-xs text-muted-foreground">Lower CPA</div></div>
                <div><span className="font-display font-bold text-xl gradient-text">6 mo</span><div className="text-xs text-muted-foreground">Timeframe</div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 space-y-8">
            <RelatedLinks title="Other Industries" links={industries.filter((i) => i.slug !== industry.slug).map((i) => ({ title: i.title, to: `/services/${service.slug}/${i.slug}` }))} />
            <RelatedLinks title="Explore Services" links={services.map((s) => ({ title: s.shortTitle, to: `/services/${s.slug}` }))} />
            <RelatedLinks title="Locations" links={locations.map((l) => ({ title: `${l.title}, ${l.state}`, to: `/services/${service.slug}/location/${l.slug}` }))} />
          </div>
        </section>

        <CTASection title={`Grow Your ${industry.title} Brand`} subtitle={`Get a custom ${service.shortTitle} strategy built for the ${industry.title.toLowerCase()} industry.`} />
      </main>
      <Footer />
    </>
  );
};

export default Industry;
