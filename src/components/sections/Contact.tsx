import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, FileText, Instagram, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xlgwbdgo", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        toast({ title: "Message sent!", description: "Thank you, I'll get back to you soon." });
        form.reset();
      } else {
        throw new Error("Failed");
      }
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try emailing me directly.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground mb-12 max-w-lg">
            For teaching opportunities, translation work, academic
            collaboration, or editorial projects—feel free to reach out.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <a
              href="mailto:m.amin.rezai@gmail.com"
              className="flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <Mail size={18} className="text-primary" />
              </div>
              <span className="text-muted-foreground group-hover:text-primary transition-colors">
                m.amin.rezai@gmail.com
              </span>
            </a>

            <a href="tel:+989150616788" className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <Phone size={18} className="text-primary" />
              </div>
              <span className="text-muted-foreground group-hover:text-primary transition-colors">
                +98 915 061 6788
              </span>
            </a>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <MapPin size={18} className="text-primary" />
              </div>
              <span className="text-muted-foreground">
                Gonābād, Razavi Khorasan, Iran
              </span>
            </div>

            <a
              href="/docs/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground font-medium hover:bg-accent transition-colors mt-4"
            >
              <FileText size={16} />
              Download CV
            </a>

            {/* Social Media */}
            <div className="flex flex-wrap gap-3 mt-6">
              <a href="https://t.me/maminre" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-muted-foreground hover:text-primary transition-colors" title="Telegram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              </a>
              <a href="https://instagram.com/maminrezai" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-muted-foreground hover:text-primary transition-colors" title="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://x.com/AminReformist" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-muted-foreground hover:text-primary transition-colors" title="X / Twitter">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://wa.me/qr/ERDSPOB6INRHP1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-muted-foreground hover:text-primary transition-colors" title="WhatsApp">
                <MessageCircle size={18} />
              </a>
              <a href="https://eitaa.com/maminrezai" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-muted-foreground hover:text-primary transition-colors" title="Eita">
                <span className="text-[10px] font-bold leading-none">Eita</span>
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <div>
              <Input
                name="name"
                placeholder="Your name"
                required
                maxLength={100}
                className="bg-card"
              />
            </div>
            <div>
              <Input
                name="email"
                type="email"
                placeholder="Your email"
                required
                maxLength={255}
                className="bg-card"
              />
            </div>
            <div>
              <Textarea
                name="message"
                placeholder="Your message"
                required
                maxLength={2000}
                rows={5}
                className="bg-card"
              />
            </div>
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "Sending…" : "Send Message"}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
