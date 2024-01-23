import clsx from "clsx";
import { InputHTMLAttributes } from "react";

export default function Input({
  className,
  ...rest
}: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={clsx("p-3 w-96 rounded-md", className)} {...rest} />;
}
