import Links from "@/components/links";
import { NAV_LINKS } from "./constants";
import { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  return (
    <div className="px-10">
      <header className="flex justify-between h-20 items-center">
        <div>Logo</div>
        <nav className="flex gap-5">
          <Links links={NAV_LINKS} />
        </nav>
        <button>Hire Me</button>
      </header>
      <div className="min-h-[95vh]">{children}</div>
      <footer className="text-center h-[calc(5rem-95vh)]">
        Copyright&copy;uisproject
      </footer>
    </div>
  );
}
