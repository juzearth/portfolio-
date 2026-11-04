import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  useScrollReveal();
  const location = useLocation();

  // Arriving from the 404 page's menu: jump to the requested section
  useEffect(() => {
    const id = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (!id) return;
    const t = window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 250);
    return () => window.clearTimeout(t);
  }, [location.state]);

  return (
    <div className="min-h-screen relative">
      {/* Ambient aurora blobs drifting behind everything */}
      <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-32 w-[36rem] h-[36rem] rounded-full bg-primary/15 blur-3xl animate-blob" />
        <div
          className="absolute top-1/3 -right-40 w-[32rem] h-[32rem] rounded-full bg-accent/15 blur-3xl animate-blob"
          style={{ animationDelay: "6s" }}
        />
        <div
          className="absolute bottom-0 left-1/3 w-[28rem] h-[28rem] rounded-full bg-primary-glow/10 blur-3xl animate-blob"
          style={{ animationDelay: "12s" }}
        />
      </div>

      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
