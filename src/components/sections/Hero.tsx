import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center section-padding pt-28"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            English Graduate • Scholar • Translator • Web Designer
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight text-foreground mb-6">
            Mohammad Amin
            <br />
            <span className="text-primary">Rezaie</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed mb-8">
            I work at the intersection of literary studies, critical theory, and
            translation—supported by a strong background in academic research
            and English language teaching.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="#showcase"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-accent transition-colors"
            >
              See My Work
            </a>
          </div>
        </motion.div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 group cursor-pointer">
            <div className="absolute inset-0 rounded-2xl bg-primary/20 rotate-6" />
            <img
              src="/images/portrait-1.jpg"
              alt="Mohammad Amin Rezaie"
              className="relative rounded-2xl object-cover w-full h-full shadow-xl"
            />
            <img
              src="/images/portrait-4.jpg"
              alt="Mohammad Amin Rezaie"
              className="absolute inset-0 rounded-2xl object-cover w-full h-full shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="text-muted-foreground" size={28} />
      </motion.div>
    </section>
  );
};

export default Hero;
