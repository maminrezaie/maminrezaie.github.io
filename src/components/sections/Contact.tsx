import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, FileText } from "lucide-react";
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
      const res = await fetch("https://formspree.io/f/xpwzgkjd", {
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
              href="https://maminrezaie.github.io/assets/docs/Mohammad-Amin-Rezaie-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground font-medium hover:bg-accent transition-colors mt-4"
            >
              <FileText size={16} />
              Download CV
            </a>
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
