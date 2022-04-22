import { ReactElement } from "react";
import { Link } from "react-router-dom";

const year = new Date().getFullYear();

export const Footer = (props: { borderTop?: boolean }): ReactElement => {
  const { borderTop } = props;
  return (
    <footer>
      <div className="container">
        <div
          className={[
            "d-flex flex-row flex-wrap",
            borderTop ? "border-top" : "",
          ].join(" ")}
        >
          <div className="copyright-container">
            <p className="company-info">
              Bedrijfsinformatie: Rdewilde.nl - KVK: 75473895 <br />{" "}
              <Link
                to="/AlgemeneVoorwaarden"
                onClick={(): void => {
                  window.scrollTo(0, 0);
                }}
                className="link"
              >
                Algemene voorwaarden
              </Link>{" "}
              ||{" "}
              <Link
                to="/PrivacyStatement"
                onClick={(): void => {
                  window.scrollTo(0, 0);
                }}
                className="link"
              >
                Privacy statement
              </Link>{" "}
            </p>
          </div>
          <div className="stay-connected d-flex justify-content-between">
            <div className="socialButtons">
              <a
                href="https://www.facebook.com/rdewildenl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="in fab fa-facebook-f" />
              </a>
              <a
                href="https://instagram.com/rdewilde.nl/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="in fab fa-instagram" />
              </a>
              <a
                href="https://www.linkedin.com/in/ruben-de-wilde-b71947b0/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="in fab fa-linkedin-in" />
              </a>
              <a href="/docs/CV.pdf" target="_blank" rel="noopener noreferrer">
                <i className="cv fas fa-file-invoice" />
              </a>
            </div>
            <div className="html5">
              <a
                href="https://validator.w3.org/check?uri=http%3A%2F%2Fwww.rdewilde.nl%2F;ss=1;outline=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://www.w3.org/html/logo/badge/html5-badge-h-css3-device.png"
                  alt="HTML5 Powered with CSS3 / Styling, and Device Access"
                  title="HTML5 Powered with CSS3 / Styling, and Device Access"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row flex-wrap justify-content-center">
          <div className="copyright-text">
            <p>
              Rdewilde © <span>{year}</span> All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
