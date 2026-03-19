import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { services } from '@/utils/helpers';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass border-b shadow-card py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-lg">V</span>
          </div>
          <span className="font-display font-bold text-xl text-foreground">Viralstan</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          <NavItem to="/" label="Home" />
          <NavItem to="/about" label="About" />
          <div className="relative group">
            <button
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              Services <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-1 w-64 bg-card rounded-xl shadow-elevated border p-2"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted transition-colors"
                    >
                      <span className="text-lg">{s.icon}</span>
                      <span className="text-sm font-medium text-foreground">{s.shortTitle}</span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <NavItem to="/blogs" label="Blog" />
          <NavItem to="/contact" label="Contact" />
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center px-5 py-2.5 rounded-lg gradient-bg text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity shadow-glow"
          >
            Get Started
          </Link>
        </div>

        <button
          className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              <MobileLink to="/" label="Home" />
              <MobileLink to="/about" label="About" />
              {services.map((s) => (
                <MobileLink key={s.slug} to={`/services/${s.slug}`} label={s.shortTitle} indent />
              ))}
              <MobileLink to="/blogs" label="Blog" />
              <MobileLink to="/contact" label="Contact" />
              <Link
                to="/contact"
                className="mt-3 text-center px-5 py-3 rounded-lg gradient-bg text-primary-foreground text-sm font-semibold"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const NavItem = ({ to, label }: { to: string; label: string }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link
      to={to}
      className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
        isActive ? 'text-primary bg-primary/5' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
      }`}
    >
      {label}
    </Link>
  );
};

const MobileLink = ({ to, label, indent }: { to: string; label: string; indent?: boolean }) => (
  <Link
    to={to}
    className={`px-4 py-2.5 text-sm font-medium text-foreground rounded-lg hover:bg-muted transition-colors ${indent ? 'pl-8 text-muted-foreground' : ''}`}
  >
    {label}
  </Link>
);

export default Header;
