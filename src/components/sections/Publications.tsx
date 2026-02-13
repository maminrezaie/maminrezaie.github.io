import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";

const journals = [
  {
    title:
      '"The Other jouissance" and "Desire" in Emily Dickinson\'s "I Taste a Liquor Never Brewed": A Lacanian Approach',
    venue: "Critical Literary Studies, Vol. 4, No. 1 (Autumn/Winter 2021–2022)",
    year: "2022",
    doi: "10.34785/J014.2022.518",
  },
  {
    title: "Rumi and Lacan: A Post-colonial Dialogue: A Lacanian Approach",
    venue:
      "International Journal of Persian Literature (American University of Beirut)",
    year: "Forthcoming",
    doi: null,
  },
];

const conferences = [
  '"Rumi & psychotherapy based on MBSR" — First national conference on literary research focused on comparative studies (Winter 2018) [Persian]',
  '"Rumi & the Modern subject" — Guilan University Research Week poster (Autumn 2019) [Persian]',
  '"A New historicist reading of George Eliot\'s Silas Marner" — Guilan University Research Week submission (Winter 2020) [English]',
  '"Shakespeare\'s Hamlet" — Hakim Sabzevari University poster (Winter 2017) [English]',
  '"TEFL and Technology" — Undergraduate partial requirement (Winter 2018) [English]',
];

const certifications = [
  "English Language Teaching — Teacher Training Course (TTC) — 20-hour course, Kalam-e-Shokouh Language Learning Institute, Gonābād — Aug 2017",
  "Workshops (University of Mazandaran Summer School) — Polysystem Theory & Cultural Studies (8h), Decolonizing Literary Criticism (4h), Modernism→Postmodernism (4h), Joyce time/space (8h), Narratology (8h) — Aug 2019",
  "Jouissance: Definition, functions, & application — 20-hour online workshop, Armaghan-e Roshd institute, Tehran — Winter–Spring 2020",
];

const Expandable = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-accent/50 transition-colors"
      >
        <span className="font-serif font-semibold text-foreground">{title}</span>
        <ChevronDown
          size={18}
          className={`text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <div className="px-6 pb-5">{children}</div>}
    </div>
  );
};

const Publications = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="publications" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">
            Publications
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-12">
            Academic Work
          </h2>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Journal articles */}
          <Expandable title="Journal Articles">
            <div className="space-y-5">
              {journals.map((j, i) => (
                <div key={i}>
                  <h4 className="font-medium text-foreground">{j.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {j.venue} • {j.year}
                  </p>
                  {j.doi && (
                    <a
                      href={`https://doi.org/${j.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-1"
                    >
                      DOI: {j.doi} <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </Expandable>

          {/* Conference essays */}
          <Expandable title="Conference Essays & Posters">
            <ul className="space-y-2">
              {conferences.map((c, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  {c}
                </li>
              ))}
            </ul>
          </Expandable>

          {/* Certifications */}
          <Expandable title="Certifications & Workshops">
            <ul className="space-y-2">
              {certifications.map((c, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  {c}
                </li>
              ))}
            </ul>
          </Expandable>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;
