function SkeletonCell() {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="h-7 w-12 animate-pulse rounded bg-foreground/10" />
      <div className="mt-2 h-2.5 w-16 animate-pulse rounded bg-foreground/10" />
    </div>
  );
}

export default function StatsBoxSkeleton() {
  return (
    <div className="mx-auto max-w-xl rounded-lg border border-foreground/20 px-5 py-4">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <SkeletonCell />
        <SkeletonCell />
        <SkeletonCell />
        <SkeletonCell />
      </div>
    </div>
  );
}
