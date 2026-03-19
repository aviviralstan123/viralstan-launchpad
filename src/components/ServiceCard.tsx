import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  slug: string;
  title: string;
  description: string;
  icon: string;
}

const ServiceCard = ({ slug, title, description, icon }: ServiceCardProps) => {
  return (
    <Link
      to={`/services/${slug}`}
      className="group block p-6 rounded-2xl bg-card border hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
    >
      <div className="w-12 h-12 rounded-xl gradient-bg-subtle flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="font-display font-semibold text-lg text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>
      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
        Learn More <ArrowRight className="w-3.5 h-3.5" />
      </span>
    </Link>
  );
};

export default ServiceCard;
