import { ReactElement } from "react";
import classes from "./My404Page.module.scss";
import { Link } from "react-router-dom";

export const My404Page = (): ReactElement => {
  return (
    <main className={classes.error_page}>
      <Link to="/">
        <div className={`brand-logo ` + classes.brand_logo}></div>
      </Link>
      <div className={classes.stars}>
        <div className={`flex ` + classes.flex}>
          <img
            className={classes.image_404}
            src="/images/404-page/404.svg"
            alt="404 error"
            width="300px"
          />
          <p className={classes.text}>Lost in space</p>
          <Link to="/" className="btn btn-primary-color">
            Keer terug naar rdewilde.nl
          </Link>
        </div>
        <div className={classes.object}>
          <img
            className={classes.object_rocket}
            src="/images/404-page/rocket.svg"
            alt="Raket"
            width="40px"
          />
          <div className={classes.earth_moon}>
            <img
              className={classes.object_earth}
              src="/images/404-page/earth.svg"
              alt="aarde"
              width="100px"
            />
            <img
              className={classes.object_moon}
              src="/images/404-page/moon.svg"
              alt="maan"
              width="80px"
            />
          </div>
          <div className={classes.box_astronaut}>
            <img
              className={classes.object_astronaut}
              src="/images/404-page/astronaut.svg"
              alt="astronaut"
              width="140px"
            />
          </div>
        </div>
        <div className={classes.glowing_stars}>
          <div className={classes.star}></div>
          <div className={classes.star}></div>
          <div className={classes.star}></div>
          <div className={classes.star}></div>
          <div className={classes.star}></div>
        </div>
      </div>
    </main>
  );
};
