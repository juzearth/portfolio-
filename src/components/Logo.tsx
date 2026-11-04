import { profile } from "@/data/profile";
import { MARK_PATH, MARK_VIEWBOX } from "./logoPaths";

/**
 * Brand lockup: PO monogram + name. The mark uses currentColor, so it follows the
 * text colour (dark on the hero, #0F5194 once the navbar floats, etc).
 */
const Logo = ({
  className = "",
  showTagline = false,
  markClassName = "",
}: {
  className?: string;
  showTagline?: boolean;
  markClassName?: string;
}) => (
  <span className={`inline-flex items-center gap-3 ${className}`}>
    <svg viewBox={MARK_VIEWBOX} className={`h-9 sm:h-10 w-auto shrink-0 ${markClassName}`} aria-hidden="true">
      <path d={MARK_PATH} fill="currentColor" fillRule="evenodd" />
    </svg>
    <span className="flex flex-col leading-none text-left">
      <span className="text-sm sm:text-base font-semibold uppercase tracking-[0.14em]">{profile.fullName}</span>
      {showTagline && (
        <span className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
          Software Engineer
        </span>
      )}
    </span>
  </span>
);

export default Logo;
