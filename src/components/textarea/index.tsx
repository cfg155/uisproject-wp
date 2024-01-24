import clsx from "clsx";
import { InputHTMLAttributes } from "react";
import "./style.css";

export default function Textarea({
  className,
  ...rest
}: InputHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      rows={5}
      className={clsx(
        "p-3 w-full rounded-md block border-solid border-dark-grey border-2",
        className
      )}
      {...rest}
    />
  );
}
