import TopNavigationbar from "../shared/components/TopNavigationbar/TopNavigationbar";
import { Footer } from "../shared/components/Footer/Footer";
import { getPrivacyStatementResources } from "../shared/utils/text-resources";

export const PrivacyStatement = () => {
  return (
    <>
      <header>
        <TopNavigationbar />
      </header>
      <main>
        <div className="container pt-15">
          <div className="row">
            <div className="col-12">
              <div className="flex pb-4">
                <h3>Privacy statement</h3>
                <div className="header-bar" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <section className="pb-4">
                <article>
                  <h4>{getPrivacyStatementResources("inleidingHeader")}</h4>
                  <p>
                    <span className="bold">
                      {getPrivacyStatementResources("inleidingSubheader")}
                    </span>
                  </p>
                  <p className="pb-4">
                    {getPrivacyStatementResources("inleidingText")}
                  </p>
                  <h4>
                    {getPrivacyStatementResources("basisBegrippenHeader")}
                  </h4>
                  <ul className="pb-4">
                    <li>
                      <span className="bold">
                        {getPrivacyStatementResources(
                          "basisBegrippenPersoonsgegevensWord"
                        )}
                      </span>{" "}
                      {getPrivacyStatementResources(
                        "basisBegrippenPersoonsgegevensText"
                      )}
                    </li>
                    <li>
                      <span className="bold">
                        {getPrivacyStatementResources(
                          "basisBegrippenPersoonsgegevensWord"
                        )}
                      </span>{" "}
                      {getPrivacyStatementResources(
                        "basisBegrippenPersoonsgegevensText"
                      )}
                    </li>
                    <li>
                      <span className="bold">
                        {getPrivacyStatementResources(
                          "basisBegrippenVerwerkingWord"
                        )}
                      </span>{" "}
                      {getPrivacyStatementResources(
                        "basisBegrippenVerwerkingText"
                      )}
                    </li>
                    <li>
                      <span className="bold">
                        {getPrivacyStatementResources(
                          "basisBegrippenBetrokkeneWord"
                        )}
                      </span>{" "}
                      {getPrivacyStatementResources(
                        "basisBegrippenBetrokkeneText"
                      )}
                    </li>
                    <li>
                      <span className="bold">
                        {getPrivacyStatementResources(
                          "basisBegrippenVerwerkingWord"
                        )}
                      </span>{" "}
                      {getPrivacyStatementResources(
                        "basisBegrippenVerwerkingText"
                      )}
                    </li>
                  </ul>
                  <h4>{getPrivacyStatementResources("toepassingHeader")}</h4>
                  <p className="pb-4">
                    {getPrivacyStatementResources("toepassingText")}
                  </p>
                  <h4>{getPrivacyStatementResources("doelHeader")}</h4>
                  <p className="pb-4">
                    {getPrivacyStatementResources("doelText")}
                  </p>
                  <h4 className="subtitle">
                    {getPrivacyStatementResources("socialMediaHeader")}
                  </h4>
                  <p className="pb-4">
                    {getPrivacyStatementResources("socialMediaText")}{" "}
                  </p>
                  <h4 className="subtitle">
                    {getPrivacyStatementResources("googleAnalyticsHeader")}
                  </h4>
                  <p className="pb-4">
                    {getPrivacyStatementResources("googleAnalyticsText")}
                  </p>
                  <h4 className="subtitle">
                    {getPrivacyStatementResources("contactFormulierenHeader")}
                  </h4>
                  <p className="pb-4">
                    {getPrivacyStatementResources("contactFormulierenText")}
                  </p>
                  <h4 className="subtitle">
                    {getPrivacyStatementResources("websiteHeader")}
                  </h4>
                  <p className="pb-4">
                    {getPrivacyStatementResources("websiteText")}
                  </p>
                  <h4 className="subtitle">
                    {getPrivacyStatementResources("cookiesHeader")}
                  </h4>
                  <p className="pb-4">
                    {getPrivacyStatementResources("cookiesText")}
                  </p>
                  <h4 className="subtitle">
                    {getPrivacyStatementResources("beveiligingHeader")}
                  </h4>
                  <p className="pb-4">
                    {getPrivacyStatementResources("beveiligingText")}
                  </p>
                  <h4>{getPrivacyStatementResources("verwerkingHeader")}</h4>
                  <p className="pb-4">
                    {getPrivacyStatementResources("verwerkingText")}
                  </p>
                  <h4>{getPrivacyStatementResources("bewarenHeader")}</h4>
                  <p className="pb-4">
                    {getPrivacyStatementResources("bewarenText")}
                  </p>
                  <h4>{getPrivacyStatementResources("bezwaarMakenHeader")}</h4>
                  <p className="pb-4">
                    {getPrivacyStatementResources("bezwaarMakenText")}
                  </p>
                </article>
              </section>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-end pb-4">
                <a
                  href="/docs/Privacy-statement.pdf"
                  className="pb-4 link"
                  target="blank"
                >
                  Download als PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer borderTop />
    </>
  );
};
