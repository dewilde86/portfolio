import { ReactNode, ReactElement } from "react";

type WrapperProps = {
  children: ReactNode;
};

export const Wrapper = ({ children }: WrapperProps): ReactElement => {
  return <div className="d-flex flex-wrap px-3">{children}</div>;
};
