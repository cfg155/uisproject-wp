import { ReactNode } from "react";

export default function ContactUsItem({
  icon,
  label,
}: {
  icon?: ReactNode;
  label?: string;
}) {
  return (
    <div className="flex py-2">
      {icon || <div className="min-w-[25px] h-[25px]  bg-[#404040]" />}
      <span className="pl-5">{label}</span>
    </div>
  );
}
