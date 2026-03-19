import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { formatDate } from '@/utils/helpers';

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

const BlogCard = ({ slug, title, excerpt, category, date, readTime }: BlogCardProps) => {
  return (
    <Link
      to={`/blogs/${slug}`}
      className="group block rounded-2xl bg-card border hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 overflow-hidden"
    >
      <div className="h-48 gradient-bg-subtle flex items-center justify-center">
        <span className="text-4xl opacity-30 font-display font-bold">V</span>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">{category}</span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="w-3 h-3" /> {readTime}
          </span>
        </div>
        <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">{formatDate(date)}</span>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
            Read <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
