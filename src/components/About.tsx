import profilePhoto from "@/assets/profile-photo.jpg";
import { profile, about } from "@/data/profile";

const About = () => (
  <section id="about" className="py-16 md:py-24 section-bg relative">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16 reveal">About Me</h2>
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div className="reveal">
            <div className="relative max-w-xs sm:max-w-sm md:max-w-md mx-auto animate-float-slow">
              <div aria-hidden className="glow-ring absolute -inset-3 rounded-[2rem] animate-spin-slow" />
              <div className="glass rounded-3xl p-3 relative">
                <img src={profilePhoto} alt={`${profile.name}, ${profile.role}`} className="rounded-2xl w-full aspect-square object-cover" />
                <div className="absolute inset-3 rounded-2xl bg-gradient-to-t from-primary/25 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="reveal space-y-5" style={{ "--reveal-delay": "0.15s" } as React.CSSProperties}>
            <h3 className="text-2xl md:text-3xl font-semibold text-primary leading-snug">{about.heading}</h3>
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {p}
              </p>
            ))}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {about.facts.map((f) => (
                <div key={f.label} className="glass-card p-4 sm:p-5 text-center hover:-translate-y-1">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{f.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{f.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
