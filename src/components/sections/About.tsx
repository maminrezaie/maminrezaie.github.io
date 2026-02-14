import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const languages = [
  { name: "English", level: "Fluent (IELTS Band 7)" },
  { name: "Persian", level: "Native" },
  { name: "Arabic", level: "Reading knowledge" },
  { name: "French", level: "Basic reading" },
];

const skills = [
  "Independent academic research & writing",
  "Critical thinking and speculating",
  "English ↔ Persian translation",
  "English & Persian essay writing",
  "Web design (WordPress / WooCommerce)",
  "Basic computer, web, and social media skills",
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-card/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">
            About
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8">
            Profile
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Bio */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm an M.A. graduate in English Language and Literature with
              experience in teaching, academic writing, and English↔Persian
              translation. I enjoy close reading, theory-informed
              interpretation, and research-based writing—especially where
              literature, philosophy, and cultural studies overlap.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                Thesis focus: mysticism and poetic subjectivity in Rumi & Emily
                Dickinson (Lacanian approach).
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                Translation work includes philosophy and humanities texts (e.g.,
                parts of the Stanford Encyclopedia of Philosophy).
              </li>
            </ul>

            {/* Skills */}
            <div className="mt-8">
              <h3 className="text-lg font-serif font-semibold text-foreground mb-4">
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-full text-sm bg-accent text-accent-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-serif font-semibold text-foreground mb-4">
              Languages
            </h3>
            <div className="space-y-4">
              {languages.map((l) => (
                <div key={l.name} className="flex justify-between items-baseline border-b border-border pb-3">
                  <span className="font-medium text-foreground">{l.name}</span>
                  <span className="text-sm text-muted-foreground">{l.level}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Contact
              </h3>
              <p className="text-sm text-muted-foreground">
                <a href="mailto:m.amin.rezai@gmail.com" className="text-primary hover:underline">
                  m.amin.rezai@gmail.com
                </a>
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                <a href="tel:+989150616788" className="hover:text-primary transition-colors">
                  +98 915 061 6788
                </a>
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Gonābād, Razavi Khorasan, Iran
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
