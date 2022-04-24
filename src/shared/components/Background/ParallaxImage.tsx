type BackgroundProps = {
  imgUrl: string;
};

export const ParallaxImage = ({ imgUrl }: BackgroundProps) => {
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
