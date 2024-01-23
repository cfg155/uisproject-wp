import { ReactNode } from "react";

export default function ServicesItem({
  img,
  title,
  desc,
}: {
  img?: ReactNode;
  title?: string;
  desc?: string;
}) {
  return (
    <div className="w-full text-center">
      {img || <div className="w-full h-[400px] bg-[grey]" />}
      <h4 className="font-medium py-5">{title}</h4>
      <p>{desc}</p>
    </div>
  );
}
