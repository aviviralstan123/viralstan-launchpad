import { Link } from 'react-router-dom';
import { services, industries, locations } from '@/utils/helpers';

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">V</span>
              </div>
              <span className="font-display font-bold text-xl">Viralstan</span>
            </Link>
            <p className="text-sm opacity-70 leading-relaxed mb-6">
              Data-driven digital marketing agency helping brands achieve explosive growth through innovative strategies and measurable results.
            </p>
            <div className="flex gap-3">
              {['Twitter', 'LinkedIn', 'Instagram'].map((s) => (
                <a key={s} href="#" className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors text-xs font-bold">
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-base mb-4">Services</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-base mb-4">Industries</h3>
            <ul className="space-y-2.5">
              {industries.map((i) => (
                <li key={i.slug}>
                  <Link to={`/services/seo/${i.slug}`} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                    {i.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-base mb-4">Locations</h3>
            <ul className="space-y-2.5">
              {locations.map((l) => (
                <li key={l.slug}>
                  <Link to={`/services/seo/location/${l.slug}`} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                    {l.title}, {l.state}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h3 className="font-display font-semibold text-base mb-4">Company</h3>
              <ul className="space-y-2.5">
                <li><Link to="/about" className="text-sm opacity-70 hover:opacity-100 transition-opacity">About Us</Link></li>
                <li><Link to="/blogs" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Blog</Link></li>
                <li><Link to="/contact" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-60">© {new Date().getFullYear()} Viralstan. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
