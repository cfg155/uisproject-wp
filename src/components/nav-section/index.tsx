"use client";
import useNavigationLayout from "@/hooks/useNavigationLayout";
import { ReactNode } from "react";
import { InView } from "react-intersection-observer";

export default function NavSection({
  children,
  className,
  id,
  ...rest
}: {
  children?: ReactNode;
  className?: string;
  id?: string;
}) {
  const { setActiveLink } = useNavigationLayout();
  return (
    <InView
      as="section"
      id={id}
      className={className}
      threshold={0.9}
      onChange={(inView, entry) => {
        if (inView) {
          setActiveLink(entry.target.id);
        }
      }}
      {...rest}
    >
      {children}
    </InView>
  );
}
