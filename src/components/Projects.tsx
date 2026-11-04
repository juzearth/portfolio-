import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/profile";

type Project = (typeof projects)[number];

const Links = ({ p }: { p: Project }) =>
  p.githubUrl || p.liveUrl ? (
    <>
      {p.githubUrl && (
        <Button variant="outline" size="sm" asChild className="hover:scale-105 transition-transform duration-300">
          <a href={p.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4 mr-2" />
            Code
          </a>
        </Button>
      )}
      {p.liveUrl && (
        <Button size="sm" asChild className="hover:scale-105 transition-transform duration-300">
          <a href={p.liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4 mr-2" />
            Live Demo
          </a>
        </Button>
      )}
    </>
  ) : null;

const Tags = ({ items }: { items: readonly string[] }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((t) => (
      <span key={t} className="px-2.5 py-1 text-xs rounded-full bg-primary/10 text-foreground font-medium">
        {t}
      </span>
    ))}
  </div>
);

const Projects = () => {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-16 md:py-24 section-bg relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16 reveal">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
            {featured.map((p, index) => (
              <Card
                key={p.title}
                className="glass-card !bg-transparent !border-transparent !shadow-none group reveal flex flex-col"
                style={{ "--reveal-delay": `${index * 0.15}s` } as React.CSSProperties}
              >
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={p.image}
                    alt={`${p.title} preview`}
                    loading="lazy"
                    className="w-full aspect-[16/10] object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute top-3 left-3 glass !bg-white/70 text-xs font-semibold text-foreground px-3 py-1 rounded-full">
                    {p.kind}
                  </span>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">{p.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">{p.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <Tags items={p.technologies} />
                </CardContent>
                {(p.githubUrl || p.liveUrl) && (
                  <CardFooter className="flex flex-wrap gap-3">
                    <Links p={p} />
                  </CardFooter>
                )}
              </Card>
            ))}
          </div>

          <div className="grid gap-6 md:gap-8">
            {others.map((p, index) => (
              <Card
                key={p.title}
                className="glass-card !bg-transparent !border-transparent !shadow-none group reveal"
                style={{ "--reveal-delay": `${(index + 2) * 0.12}s` } as React.CSSProperties}
              >
                <div className="md:flex">
                  <div className="md:w-1/3 relative overflow-hidden">
                    <img
                      src={p.image}
                      alt={`${p.title} preview`}
                      loading="lazy"
                      className="w-full h-44 sm:h-52 md:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <span className="absolute top-3 left-3 glass !bg-white/70 text-xs font-semibold text-foreground px-3 py-1 rounded-full">
                      {p.kind}
                    </span>
                  </div>
                  <div className="md:w-2/3 p-5 md:p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-xl font-semibold">{p.title}</CardTitle>
                      <CardDescription className="text-muted-foreground leading-relaxed">{p.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 mb-4">
                      <Tags items={p.technologies} />
                    </CardContent>
                    {(p.githubUrl || p.liveUrl) && (
                      <CardFooter className="p-0 flex flex-wrap gap-3">
                        <Links p={p} />
                      </CardFooter>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
