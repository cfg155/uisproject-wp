import Links from "@/components/links";
import { NAV_LINKS, NAV_LINKS_ID } from "./constants";
import { ReactNode } from "react";
import NavigationLayoutProvider from "@/contexts/NavigationLayoutProvider";
import HireMeButton from "@/components/hire-me-button";

export default function Template({ children }: { children: ReactNode }) {
  return (
    <NavigationLayoutProvider
      initialStatesProps={{ currentLink: NAV_LINKS_ID.ABOUT_ME }}
    >
      <header className="flex justify-between h-20 items-center fixed top-0 w-full sm:px-20 lg:px-40 bg-[#fff] z-50">
        <div>Logo</div>
        <nav className="flex gap-5 relative z-50">
          <Links links={NAV_LINKS} />
        </nav>
        <HireMeButton className="scale-75" />
      </header>
      <div className="px-5 md:px-20 lg:px-40 mt-20">
        <div className="min-h-[calc(100vh-5rem-5rem)]">{children}</div>
        <footer className="text-center h-20 grid place-items-center">
          Copyright&copy;{new Date().getFullYear()} uisproject
        </footer>
      </div>
    </NavigationLayoutProvider>
  );
}
