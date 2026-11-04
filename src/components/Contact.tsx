import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Github, Linkedin, Send } from "lucide-react";
import { profile } from "@/data/profile";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent(`Portfolio message from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\n— ${formData.name} (${formData.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;

    toast({
      title: "Opening your email app",
      description: "Press send in your email app to deliver the message.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    { icon: <Mail className="w-5 h-5" />, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    ...(profile.phone
      ? [{ icon: <Phone className="w-5 h-5" />, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` }]
      : []),
    { icon: <MapPin className="w-5 h-5" />, label: "Location", value: profile.location, href: null as string | null },
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, label: "GitHub", href: profile.github },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: profile.linkedin },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 section-bg relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Need a web system, an Android app or M-Pesa integration? I'm open to freelance and remote work. Send me a message.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="reveal">
              <Card className="glass-card !bg-transparent !border-transparent !shadow-none h-full">
                <CardHeader>
                  <CardTitle>Send me a message</CardTitle>
                  <CardDescription>
                    This opens your email app with the message ready to send.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        className="bg-background border-border focus:border-primary/60 transition-colors"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="bg-background border-border focus:border-primary/60 transition-colors"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project or just say hello..."
                        rows={5}
                        className="bg-background border-border focus:border-primary/60 transition-colors"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:scale-[1.02] transition-transform duration-300"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="reveal space-y-8" style={{ '--reveal-delay': '0.15s' } as React.CSSProperties}>
              <div>
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="glass rounded-xl px-4 py-3 flex items-center space-x-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-medium">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-muted-foreground hover:text-primary transition-colors break-all"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6">Find me online</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass w-12 h-12 rounded-xl flex items-center justify-center bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6 bg-gradient-to-r from-primary/10 to-accent/10">
                <h4 className="font-semibold mb-2">Have something to build?</h4>
                <p className="text-muted-foreground">
                  Billing systems, student platforms, mobile apps or payment integrations: tell me what you need and I'll tell you honestly what is realistic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
