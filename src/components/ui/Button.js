import Link from "next/link";
import { Loader2, Plane } from "lucide-react";
import { cn } from "@/lib/cn";
import { disabledState, focusRing } from "@/lib/styles";

const variants = {
  primary: "btn-sunrise font-bold shadow-navy",
  blue: "bg-brand-blue-600 font-bold text-white shadow-navy hover:bg-brand-blue-500 active:bg-brand-blue-600",
  secondary:
    "border-2 border-brand-blue-600 bg-transparent font-semibold text-brand-blue-600 hover:bg-brand-sky-50 active:bg-brand-sky-50 dark:border-brand-sky-400 dark:text-brand-sky-400 dark:hover:bg-white/10",
  ghost:
    "bg-transparent font-semibold text-brand-navy-700 hover:bg-brand-sky-50 active:bg-brand-sky-50 dark:text-white dark:hover:bg-white/10",
};

const onDarkVariants = {
  primary: variants.primary,
  blue: variants.blue,
  secondary:
    "border-2 border-white/80 bg-transparent font-semibold text-white hover:bg-white/10 active:bg-white/15",
  ghost: "bg-transparent font-semibold text-white hover:bg-white/10 active:bg-white/15",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  loading = false,
  disabled = false,
  onDark = false,
  showPlane,
  type = "button",
  ...props
}) {
  const isDisabled = disabled || loading;
  const plane = showPlane ?? variant === "primary";
  const classes = cn(
    "group inline-flex min-h-11 items-center justify-center gap-2 rounded-pill px-5 py-2.5 text-sm transition duration-300 ease-out",
    focusRing,
    disabledState,
    "active:scale-[0.98]",
    onDark ? onDarkVariants[variant] : variants[variant],
    className
  );

  const content = (
    <>
      {loading ? <Loader2 className="size-4 animate-spin" strokeWidth={1.5} aria-hidden="true" /> : null}
      <span>{children}</span>
      {plane && !loading ? (
        <Plane className="plane-icon size-4" strokeWidth={1.5} aria-hidden="true" />
      ) : null}
    </>
  );

  if (href && !isDisabled) {
    return (
      <Link href={href} className={classes} aria-busy={loading || undefined} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      {...props}
    >
      {content}
    </button>
  );
}
