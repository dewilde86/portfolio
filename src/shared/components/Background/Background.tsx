import { ReactNode, ReactElement } from "react";

type BackgroundProps = {
  children?: ReactNode;
  imgUrl: string;
};

export const Background = ({
  children,
  imgUrl,
}: BackgroundProps): ReactElement => {
  return (
    <picture>
      <div className="background-container flex">
        <div
          className="background-image"
          style={{
            backgroundImage: `url(/images/${imgUrl}.png)`,
          }}
        />
        {children}
      </div>
    </picture>
  );
};
