import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";
import Logo from "@/components/Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Me', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Resume', id: 'resume' },
    { name: 'Contact', id: 'contact' }
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative">
      <div className="hairline-gradient" aria-hidden />
      <div className="container mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4"><Logo showTagline markClassName="text-[#0F5194]" /></div>
            <p className="text-muted-foreground mb-4">
              {profile.role} from {profile.location}. {profile.availability}.
            </p>
            <div className="flex space-x-3">
              <a
                href={profile.github}
                className="glass w-10 h-10 rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={profile.linkedin}
                className="glass w-10 h-10 rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="glass w-10 h-10 rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                aria-label="Email Contact"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-muted-foreground hover:text-primary hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <p className="text-muted-foreground mb-2">{profile.location}</p>
            <p className="text-muted-foreground break-all">{profile.email}</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground flex items-center justify-center gap-1 text-sm">
            © {currentYear} {profile.fullName}. Built with React &amp; Tailwind CSS
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="glass w-10 h-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 hover:-translate-y-1 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
