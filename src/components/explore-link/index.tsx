import Link from "next/link";
import { ReactNode } from "react";

export default function ExploreLink({
  href,
  children,
}: {
  href?: string;
  children?: ReactNode;
}) {
  return (
    <div className="text-end">
      <Link
        className="text-primary inline-block font-medium my-3"
        href={href || "/"}
      >
        {children}
      </Link>
    </div>
  );
}
