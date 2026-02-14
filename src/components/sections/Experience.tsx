import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experience = [
  {
    role: "Freelance Web Designer",
    org: "Independent",
    period: "2020 – Present",
    bullets: [
      "Design and build e-commerce websites using WordPress and WooCommerce.",
      "Deliver responsive, user-friendly storefronts for small businesses.",
    ],
  },
  {
    role: "English Teacher (Pre-Intermediate & Intermediate)",
    org: "Shokouh Institute of Language Learning, Gonābād, Iran",
    period: "2017 – 2018",
    bullets: [
      "Taught pre-intermediate and intermediate English classes.",
      "Prepared lesson plans and classroom activities aligned with student level and goals.",
    ],
  },
  {
    role: "Freelance Writer (English)",
    org: "Various weblogs",
    period: "2015 – 2016",
    bullets: [
      "Wrote articles for blogs across different topics in English.",
    ],
  },
  {
    role: "Freelance Translator (English → Persian)",
    org: "Independent",
    period: "2014 – Present",
    bullets: [
      "Translated a wide range of topics, including parts of the Stanford Encyclopedia of Philosophy.",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-card/50" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">
            Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-12">
            Professional Background
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experience.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex gap-5"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent flex items-center justify-center mt-1">
                <Briefcase size={18} className="text-primary" />
              </div>
              <div className="flex-1">
                <span className="text-xs font-medium text-primary tracking-wide uppercase">
                  {e.period}
                </span>
                <h3 className="text-lg font-serif font-semibold text-foreground mt-1">
                  {e.role}
                </h3>
                <p className="text-sm text-muted-foreground">{e.org}</p>
                <ul className="mt-2 space-y-1">
                  {e.bullets.map((b, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-0.5">–</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
