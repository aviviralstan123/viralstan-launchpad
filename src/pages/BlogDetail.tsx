import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import RelatedLinks from '@/components/RelatedLinks';
import { blogPosts, services, formatDate } from '@/utils/helpers';
import { Clock, ArrowLeft } from 'lucide-react';

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);
  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  if (!post) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center pt-20">
          <h1 className="font-display font-bold text-3xl text-foreground">Post Not Found</h1>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SEOHead title={post.title} description={post.excerpt} canonical={`/blogs/${post.slug}`} ogType="article" />
      <Header />
      <main>
        <article className="pt-32 pb-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <Link to="/blogs" className="inline-flex items-center gap-2 text-sm text-primary font-medium mb-6">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">{post.category}</span>
              <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mt-4 mb-4">{post.title}</h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
                <span>{formatDate(post.date)}</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime} read</span>
              </div>
            </motion.div>

            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
              <p>{post.excerpt}</p>
              <p>In today's rapidly evolving digital landscape, staying ahead of marketing trends isn't just an advantage — it's a necessity. Businesses that adapt quickly to new strategies and technologies consistently outperform their competitors in both market share and customer engagement.</p>
              <h2 className="font-display font-bold text-xl text-foreground mt-8 mb-4">Key Takeaways</h2>
              <p>The most successful brands share common traits: they invest in data-driven decision making, prioritize customer experience, and maintain consistent presence across digital channels. Here's what you need to know to implement these strategies effectively.</p>
              <h2 className="font-display font-bold text-xl text-foreground mt-8 mb-4">Implementation Strategy</h2>
              <p>Start by auditing your current marketing performance across all channels. Identify gaps, benchmark against competitors, and prioritize initiatives based on potential ROI. Remember: consistent execution beats sporadic bursts of activity every time.</p>
              <h2 className="font-display font-bold text-xl text-foreground mt-8 mb-4">Measuring Success</h2>
              <p>Define clear KPIs before launching any campaign. Track metrics that directly tie to business objectives — not vanity metrics. Regular reporting and optimization cycles ensure your marketing investment delivers maximum returns.</p>
            </div>

            <div className="mt-12 space-y-8">
              <RelatedLinks title="Related Services" links={services.slice(0, 3).map((s) => ({ title: s.shortTitle, to: `/services/${s.slug}` }))} />
            </div>
          </div>
        </article>

        {relatedPosts.length > 0 && (
          <section className="py-16 gradient-bg-subtle">
            <div className="container mx-auto px-4">
              <h2 className="font-display font-bold text-2xl text-foreground mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((p) => (
                  <BlogCard key={p.slug} {...p} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
};

export default BlogDetail;
