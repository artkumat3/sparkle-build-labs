import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Project {
  id: string;
  title: string;
  description: string;
  image_url: string | null;
  dark_image_url: string | null;
  category: string;
  tags: string[];
  created_at: string;
}

const ProjectDetail = () => {
  const { id } = useParams();
  const { resolvedTheme } = useTheme();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await supabase
        .from("projects")
        .select("*")
        .eq("id", id)
        .maybeSingle();
      setProject(data as unknown as Project);
      setLoading(false);
    };
    if (id) fetch();
  }, [id]);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} — Aryan Gupta`;
    }
  }, [project]);

  const imageUrl =
    resolvedTheme === "dark" && project?.dark_image_url
      ? project.dark_image_url
      : project?.image_url;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 lg:px-12 pt-32 pb-24 max-w-4xl">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" /> Back to projects
        </Link>

        {loading ? (
          <div className="space-y-6 animate-pulse">
            <div className="h-10 w-2/3 bg-secondary rounded" />
            <div className="h-4 w-1/3 bg-secondary rounded" />
            <div className="h-80 w-full bg-secondary rounded-2xl" />
          </div>
        ) : !project ? (
          <div className="text-center py-20">
            <h1 className="text-2xl font-semibold text-foreground mb-3">
              Project not found
            </h1>
            <p className="text-muted-foreground mb-6">
              The project you're looking for doesn't exist or has been removed.
            </p>
            <Link
              to="/#projects"
              className="text-primary hover:underline"
            >
              Browse all projects
            </Link>
          </div>
        ) : (
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground mb-6">
              <span className="px-3 py-1 rounded-full border border-border">
                {project.category}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(project.created_at).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight mb-6 leading-tight">
              {project.title}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
              {project.description.split("\n")[0]}
            </p>

            {imageUrl && (
              <div className="rounded-2xl overflow-hidden border border-border mb-12 bg-secondary">
                <img
                  src={imageUrl}
                  alt={project.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            <div className="prose prose-invert max-w-none">
              {project.description.split("\n").map((para, i) => (
                <p
                  key={i}
                  className="text-base md:text-lg text-foreground/80 leading-relaxed mb-6"
                >
                  {para}
                </p>
              ))}
            </div>

            {project.tags?.length > 0 && (
              <div className="mt-16 pt-10 border-t border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Tag className="w-4 h-4" /> Tags
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.article>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
