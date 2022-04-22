import { ReactElement } from "react";
import { Link } from "react-router-dom";

export const Card = (props: {
  className?: string;
  imageSrc: string;
  imageAlt: string;
  height?: number;
  link: string;
  customerName: string;
}): ReactElement => {
  const {
    className = "all-cards-same-size",
    imageSrc,
    imageAlt,
    height,
    link,
    customerName,
  } = props;
  return (
    <div className={"p-1 " + className}>
      <div className="card aspect-ratio aspect-ratio-1/1" data-aos="zoom-in">
        <figure className="aspect-ratio-item">
          <img
            src={`/images/portfolio/` + imageSrc + `.png`}
            alt={imageAlt}
            style={{ height: height + `px` }}
          />
          <figcaption>
            <h4>{customerName}</h4>
            <Link
              to={`/Portfolio/` + link}
              className="btn
                btn-reverse"
              onClick={(): void => {
                window.scrollTo(0, 0);
              }}
            >
              Bekijk case
            </Link>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};
