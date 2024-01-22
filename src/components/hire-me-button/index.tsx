import clsx from "clsx";

export default function HireMeButton({ className }: { className?: string }) {
  return (
    <button
      className={clsx("bg-orange text-white py-4 px-10 rounded-xl", className)}
    >
      Hire Me
    </button>
  );
}
