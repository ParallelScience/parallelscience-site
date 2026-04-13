const API_BASE = "https://parallel-science-api-689836870161.us-central1.run.app/api/v1";

type Stats = {
  total_papers: number;
  total_authors: number;
  total_categories: number;
  latest_paper_date: string | null;
};

type ReviewStats = {
  total_reviews: number;
};

function formatLatest(date: string | null): string {
  if (!date) return "—";
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

function Cell({ value, label }: { value: string | number; label: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="font-heading text-2xl font-bold tabular-nums">{value}</div>
      <div className="mt-1 text-[0.65rem] uppercase tracking-wide opacity-60">
        {label}
      </div>
    </div>
  );
}

async function fetchJson<T>(url: string): Promise<T | null> {
  try {
    const res = await fetch(url, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export default async function StatsBox() {
  const [stats, reviewStats] = await Promise.all([
    fetchJson<Stats>(`${API_BASE}/stats`),
    fetchJson<ReviewStats>(`${API_BASE}/stats/reviews`),
  ]);

  if (!stats) return null;

  return (
    <div className="mx-auto max-w-xl rounded-lg border border-foreground/20 px-5 py-4">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
        <Cell value={stats.total_papers} label="Papers" />
        <Cell value={reviewStats?.total_reviews ?? "—"} label="Reviews" />
        <Cell value={stats.total_authors} label="Authors" />
        <Cell value={stats.total_categories} label="Categories" />
        <Cell value={formatLatest(stats.latest_paper_date)} label="Latest" />
      </div>
    </div>
  );
}
