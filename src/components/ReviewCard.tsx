import { Star } from 'lucide-react';

interface ReviewCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
}

const ReviewCard = ({ name, role, content, rating }: ReviewCardProps) => {
  return (
    <div className="p-6 rounded-2xl bg-card border shadow-card min-w-[320px] flex-shrink-0">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed mb-6">"{content}"</p>
      <div>
        <div className="font-display font-semibold text-sm text-foreground">{name}</div>
        <div className="text-xs text-muted-foreground">{role}</div>
      </div>
    </div>
  );
};

export default ReviewCard;
