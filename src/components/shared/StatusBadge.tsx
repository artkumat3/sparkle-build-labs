import { ProjectStatus } from "@/data/projects";

const StatusBadge = ({ status }: { status: ProjectStatus }) =>
  status === "live" ? (
    <span className="inline-flex items-center gap-1.5 rounded-sm border border-accent/50 bg-accent/10 px-2.5 py-1 font-mono text-xs text-accent">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
      Live
    </span>
  ) : (
    <span className="inline-flex items-center gap-1.5 rounded-sm border border-primary/50 bg-primary/10 px-2.5 py-1 font-mono text-xs text-primary">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
      In development
    </span>
  );

export default StatusBadge;
