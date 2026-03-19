import { useState } from 'react';
import { motion } from 'framer-motion';
import { z } from 'zod';
import SEOHead from '@/components/SEOHead';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { contactSchema, type ContactFormData } from '@/utils/helpers';
import { Send, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    try {
      contactSchema.parse(formData);
      setLoading(true);
      // API integration ready — replace with: await api.submitContact(formData);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      if (err instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        err.errors.forEach((e) => {
          if (e.path[0]) fieldErrors[e.path[0] as string] = e.message;
        });
        setErrors(fieldErrors);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEOHead title="Contact Us" description="Get in touch with Viralstan for a free digital marketing strategy session. Let's discuss how we can grow your brand." canonical="/contact" />
      <Header />
      <main>
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
                  Let's <span className="gradient-text">Grow Together</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Ready to scale your digital presence? Fill out the form and our team will get back to you within 24 hours with a custom strategy proposal.
                </p>

                <div className="space-y-6">
                  {[
                    { icon: Mail, label: 'Email', value: 'hello@viralstan.com' },
                    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
                    { icon: MapPin, label: 'Office', value: 'New York, NY' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg gradient-bg-subtle flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">{item.label}</div>
                        <div className="text-sm font-medium text-foreground">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                {submitted ? (
                  <div className="p-8 rounded-2xl bg-card border shadow-card text-center">
                    <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h2 className="font-display font-bold text-2xl text-foreground mb-2">Message Sent!</h2>
                    <p className="text-muted-foreground">We'll get back to you within 24 hours. Looking forward to growing your brand together.</p>
                    <button onClick={() => setSubmitted(false)} className="mt-4 text-primary text-sm font-medium hover:underline">Send another message</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-card border shadow-card space-y-5">
                    <h2 className="font-display font-bold text-xl text-foreground mb-2">Get Your Free Strategy Call</h2>

                    {(['name', 'email', 'phone'] as const).map((field) => (
                      <div key={field}>
                        <label htmlFor={field} className="block text-sm font-medium text-foreground mb-1.5 capitalize">{field}</label>
                        <input
                          id={field}
                          name={field}
                          type={field === 'email' ? 'email' : 'text'}
                          value={formData[field]}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary ${
                            errors[field] ? 'border-destructive' : 'border-input'
                          }`}
                          placeholder={field === 'name' ? 'John Doe' : field === 'email' ? 'john@example.com' : '+1 (555) 000-0000'}
                        />
                        {errors[field] && <p className="text-xs text-destructive mt-1">{errors[field]}</p>}
                      </div>
                    ))}

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none ${
                          errors.message ? 'border-destructive' : 'border-input'
                        }`}
                        placeholder="Tell us about your project and goals..."
                      />
                      {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg gradient-bg text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
                    >
                      {loading ? 'Sending...' : <><Send className="w-4 h-4" /> Send Message</>}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
