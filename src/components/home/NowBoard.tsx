import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { nowBoard } from "@/data/site";

const NowBoard = () => (
  <div className="editorial-card flex flex-col p-6">
    <p className="label-mono mb-4">Now</p>
    <dl className="flex-1 space-y-4 text-sm">
      <div>
        <dt className="font-mono text-xs uppercase tracking-wider text-accent">Building</dt>
        <dd className="mt-1 text-foreground">{nowBoard.building}</dd>
      </div>
      <div>
        <dt className="font-mono text-xs uppercase tracking-wider text-accent">Learning</dt>
        <dd className="mt-1 text-foreground">{nowBoard.learning}</dd>
      </div>
      <div>
        <dt className="font-mono text-xs uppercase tracking-wider text-accent">Reading</dt>
        <dd className="mt-1 text-foreground">{nowBoard.reading}</dd>
      </div>
    </dl>
    <Link
      to="/now"
      className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
    >
      Full now page <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
    </Link>
  </div>
);

export default NowBoard;
