import { ReactNode } from "react";

export default function AboutMeItem({
  icon,
  title,
  subtitle,
}: {
  icon?: ReactNode;
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="flex min-w-[200px]">
      {icon || <div className="w-[50px] h-[50px] bg-[grey]" />}
      <div className="pl-5">
        <span className="block font-bold text-blue">{title}</span>
        <span className="text-sm font-medium">{subtitle}</span>
      </div>
    </div>
  );
}
