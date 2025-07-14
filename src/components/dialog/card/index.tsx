import { ComponentProps } from 'react';

interface Props extends ComponentProps<'div'> {
  className?: string;
}
export function Card({ className, children, ...rest }: Props) {
  return (
    <div
      className={`p-5 bg-white min-w-[25vw] min-h-[25vh] rounded-lg ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
