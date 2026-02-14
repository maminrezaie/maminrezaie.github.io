import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import blogPosts from "@/data/blogPosts";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            Back to Blog
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <Badge variant="secondary">{post.category}</Badge>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Calendar size={14} />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>

          <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-8">
            {post.title}
          </h1>

          <article className="prose prose-lg max-w-none text-foreground/85 leading-relaxed space-y-6">
            {post.body.split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </article>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
