const SectionSkeleton = () => (
  <div className="animate-pulse space-y-4">
    <div className="h-8 bg-muted rounded-lg w-1/3" />
    <div className="h-4 bg-muted rounded-lg w-2/3" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {[1, 2, 3].map((i) => (
        <div key={i} className="h-48 bg-muted rounded-2xl" />
      ))}
    </div>
  </div>
);

export default SectionSkeleton;
