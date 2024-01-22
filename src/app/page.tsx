"use client";

import NavigationProvider from "@/contexts/NavigationProvider";
import { InView } from "react-intersection-observer";
import { NAV_LINKS_ID } from "./constants";
export default function Home() {
  return (
    <main>
      <NavigationProvider>
        <section id={NAV_LINKS_ID.ABOUT_ME} className="bg-[red] h-[100vh]">
          section1
        </section>
        <section id={NAV_LINKS_ID.SERVICES} className="bg-[green] h-[100vh]">
          section2
        </section>
        <section id={NAV_LINKS_ID.PORTFOLIO} className="bg-[blue] h-[100vh]">
          section3
        </section>
        <section id={NAV_LINKS_ID.TESTIMONIALS} className="bg-[blue] h-[100vh]">
          section3
        </section>
        <section id={NAV_LINKS_ID.CONTACT_US} className="bg-[blue] h-[100vh]">
          section3
        </section>
      </NavigationProvider>
    </main>
  );
}
