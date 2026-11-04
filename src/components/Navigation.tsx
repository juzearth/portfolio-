import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";

const navItems = [
  { name: "About", href: "about" },
  { name: "Skills", href: "skills" },
  { name: "Projects", href: "projects" },
  { name: "Resume", href: "resume" },
  { name: "Contact", href: "contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navItems.forEach((i) => {
      const el = document.getElementById(i.href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onResize = () => window.innerWidth >= 768 && setIsOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  // At the very top: plain transparent bar over the hero. After scrolling (or with the
  // mobile menu open): a floating frosted-glass pill.
  const floating = isScrolled || isOpen;

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 px-3 sm:px-4 transition-[padding] duration-500 ${floating ? "pt-3" : "pt-0"}`}
      aria-label="Main"
    >
      <div
        className={`container mx-auto rounded-2xl border transition-all duration-500 ${
          floating ? "glass-strong shadow-lg" : "border-transparent bg-transparent"
        }`}
      >
        <div className={`flex items-center justify-between px-4 md:px-6 transition-all duration-300 ${floating ? "h-14" : "h-[4.5rem]"}`}>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="rounded-lg text-foreground transition-transform duration-300 hover:scale-[1.03]"
            aria-label="Peter Ochieng, back to top"
          >
            <Logo markClassName={`transition-colors duration-500 ${floating ? "text-[#0F5194]" : "text-foreground"}`} />
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => go(item.href)}
                aria-current={active === item.href ? "true" : undefined}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  active === item.href
                    ? "text-primary bg-primary/10"
                    : floating
                      ? "text-foreground/80 hover:text-primary hover:bg-primary/5"
                      : "text-foreground hover:text-white hover:bg-white/15"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <button
            className="md:hidden h-11 w-11 -mr-2 inline-flex items-center justify-center rounded-lg text-foreground hover:bg-white/20"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div id="mobile-menu" className="md:hidden border-t border-border px-2 py-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => go(item.href)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium ${
                  active === item.href ? "text-primary bg-primary/10" : "text-foreground hover:bg-primary/5"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
