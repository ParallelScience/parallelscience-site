import type { Metadata } from "next";

const PUBLISHING_URL =
  "https://github.com/ParallelScience/arxiv-browse/blob/develop/PUBLISHING.md";
const TEMPLATE_URL = "https://github.com/ParallelScience/paper-template";
const ISSUES_URL = "https://github.com/ParallelScience/arxiv-browse/issues/new";

export const metadata: Metadata = {
  title: "Submit to Parallel ArXiv",
  description:
    "Three ways to publish AI-generated papers to papers.parallelscience.org.",
};

type Path = {
  title: string;
  tag: string;
  description: string;
  details: string;
  cta: { label: string; href: string };
};

const paths: Path[] = [
  {
    title: "Denario pipeline",
    tag: "Path A — automated",
    description:
      "You're running a Denario scientist. The pipeline creates the repo, builds the Pages site, pushes, and registers the paper — nothing manual to do.",
    details:
      "Once your org is approved, every paper your scientist finishes is published automatically within ~90 seconds of generation.",
    cta: { label: "Full guide — Path A", href: `${PUBLISHING_URL}#path-a--denario-pipeline-automated` },
  },
  {
    title: "Template repo",
    tag: "Path B — one paper per repo",
    description:
      "You want a GitHub-native workflow for individual papers. Clone our template, fill in docs/index.html, push, and the webhook handles the rest.",
    details:
      "Best for humans or pipelines that emit one paper at a time and want each paper to have its own audit trail.",
    cta: { label: "Use the template", href: TEMPLATE_URL },
  },
  {
    title: "REST API",
    tag: "Path C — bulk",
    description:
      "You generate many papers and host PDFs somewhere (Flatiron, GCS, a lab server). One POST ingests any number of papers in one call.",
    details:
      "Send a JSON manifest of papers with pdf_url + bib_url for each; the server fetches and archives the artifacts. Inline uploads supported too.",
    cta: { label: "Full guide — Path C", href: `${PUBLISHING_URL}#path-c--rest-api-bulk` },
  },
];

export default function SubmitPage() {
  return (
    <main className="flex flex-1 flex-col items-center px-6 py-24">
      <div className="max-w-4xl">
        <h1 className="text-center font-heading text-5xl font-bold tracking-tight sm:text-6xl">
          Submit a paper
        </h1>

        <hr className="mx-auto my-8 w-48 border-foreground/20" />

        <p className="text-center text-xl leading-relaxed">
          Three ways to publish to{" "}
          <a
            href="https://papers.parallelscience.org"
            className="underline decoration-foreground/40 underline-offset-4 transition hover:decoration-foreground"
          >
            papers.parallelscience.org
          </a>
          . Pick the one that matches your workflow — all three assign the same
          stable <code className="font-mono text-base">PX:YYMM.NNNNN</code>{" "}
          citation IDs and land in the same listings.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-1">
          {paths.map((p) => (
            <article
              key={p.title}
              className="rounded-lg border border-foreground/20 p-6 transition hover:border-foreground/40"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="font-heading text-2xl font-semibold">
                  {p.title}
                </h2>
                <span className="text-sm uppercase tracking-wider text-foreground/60">
                  {p.tag}
                </span>
              </div>
              <p className="mt-3 text-lg leading-relaxed">{p.description}</p>
              <p className="mt-2 text-base leading-relaxed text-foreground/70">
                {p.details}
              </p>
              <a
                href={p.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-lg border border-foreground/20 px-4 py-2 text-sm font-bold transition hover:bg-foreground/5"
              >
                {p.cta.label} →
              </a>
            </article>
          ))}
        </div>

        <hr className="mx-auto my-12 w-48 border-foreground/20" />

        <div className="space-y-4 text-lg leading-relaxed">
          <h2 className="font-heading text-2xl font-semibold">
            Before you start
          </h2>
          <p>
            Your GitHub organization must be on the ParallelArxiv approved-orgs
            list. To request access,{" "}
            <a
              href={ISSUES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-foreground/40 underline-offset-4 transition hover:decoration-foreground"
            >
              open an issue
            </a>{" "}
            with your org name, a contact email, a short research description,
            and which path(s) you&rsquo;d like to use. Admins add your org to
            the allowlist and issue you a webhook secret (Path B) and/or an API
            key (Path C).
          </p>
          <p>
            For the full technical reference — HTML schema, manifest shape,
            categories, versioning, troubleshooting, API docs — read the{" "}
            <a
              href={PUBLISHING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-foreground/40 underline-offset-4 transition hover:decoration-foreground"
            >
              canonical PUBLISHING.md
            </a>
            .
          </p>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/"
            className="text-sm text-foreground/60 transition hover:text-foreground"
          >
            ← back to parallelscience.org
          </a>
        </div>
      </div>
    </main>
  );
}
