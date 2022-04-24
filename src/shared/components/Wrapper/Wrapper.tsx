import { ReactNode } from "react";

type WrapperProps = {
  children: ReactNode;
};

export const Wrapper = ({ children }: WrapperProps) => {
  return <div className="d-flex flex-wrap px-3">{children}</div>;
};
