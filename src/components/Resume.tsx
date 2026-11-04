import { GraduationCap, Target, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { education, focus } from "@/data/profile";

const Resume = () => (
  <section id="resume" className="py-16 md:py-24 relative">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 md:mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resume</h2>
          <p className="text-base md:text-lg text-muted-foreground mb-7">Download my one-page resume or read the highlights below.</p>
          <Button size="lg" asChild className="bg-gradient-to-r from-primary to-accent hover:scale-105 animate-pulse-glow transition-transform duration-300 text-primary-foreground">
            <a href="./Peter-Resume.pdf" download="Peter-Resume.pdf">
              <Download className="w-5 h-5 mr-2" />
              Download Resume (PDF)
            </a>
          </Button>
        </div>
        <div className="grid gap-8 md:gap-10">
          <div className="reveal">
            <h3 className="text-xl md:text-2xl font-semibold mb-5 flex items-center">
              <GraduationCap className="w-6 h-6 mr-3 text-primary" />
              Education
            </h3>
            {education.map((e) => (
              <div key={e.degree} className="glass-card p-5 md:p-6 border-l-4 !border-l-primary hover:-translate-y-1">
                <h4 className="text-lg font-semibold">{e.degree}</h4>
                <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-muted-foreground font-medium mt-1">
                  <span>{e.school}</span>
                  <span className="inline-flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {e.location}
                  </span>
                </p>
                <p className="text-muted-foreground mt-3 leading-relaxed">{e.detail}</p>
              </div>
            ))}
          </div>

          <div className="reveal" style={{ "--reveal-delay": "0.12s" } as React.CSSProperties}>
            <h3 className="text-xl md:text-2xl font-semibold mb-5 flex items-center">
              <Target className="w-6 h-6 mr-3 text-accent" />
              What I'm working towards
            </h3>
            <ul className="glass-card p-5 md:p-6 border-l-4 !border-l-accent space-y-3">
              {focus.map((f) => (
                <li key={f} className="text-muted-foreground leading-relaxed">
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Resume;
