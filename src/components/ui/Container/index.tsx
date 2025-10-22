import { PropsWithChildren } from "react";

type ContainerProps = PropsWithChildren & {
  className?: string;
};
export const Container = ({ children, className }: ContainerProps) => {
  return <div className={`mx-auto bg-white ${className}`}>{children}</div>;
};
