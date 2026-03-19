import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface RelatedLink {
  title: string;
  to: string;
}

interface RelatedLinksProps {
  title: string;
  links: RelatedLink[];
}

const RelatedLinks = ({ title, links }: RelatedLinksProps) => {
  if (links.length === 0) return null;
  return (
    <div>
      <h3 className="font-display font-semibold text-lg text-foreground mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border bg-card text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
          >
            {link.title} <ArrowRight className="w-3 h-3" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedLinks;
