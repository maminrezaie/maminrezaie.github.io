import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Rezaei Saffron (Persian)",
    url: "https://rezaei-saffron.ir/",
    description:
      "E-commerce storefront showcasing saffron products with a clean catalog experience and product details.",
    image: "/images/screenshot-rezaei-saffron.png",
  },
  {
    title: "Rezaei Saffron (English)",
    url: "https://rezaei-saffron.ir/en/",
    description:
      "English version of the Rezaei Saffron store, serving international customers with the same polished experience.",
    image: "/images/screenshot-rezaei-saffron-en.png",
  },
  {
    title: "Gandomak Shop",
    url: "https://gandomakshop.ir/",
    description:
      "Online shop with product browsing and a simple purchase flow—built to be fast and mobile friendly.",
    image: "/images/screenshot-gandomak.png",
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

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={i}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group block rounded-xl border border-border bg-card overflow-hidden hover:border-primary/40 hover:shadow-lg transition-all"
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={p.image}
                  alt={`${p.title} screenshot`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-base font-serif font-semibold text-foreground group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors mt-1 flex-shrink-0" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
                <span className="inline-block mt-3 text-xs text-primary font-medium tracking-wide uppercase">
                  Visit Store →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
