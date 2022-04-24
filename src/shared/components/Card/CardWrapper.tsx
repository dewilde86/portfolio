import React, { ReactNode } from "react";
import { Card } from "./Card";

type CardWrapperProps = {
  children: ReactNode;
  maxRowCount?: number;
  flexType?: "flex-row" | "flex-column";
  className?: string;
};

export const CardWrapper = ({
  children,
  maxRowCount = 6,
  flexType = "flex-row",
  className,
}: CardWrapperProps) => {
  let count = 1;

  React.Children.map(children, (child) => {
    if ((child as any).type === Card) count++;
  });

  const hiddens: ReactNode[] = [];
  if (count < maxRowCount && count > 0) {
    while (count < maxRowCount) {
      hiddens.push(
        <div className="hidden-flexbox" key={`hidden-${count}`}>
          <div className="card" />
        </div>
      );
      count++;
    }
  }

  return (
    <div
      className={[
        "d-flex flex-wrap px-lg-3 px-md-3 px-sm-3",
        className,
        flexType,
      ].join()}
    >
      {children}
      {hiddens}
    </div>
  );
};
