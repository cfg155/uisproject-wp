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
  return links.map((link, index) => (
    <Link key={index} href={link.href}>
      {link.label}
    </Link>
  ));
}
