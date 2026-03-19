import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import RelatedLinks from '@/components/RelatedLinks';
import { services, industries, locations } from '@/utils/helpers';
import { MapPin, CheckCircle } from 'lucide-react';

const Location = () => {
  const { service: serviceSlug, location: locationSlug } = useParams<{ service: string; location: string }>();
  const service = services.find((s) => s.slug === serviceSlug);
  const location = locations.find((l) => l.slug === locationSlug);

  if (!service || !location) {
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
        title={`${service.shortTitle} in ${location.title}, ${location.state}`}
        description={`Professional ${service.title} services in ${location.title}, ${location.state}. Local expertise, national results. Get your free strategy session.`}
        canonical={`/services/${service.slug}/location/${location.slug}`}
      />
      <Header />
      <main>
        <section className="pt-32 pb-20 gradient-bg-subtle">
          <div className="container mx-auto px-4 max-w-3xl">
            <Link to={`/services/${service.slug}`} className="text-sm text-primary font-medium mb-4 inline-block">← Back to {service.shortTitle}</Link>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-primary mb-4">
              <MapPin className="w-5 h-5" /> {location.title}, {location.state}
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
              {service.shortTitle} in <span className="gradient-text">{location.title}</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground">
              Dominate the {location.title} market with locally-optimized {service.shortTitle} strategies that connect your brand with customers in your area.
            </motion.p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-display font-bold text-2xl text-foreground mb-6">Why {service.shortTitle} Matters in {location.title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {location.title} is one of the most competitive markets in the country. With millions of potential customers actively searching for products and services online, businesses that invest in {service.shortTitle} gain a significant edge. Our local {location.title} team understands the market dynamics, consumer behaviors, and competitive landscape unique to this area.
            </p>

            <div className="space-y-3 mb-12">
              {[
                `Hyper-local ${service.shortTitle} targeting for ${location.title} audiences`,
                'Geo-specific keyword research and content optimization',
                `Competitive analysis of top ${location.title} businesses`,
                'Local citation building and reputation management',
                'Monthly performance reports with local market insights',
              ].map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{b}</span>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl border bg-card shadow-card mb-12">
              <h3 className="font-display font-semibold text-lg text-foreground mb-3">{location.title} Success Story</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                A {location.title}-based business partnered with us for local {service.shortTitle}. Within 4 months, they ranked #1 for 15 high-value local keywords and saw a 190% increase in foot traffic from organic search.
              </p>
              <div className="flex gap-6">
                <div><span className="font-display font-bold text-xl gradient-text">#1</span><div className="text-xs text-muted-foreground">Local Rankings</div></div>
                <div><span className="font-display font-bold text-xl gradient-text">190%</span><div className="text-xs text-muted-foreground">Traffic Increase</div></div>
              </div>
            </div>

            {/* Map Embed Placeholder */}
            <div className="rounded-2xl overflow-hidden border h-64 bg-muted flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm">Map integration available — embed your Google Maps API key</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 space-y-8">
            <RelatedLinks title="Other Locations" links={locations.filter((l) => l.slug !== location.slug).map((l) => ({ title: `${l.title}, ${l.state}`, to: `/services/${service.slug}/location/${l.slug}` }))} />
            <RelatedLinks title="Industries" links={industries.map((i) => ({ title: i.title, to: `/services/${service.slug}/${i.slug}` }))} />
            <RelatedLinks title="Explore Services" links={services.map((s) => ({ title: s.shortTitle, to: `/services/${s.slug}` }))} />
          </div>
        </section>

        <CTASection title={`Grow Your Business in ${location.title}`} subtitle={`Get a free ${service.shortTitle} audit and custom strategy for the ${location.title} market.`} />
      </main>
      <Footer />
    </>
  );
};

export default Location;
