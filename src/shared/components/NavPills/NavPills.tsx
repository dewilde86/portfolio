import { ReactElement } from "react";
import { HashLink as Link } from "react-router-hash-link";
import Scrollspy from "react-scrollspy";

export const NavPills = (): ReactElement => {
  return (
    <div className="rightNav">
      <Scrollspy
        items={["header", "aboutme", "portfolio", "service", "contact"]}
        currentClassName="active"
        className="nav-pills"
      >
        <Link smooth to="#header">
          <span />
        </Link>
        <Link smooth to="#aboutme">
          <span />
        </Link>
        <Link smooth to="#portfolio">
          <span />
        </Link>
        <Link smooth to="#service">
          <span />
        </Link>
        <Link smooth to="#contact">
          <span />
        </Link>
      </Scrollspy>
    </div>
  );
};
