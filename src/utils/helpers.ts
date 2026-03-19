import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be under 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(1, "Phone is required").max(20, "Invalid phone number").regex(/^[\d\s\-+()]+$/, "Invalid phone format"),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be under 2000 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export function slugify(text: string): string {
  return text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim();
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

export const services = [
  { slug: 'seo', title: 'Search Engine Optimization', shortTitle: 'SEO', description: 'Dominate search rankings with data-driven SEO strategies that drive organic traffic and maximize your online visibility.', icon: '🔍' },
  { slug: 'social-media-marketing', title: 'Social Media Marketing', shortTitle: 'Social Media', description: 'Build a loyal community and amplify your brand voice across all major social platforms with engaging content strategies.', icon: '📱' },
  { slug: 'ppc-advertising', title: 'PPC Advertising', shortTitle: 'PPC Ads', description: 'Maximize your ROI with targeted pay-per-click campaigns that convert clicks into customers and revenue.', icon: '🎯' },
  { slug: 'content-marketing', title: 'Content Marketing', shortTitle: 'Content', description: 'Tell your brand story through compelling content that educates, engages, and converts your ideal audience.', icon: '✍️' },
  { slug: 'email-marketing', title: 'Email Marketing', shortTitle: 'Email', description: 'Nurture leads and drive repeat business with personalized email campaigns that deliver measurable results.', icon: '📧' },
  { slug: 'web-development', title: 'Web Design & Development', shortTitle: 'Web Dev', description: 'Create stunning, high-performance websites that captivate visitors and drive conversions at scale.', icon: '💻' },
];

export const industries = [
  { slug: 'healthcare', title: 'Healthcare', description: 'HIPAA-compliant digital marketing strategies for hospitals, clinics, and healthcare providers.' },
  { slug: 'ecommerce', title: 'E-Commerce', description: 'Revenue-driving marketing solutions for online stores and D2C brands.' },
  { slug: 'real-estate', title: 'Real Estate', description: 'Lead generation and branding strategies for real estate agencies and developers.' },
  { slug: 'education', title: 'Education', description: 'Student enrollment and brand awareness campaigns for educational institutions.' },
  { slug: 'fintech', title: 'FinTech', description: 'Growth marketing and trust-building strategies for financial technology companies.' },
  { slug: 'saas', title: 'SaaS', description: 'Product-led growth and demand generation strategies for software companies.' },
];

export const locations = [
  { slug: 'new-york', title: 'New York', state: 'NY' },
  { slug: 'los-angeles', title: 'Los Angeles', state: 'CA' },
  { slug: 'chicago', title: 'Chicago', state: 'IL' },
  { slug: 'houston', title: 'Houston', state: 'TX' },
  { slug: 'miami', title: 'Miami', state: 'FL' },
  { slug: 'san-francisco', title: 'San Francisco', state: 'CA' },
];

export const blogPosts = [
  { slug: 'seo-strategies-2025', title: '10 SEO Strategies That Will Dominate in 2025', excerpt: 'Stay ahead of algorithm updates with these proven SEO tactics that top-performing websites are using right now.', category: 'SEO', date: '2025-03-15', readTime: '8 min', image: '' },
  { slug: 'social-media-roi', title: 'How to Measure Social Media ROI Effectively', excerpt: 'Stop guessing and start measuring. Learn the exact metrics and frameworks to prove your social media marketing value.', category: 'Social Media', date: '2025-03-10', readTime: '6 min', image: '' },
  { slug: 'ppc-budget-optimization', title: 'PPC Budget Optimization: Spend Less, Convert More', excerpt: 'Advanced bidding strategies and campaign structures that reduce cost-per-acquisition while scaling results.', category: 'PPC', date: '2025-03-05', readTime: '7 min', image: '' },
  { slug: 'content-marketing-funnel', title: 'Building a Content Marketing Funnel That Converts', excerpt: 'Map your content to every stage of the buyer journey and watch your conversion rates soar.', category: 'Content', date: '2025-02-28', readTime: '9 min', image: '' },
  { slug: 'email-automation-guide', title: 'The Complete Guide to Email Marketing Automation', excerpt: 'Set up email sequences that nurture leads on autopilot and generate revenue while you sleep.', category: 'Email', date: '2025-02-20', readTime: '10 min', image: '' },
  { slug: 'local-seo-small-business', title: 'Local SEO Playbook for Small Businesses', excerpt: 'Rank higher in local search results and attract more customers from your community with these proven tactics.', category: 'SEO', date: '2025-02-15', readTime: '7 min', image: '' },
];

export const testimonials = [
  { name: 'Sarah Chen', role: 'CMO, TechFlow', content: 'Viralstan transformed our digital presence. Our organic traffic grew 340% in just 6 months, and our lead quality improved dramatically.', rating: 5 },
  { name: 'Marcus Johnson', role: 'Founder, GrowthPeak', content: 'The ROI we\'ve seen from their PPC campaigns is incredible. They cut our CPA by 60% while doubling our conversion volume.', rating: 5 },
  { name: 'Emily Rodriguez', role: 'VP Marketing, HealthFirst', content: 'Working with Viralstan has been a game-changer. Their healthcare marketing expertise is unmatched in the industry.', rating: 5 },
  { name: 'David Park', role: 'CEO, ShopNova', content: 'Our e-commerce revenue increased by 280% after implementing their content and email marketing strategies. Absolutely worth every penny.', rating: 5 },
];
