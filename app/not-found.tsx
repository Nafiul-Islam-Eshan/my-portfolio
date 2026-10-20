import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-shell flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
        404
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        This page doesn&apos;t exist
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-400">
        The link may be out of date. Everything I have built is listed on the
        projects page.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex h-11 items-center rounded-lg bg-accent px-5 text-sm font-semibold text-base hover:bg-accent-soft"
        >
          Back home
        </Link>
        <Link
          href="/projects"
          className="inline-flex h-11 items-center rounded-lg border border-line px-5 text-sm text-slate-300 hover:border-accent/40 hover:text-white"
        >
          View projects
        </Link>
      </div>
    </section>
  );
}
