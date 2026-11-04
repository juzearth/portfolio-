import { Code, Smartphone, Database, Server, Wallet, GitBranch } from "lucide-react";
import { skills } from "@/data/profile";

const icons = {
  code: Code,
  server: Server,
  phone: Smartphone,
  database: Database,
  wallet: Wallet,
  git: GitBranch,
};

const Skills = () => (
  <section id="skills" className="py-16 md:py-24 relative">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16 reveal">Skills &amp; Tools</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {skills.map((skill, index) => {
            const Icon = icons[skill.icon];
            return (
              <div
                key={skill.category}
                className="glass-card group p-5 pb-7 md:p-6 md:pb-8 reveal"
                style={{ "--reveal-delay": `${index * 0.08}s` } as React.CSSProperties}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:shadow-primary/30">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold ml-4">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-primary/10 text-foreground font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* thin bottom progress bar, animated on scroll */}
                <div
                  role="progressbar"
                  aria-label={`${skill.category} proficiency`}
                  aria-valuenow={skill.level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  className="absolute inset-x-0 bottom-0 h-1.5 bg-primary/10 z-[2]"
                >
                  <div
                    className="skill-fill h-full rounded-r-full bg-gradient-to-r from-primary to-accent"
                    style={{ "--level": `${skill.level}%` } as React.CSSProperties}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
