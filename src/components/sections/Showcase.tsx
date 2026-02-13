import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Rezaie Saffron",
    url: "https://rezaiesaffron.ir/",
    description:
      "E-commerce storefront showcasing saffron products with a clean catalog experience and product details.",
  },
  {
    title: "Gandomak Shop",
    url: "https://gandomakshop.ir/",
    description:
      "Online shop with product browsing and a simple purchase flow—built to be fast and mobile friendly.",
  },
];

const Showcase = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="showcase" className="section-padding bg-card/50" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">
            Showcase
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-12">
            Web Stores I've Built
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={i}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group block rounded-xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-serif font-semibold text-foreground group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors mt-1" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {p.description}
              </p>
              <span className="inline-block mt-4 text-xs text-primary font-medium tracking-wide uppercase">
                Visit Store →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
