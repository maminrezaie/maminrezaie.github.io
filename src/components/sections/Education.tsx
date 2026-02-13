import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Ph.D. Candidate — English Language and Literature",
    school: "Science and Research Branch, Islamic Azad University (SRBIAU), Tehran",
    period: "2021 – Present",
    details: [],
  },
  {
    degree: "M.A. in English Language and Literature",
    school: "University of Guilan, Rasht, Iran",
    period: "Sep 2018 – Aug 2021",
    details: [
      "GPA: 17.38/20 (Excellent)",
      'Thesis: "Mystical elements in Rumi\'s & Emily Dickinson\'s poetry: a Lacanian approach"',
      "Thesis grade: 19.25/20 (Excellent)",
    ],
  },
  {
    degree: "B.A. in English Language and Literature",
    school: "Hakim Sabzevari University, Sabzevar, Iran",
    period: "Sep 2013 – Feb 2018",
    details: ["GPA: 14.45/20 (Good)"],
  },
];

const Education = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">
            Education
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-12">
            Academic Background
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-10">
            {education.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative md:pl-16"
              >
                {/* Dot */}
                <div className="hidden md:flex absolute left-0 top-1 w-12 h-12 rounded-full bg-accent items-center justify-center">
                  <GraduationCap size={20} className="text-primary" />
                </div>

                <div className="rounded-xl border border-border bg-card p-6">
                  <span className="text-xs font-medium text-primary tracking-wide uppercase">
                    {e.period}
                  </span>
                  <h3 className="text-lg font-serif font-semibold text-foreground mt-1">
                    {e.degree}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{e.school}</p>
                  {e.details.length > 0 && (
                    <ul className="mt-3 space-y-1">
                      {e.details.map((d, j) => (
                        <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-0.5">–</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
