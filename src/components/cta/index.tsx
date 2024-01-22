import clsx from "clsx";

export default function Cta({ className }: { className?: string }) {
  return (
    <div>
      <button
        className={clsx(
          "bg-orange text-white py-4 px-10 rounded-xl",
          className
        )}
      >
        Hire Me
      </button>
    </div>
  );
}
