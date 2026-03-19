import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import { blogPosts } from '@/utils/helpers';

const Blogs = () => {
  return (
    <>
      <SEOHead
        title="Marketing Blog"
        description="Expert digital marketing insights, strategies, and tips from the Viralstan team. Stay ahead with actionable content on SEO, PPC, social media, and more."
        canonical="/blogs"
      />
      <Header />
      <main>
        <section className="pt-32 pb-12 gradient-bg-subtle">
          <div className="container mx-auto px-4 text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
              Marketing <span className="gradient-text">Insights</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Actionable strategies, industry trends, and expert tips to fuel your digital growth.
            </motion.p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, i) => (
                <motion.div key={post.slug} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                  <BlogCard {...post} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blogs;
