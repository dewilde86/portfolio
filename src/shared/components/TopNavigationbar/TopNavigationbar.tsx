import { ReactElement } from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";

const TopNavigationbar = (): ReactElement => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <div className="brand-logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-item nav-link" smooth to="/">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-item nav-link" smooth to="/#aboutme">
                Wie ben ik en wat doe ik?
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-item nav-link" smooth to="/#portfolio">
                Mijn werk
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-item nav-link" smooth to="/#service">
                Hoe ga ik te werk?
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-item nav-link" smooth to="/#contact">
                Neem contact op
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopNavigationbar;
