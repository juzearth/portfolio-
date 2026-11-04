import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Logo from "@/components/Logo";
import "./not-found.css";

const menu = [
  { label: "Home", to: "/", id: undefined },
  { label: "About", to: "/", id: "about" },
  { label: "Skills", to: "/", id: "skills" },
  { label: "Projects", to: "/", id: "projects" },
  { label: "Resume", to: "/", id: "resume" },
  { label: "Contact", to: "/", id: "contact" },
];

const pad = (n: number) => String(n).padStart(2, "0");
const stamp = () => {
  const d = new Date();
  return `${d.getFullYear()}.${pad(d.getMonth() + 1)}.${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
};

/** Little illustrated astronaut, drawn as SVG so it stays crisp and needs no image file. */
const Astronaut = () => (
  <svg viewBox="0 0 200 270" className="nf-astro" aria-hidden="true">
    <defs>
      <linearGradient id="suit" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#ffffff" /><stop offset="1" stopColor="#b9c3d3" /></linearGradient>
      <linearGradient id="visor" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#233a66" /><stop offset=".55" stopColor="#0b1633" /><stop offset="1" stopColor="#1d2a4d" /></linearGradient>
      <linearGradient id="pack" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#8e99ad" /><stop offset="1" stopColor="#c9d1de" /></linearGradient>
    </defs>
    {/* tether */}
    <path d="M70 150 C20 170 10 215 55 240 S120 262 150 250" fill="none" stroke="#9aa7bd" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 7" />
    {/* backpack */}
    <rect x="56" y="104" width="62" height="92" rx="16" fill="url(#pack)" />
    {/* legs */}
    <g transform="rotate(14 100 200)">
      <rect x="80" y="186" width="30" height="62" rx="14" fill="url(#suit)" />
      <rect x="80" y="214" width="30" height="8" fill="#d7263d" />
      <rect x="77" y="238" width="36" height="22" rx="10" fill="#6d7788" />
    </g>
    <g transform="rotate(-8 130 200)">
      <rect x="116" y="186" width="30" height="66" rx="14" fill="url(#suit)" />
      <rect x="116" y="216" width="30" height="8" fill="#d7263d" />
      <rect x="113" y="242" width="36" height="22" rx="10" fill="#6d7788" />
    </g>
    {/* torso */}
    <rect x="70" y="100" width="82" height="98" rx="28" fill="url(#suit)" />
    <rect x="86" y="122" width="50" height="30" rx="8" fill="#dfe5ee" stroke="#aab5c6" />
    <circle cx="98" cy="137" r="4.5" fill="#d7263d" />
    <circle cx="112" cy="137" r="4.5" fill="#2dd4d0" />
    <rect x="122" y="132" width="9" height="9" rx="2" fill="#f5b942" />
    {/* arms */}
    <g transform="rotate(-32 80 118)"><rect x="40" y="108" width="52" height="22" rx="11" fill="url(#suit)" /><rect x="52" y="108" width="8" height="22" fill="#d7263d" /><circle cx="42" cy="119" r="13" fill="#8d97a9" /></g>
    <g transform="rotate(38 142 118)"><rect x="132" y="108" width="52" height="22" rx="11" fill="url(#suit)" /><rect x="156" y="108" width="8" height="22" fill="#d7263d" /><circle cx="182" cy="119" r="13" fill="#8d97a9" /></g>
    {/* helmet */}
    <circle cx="112" cy="70" r="46" fill="url(#suit)" />
    <ellipse cx="116" cy="72" rx="34" ry="30" fill="url(#visor)" />
    <path d="M92 58 C102 46 124 44 136 54" fill="none" stroke="rgba(255,255,255,.7)" strokeWidth="4" strokeLinecap="round" />
    <ellipse cx="132" cy="86" rx="12" ry="6" fill="rgba(255,150,80,.35)" />
    <rect x="86" y="108" width="52" height="12" rx="6" fill="#aab5c6" />
  </svg>
);

const NotFound = () => {
  const location = useLocation();
  const [now, setNow] = useState(stamp);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const prev = document.title;
    document.title = "404 | Peter Ochieng";
    const t = window.setInterval(() => setNow(stamp()), 30000);
    return () => {
      document.title = prev;
      window.clearInterval(t);
    };
  }, []);

  const stars = useMemo(
    () =>
      Array.from({ length: 170 }, (_, i) => ({
        x: Math.random() * 100,
        y: Math.random() * 78,
        r: Math.random() < 0.12 ? 1.5 : Math.random() * 0.8 + 0.4,
        o: Math.random() * 0.6 + 0.35,
        tw: i % 4 === 0,
        d: Math.random() * 4,
      })),
    []
  );

  const debris = useMemo(
    () =>
      Array.from({ length: 16 }, () => ({
        left: 38 + Math.random() * 36,
        top: 10 + Math.random() * 78,
        w: 4 + Math.random() * 12,
        h: 3 + Math.random() * 9,
        dx: (Math.random() - 0.5) * 46,
        dy: (Math.random() - 0.5) * 46,
        dur: 8 + Math.random() * 10,
        clip: `polygon(${Math.random() * 30}% 0, 100% ${Math.random() * 40}%, ${70 + Math.random() * 30}% 100%, 0 ${60 + Math.random() * 40}%)`,
      })),
    []
  );

  return (
    <main className="nf">
      {/* scenery */}
      <div className="nf-sun" aria-hidden />
      <div className="nf-planet" aria-hidden />
      <svg className="nf-stars" aria-hidden preserveAspectRatio="none" viewBox="0 0 100 100">
        {stars.map((s, i) => (
          <circle key={i} cx={s.x} cy={s.y} r={s.r * 0.12} opacity={s.o} className={s.tw ? "tw" : undefined} style={s.tw ? { animationDelay: `${s.d}s` } : undefined} />
        ))}
      </svg>
      <div className="nf-shoot" style={{ top: "12%", left: "78%" }} aria-hidden />
      <div className="nf-shoot" style={{ top: "30%", left: "92%", animationDelay: "4.8s", animationDuration: "11s" }} aria-hidden />
      <div className="nf-earth" aria-hidden />
      <div className="nf-vignette" aria-hidden />

      {/* top-left: brand + clock */}
      <header className="absolute top-0 left-0 z-20 p-5 sm:p-8 flex flex-col gap-2 text-white">
        <Link to="/" aria-label="Peter Ochieng, home">
          <Logo markClassName="text-white" />
        </Link>
        <span className="nf-clock" aria-hidden>{now}</span>
      </header>

      {/* left menu (desktop) */}
      <nav className="nf-side hidden md:flex flex-col absolute z-20 left-0 top-1/2 -translate-y-1/2" aria-label="Site sections">
        {menu.map((m) => (
          <Link key={m.label} to={m.to} state={m.id ? { scrollTo: m.id } : undefined}>
            {m.label}
          </Link>
        ))}
      </nav>

      {/* centre */}
      <div className="relative z-10 min-h-[100svh] flex flex-col items-center justify-center px-5 pt-24 pb-28 text-center">
        <div className="nf-rise relative">
          <h1 className="nf-num nf-display" aria-label="404">
            <span className="nf-digit">4</span>
            <span className="nf-digit nf-zero">0</span>
            <span className="nf-digit">4</span>
          </h1>
          {debris.map((d, i) => (
            <span
              key={i}
              aria-hidden
              className="nf-debris"
              style={{
                left: `${d.left}%`,
                top: `${d.top}%`,
                width: d.w,
                height: d.h,
                clipPath: d.clip,
                animationDuration: `${d.dur}s`,
                ["--dx" as string]: `${d.dx}px`,
                ["--dy" as string]: `${d.dy}px`,
              }}
            />
          ))}
          <Astronaut />
        </div>

        <h2 className="nf-rise nf-display nf-quote mt-3 text-base sm:text-2xl md:text-3xl font-bold uppercase tracking-wide text-slate-100" style={{ animationDelay: ".15s" }}>
          “Houston, we have a small problem…”
        </h2>
        <p className="nf-rise nf-quote mt-3 text-sm sm:text-lg text-slate-300 max-w-md" style={{ animationDelay: ".3s" }}>
          The page you are looking for could not be found.
        </p>
        <p className="nf-rise mt-1 text-xs text-teal-300/80 font-mono break-all max-w-xs sm:max-w-md" style={{ animationDelay: ".4s" }}>
          signal lost: {location.pathname}
        </p>

        <Link to="/" className="nf-rise nf-btn mt-8" style={{ animationDelay: ".5s" }}>
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        {/* mobile menu (the side menu is hidden on small screens) */}
        <nav className="md:hidden mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs uppercase tracking-[0.14em] text-slate-300" aria-label="Site sections">
          {menu.slice(1).map((m) => (
            <Link key={m.label} to={m.to} state={{ scrollTo: m.id }} className="py-1 hover:text-white">
              {m.label}
            </Link>
          ))}
        </nav>
      </div>
    </main>
  );
};

export default NotFound;
