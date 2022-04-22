import { ReactElement } from "react";

type BackgroundProps = {
  imgUrl: string;
};

export const ParallaxImage = ({ imgUrl }: BackgroundProps): ReactElement => {
  return (
    <picture>
      <div className="parallax-container">
        <div
          className="parallax-image"
          style={{
            backgroundImage: `url(/images/${imgUrl}.png)`,
          }}
        />
      </div>
    </picture>
  );
};
