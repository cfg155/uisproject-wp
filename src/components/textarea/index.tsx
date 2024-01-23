import { InputHTMLAttributes } from "react";

export default function Textarea({
  ...rest
}: InputHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...rest} />;
}
