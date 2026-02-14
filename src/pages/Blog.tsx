import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import blogPosts from "@/data/blogPosts";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Blog
          </h1>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            Thoughts on translation, education, language, and culture.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="group block rounded-xl border border-border bg-card p-6 md:p-8 transition-all hover:shadow-md hover:border-primary/30"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {post.category}
                  </Badge>
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Calendar size={14} />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Read more <ArrowRight size={14} />
                </span>
              </Link>
            </motion.article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
