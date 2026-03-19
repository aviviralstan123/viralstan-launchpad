import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import BlogCard from '@/components/BlogCard';
import ReviewCard from '@/components/ReviewCard';
import CTASection from '@/components/CTASection';
import RelatedLinks from '@/components/RelatedLinks';
import { services, industries, locations, blogPosts, testimonials } from '@/utils/helpers';

const SectionHeader = ({ label, title, subtitle }: { label?: string; title: string; subtitle?: string }) => (
  <div className="text-center mb-12">
    {label && <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">{label}</span>}
    <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">{title}</h2>
    {subtitle && <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

const Home = () => {
  return (
    <>
      <SEOHead
        title="Digital Marketing Agency"
        description="Viralstan is a data-driven digital marketing agency specializing in SEO, PPC, social media, and content marketing. Scale your brand with measurable results."
        canonical="/"
        keywords="digital marketing agency, SEO, PPC, social media marketing, content marketing"
      />
      <Header />
      <main>
        <HeroSection />

        {/* Services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeader
              label="Our Services"
              title="Marketing Solutions That Drive Revenue"
              subtitle="Comprehensive digital marketing services designed to grow your brand, generate leads, and maximize ROI."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <motion.div key={service.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <ServiceCard {...service} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20 gradient-bg-subtle">
          <div className="container mx-auto px-4">
            <SectionHeader
              label="Industries We Serve"
              title="Specialized Marketing for Your Industry"
              subtitle="Deep expertise across verticals means strategies tailored to your market's unique challenges."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((ind) => (
                <motion.div key={ind.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-card border shadow-card hover:shadow-elevated transition-all hover:-translate-y-1"
                >
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">{ind.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{ind.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeader
              label="Locations"
              title="Local Marketing Expertise Nationwide"
              subtitle="Hyper-local strategies that connect your brand with customers in your target markets."
            />
            <div className="flex flex-wrap justify-center gap-3">
              {locations.map((loc) => (
                <motion.a
                  key={loc.slug}
                  href={`/services/seo/location/${loc.slug}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="px-6 py-3 rounded-xl border bg-card text-foreground font-medium hover:shadow-elevated hover:-translate-y-1 transition-all"
                >
                  📍 {loc.title}, {loc.state}
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 gradient-bg-subtle">
          <div className="container mx-auto px-4">
            <SectionHeader
              label="Testimonials"
              title="What Our Clients Say"
              subtitle="Real results from real brands that trusted us with their growth."
            />
            <div className="flex gap-6 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
              {testimonials.map((t) => (
                <div key={t.name} className="snap-start">
                  <ReviewCard {...t} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Preview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeader
              label="From the Blog"
              title="Marketing Insights & Strategies"
              subtitle="Stay ahead with actionable insights from our team of marketing experts."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.slice(0, 3).map((post) => (
                <motion.div key={post.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <BlogCard {...post} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-12">
          <div className="container mx-auto px-4 space-y-8">
            <RelatedLinks title="Explore Services" links={services.map((s) => ({ title: s.shortTitle, to: `/services/${s.slug}` }))} />
            <RelatedLinks title="Browse Industries" links={industries.map((i) => ({ title: i.title, to: `/services/seo/${i.slug}` }))} />
            <RelatedLinks title="Find Us Locally" links={locations.map((l) => ({ title: `${l.title}, ${l.state}`, to: `/services/seo/location/${l.slug}` }))} />
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
