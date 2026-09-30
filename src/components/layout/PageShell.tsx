import { ReactNode } from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

const PageShell = ({ children }: { children: ReactNode }) => (
  <div className="relative min-h-screen grain">
    <SiteHeader />
    <main>{children}</main>
    <SiteFooter />
  </div>
);

export default PageShell;
