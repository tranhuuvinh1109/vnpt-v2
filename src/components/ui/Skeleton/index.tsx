type SkeletonProsp = {
  className?: string;
};

export const Skeleton = ({ className }: SkeletonProsp) => {
  return (
    <div className={`relative min-h-10 w-full overflow-hidden rounded-lg bg-gray-300 ${className}`}>
      <div className="animate-reflect absolute top-0 left-[-100px] h-full w-[100px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
    </div>
  );
};
