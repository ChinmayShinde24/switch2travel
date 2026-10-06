import Link from "next/link";

const variants = {
  primary:
    "bg-amber text-navy-deep hover:bg-amber-bright shadow-sm cta-pulse",
  secondary:
    "bg-white text-navy border border-white/30 hover:bg-sand",
  navy: "bg-navy text-white hover:bg-navy-deep",
  ghost:
    "bg-transparent text-navy border border-line hover:border-blue hover:text-blue",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const classes = `inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium tracking-wide transition duration-200 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
