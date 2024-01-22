import { ComponentProps } from "react";
import Links from "@/components/links";

export enum NAV_LINKS_ID {
  ABOUT_ME = "about-me",
  SERVICES = "services",
  PORTFOLIO = "portfolio",
  TESTIMONIALS = "testimonial",
  CONTACT_US = "contact-us",
}

export const NAV_LINKS: ComponentProps<typeof Links>["links"] = [
  { label: "ABOUT ME", id: NAV_LINKS_ID.ABOUT_ME, href: "/" },
  { label: "SERVICES", id: NAV_LINKS_ID.SERVICES, href: "/" },
  { label: "PORTFOLIO", id: NAV_LINKS_ID.PORTFOLIO, href: "/" },
  { label: "TESTIMONIALS", id: NAV_LINKS_ID.TESTIMONIALS, href: "/" },
  { label: "CONTACT ME", id: NAV_LINKS_ID.CONTACT_US, href: "/" },
];
