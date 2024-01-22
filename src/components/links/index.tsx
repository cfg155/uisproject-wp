"use client";
import useNavigationLayout from "@/hooks/useNavigationLayout";
import clsx from "clsx";
import Link from "next/link";

export default function Links({
  links,
}: {
  links: {
    id?: string;
    href: string;
    label: string;
  }[];
}) {
  const { data } = useNavigationLayout();

  return links.map((link, index) => (
    <Link key={index} href={link.href}>
      <span className={clsx(data.currentLink === link.id ? "font-bold" : "")}>
        {link.label}
      </span>
    </Link>
  ));
}
