import { ComponentProps } from "react";

interface Props extends ComponentProps<'hr'> {}
export function Divider({ className,...rest }:Props) {
  return <hr className={`w-full border-t-2 border-[#7592e6] ${className}`} {...rest} />;
}
