import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/data/projects";

const ProjectLinks = ({ project }: { project: Project }) => (
  <div className="flex flex-wrap items-center gap-3">
    {project.liveUrl && (
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-sm border border-border px-3 py-1.5 text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
      >
        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        Live site
      </a>
    )}
    {project.githubUrl && (
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-sm border border-border px-3 py-1.5 text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
      >
        <Github className="h-3.5 w-3.5" aria-hidden="true" />
        GitHub
      </a>
    )}
    {!project.liveUrl && !project.githubUrl && (
      <span className="font-mono text-xs text-muted-foreground">In development</span>
    )}
  </div>
);

export default ProjectLinks;
