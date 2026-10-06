export default function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-pill focus:bg-surface focus:px-4 focus:py-3 focus:font-semibold focus:text-brand-navy-700 focus:shadow-navy focus:outline-none focus:ring-2 focus:ring-brand-sky-400"
    >
      Skip to content
    </a>
  );
}
