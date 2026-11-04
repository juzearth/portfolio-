import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown, Download } from "lucide-react";
import { profile } from "@/data/profile";

const Hero = () => {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const socials = [
    { icon: <Github className="w-5 h-5" />, href: profile.github, label: "GitHub profile" },
    { icon: <Linkedin className="w-5 h-5" />, href: profile.linkedin, label: "LinkedIn profile" },
    { icon: <Mail className="w-5 h-5" />, href: `mailto:${profile.email}`, label: "Send an email" },
  ];

  return (
    <section className="min-h-[100svh] flex items-center justify-center hero-gradient relative overflow-hidden">
      <div aria-hidden className="absolute -top-24 -left-24 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-accent/30 blur-3xl animate-blob" />
      <div
        aria-hidden
        className="absolute top-1/4 right-1/3 w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-white/10 blur-3xl animate-blob"
        style={{ animationDelay: "9s" }}
      />
      {Array.from({ length: 7 }).map((_, i) => (
        <span
          key={i}
          aria-hidden
          className="orb absolute rounded-full animate-float pointer-events-none hidden sm:block"
          style={{
            left: `${6 + i * 13}%`,
            top: `${16 + ((i * 29) % 62)}%`,
            width: i % 3 === 0 ? "10px" : "6px",
            height: i % 3 === 0 ? "10px" : "6px",
            animationDelay: `${i * 0.9}s`,
            animationDuration: `${5 + (i % 4)}s`,
          }}
        />
      ))}
      <div
        aria-hidden
        className="absolute -bottom-32 -right-16 w-80 h-80 sm:w-[30rem] sm:h-[30rem] rounded-full bg-primary-glow/30 blur-3xl animate-blob"
        style={{ animationDelay: "5s" }}
      />

      <div className="container mx-auto px-4 relative z-10 pt-28 pb-24 sm:pb-28">
        <div className="max-w-4xl mx-auto text-center glass rounded-3xl !bg-white/10 px-5 py-10 sm:px-10 md:px-16 md:py-14 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 glass rounded-full !bg-white/15 px-4 py-1.5 text-sm text-white mb-7 animate-float-slow">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse-soft" />
            {profile.availability}
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4 tracking-tight text-shimmer">
            Hi, I'm {profile.name}
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-5 text-white">{profile.role}</h2>
          <p className="text-base sm:text-lg md:text-xl mb-9 text-white/90 max-w-2xl mx-auto leading-relaxed">
            {profile.tagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-9">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-white/90 hover:scale-105 transition-transform duration-300 font-semibold" onClick={() => go("projects")}>
              View my work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="!bg-white/10 backdrop-blur-md border-white/60 text-white hover:!bg-white/20 hover:scale-105 transition-transform duration-300 font-semibold"
              onClick={() => go("contact")}
            >
              Contact me
            </Button>
            <Button size="lg" variant="outline" asChild className="!bg-white/10 backdrop-blur-md border-white/60 text-white hover:!bg-white/20 hover:scale-105 transition-transform duration-300 font-semibold">
              <a href="./Peter-Resume.pdf" download="Peter-Resume.pdf">
                <Download className="w-5 h-5 mr-2" />
                Resume
              </a>
            </Button>
          </div>

          <div className="flex justify-center gap-4">
            {socials.map((s, i) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="glass !bg-white/15 w-12 h-12 rounded-full flex items-center justify-center text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300 animate-float"
                style={{ animationDelay: `${i * 0.6}s` }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => go("about")}
        className="hidden sm:flex [@media(max-height:620px)]:hidden absolute bottom-6 left-1/2 -translate-x-1/2 glass !bg-white/15 rounded-full p-2.5 text-white hover:scale-110 transition-all duration-300 animate-bounce"
        aria-label="Scroll to About section"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default Hero;
