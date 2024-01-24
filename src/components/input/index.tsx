import clsx from "clsx";
import { InputHTMLAttributes } from "react";

export default function Input({
  className,
  ...rest
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={clsx(
        "p-3 w-full rounded-md block border-solid border-dark-grey border-2",
        className
      )}
      {...rest}
    />
  );
}
