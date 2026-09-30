import { MapPin } from "lucide-react";

const BuiltInMauBadge = () => (
  <span className="inline-flex items-center gap-1.5 rounded-sm border border-accent/50 bg-accent/10 px-2.5 py-1 font-mono text-xs text-accent">
    <MapPin className="h-3 w-3" aria-hidden="true" />
    Built in Mau
  </span>
);

export default BuiltInMauBadge;
