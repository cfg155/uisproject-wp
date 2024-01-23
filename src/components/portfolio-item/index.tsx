import { ReactNode } from "react";

export default function PortfolioItem({ img }: { img?: ReactNode }) {
  return (
    img || <div className="w-full min-w-[400px] min-h-[400px] bg-[grey]" />
  );
}
