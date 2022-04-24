import TopNavigationbar from "../shared/components/TopNavigationbar/TopNavigationbar";
import { Footer } from "../shared/components/Footer/Footer";
import { getAlgemeneVoorwaardenResources } from "../shared/utils/text-resources";

export const AlgemeneVoorwaarden = () => {
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
                <h3>Algemene voorwaarden</h3>
                <div className="header-bar" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <section className="pb-4">
                <article>
                  <h4>{getAlgemeneVoorwaardenResources("artikel1Header")}</h4>
                  <p className="pb-4">
                    {getAlgemeneVoorwaardenResources("artikel1Text")}
                  </p>
                  <h4>{getAlgemeneVoorwaardenResources("artikel2Header")}</h4>
                  <p className="pb-4">
                    {getAlgemeneVoorwaardenResources("artikel2Text")}
                  </p>
                  <h4>{getAlgemeneVoorwaardenResources("artikel3Header")}</h4>
                  <p className="pb-4">
                    {getAlgemeneVoorwaardenResources("artikel3Text")}
                  </p>
                  <h4>{getAlgemeneVoorwaardenResources("artikel4Header")}</h4>
                  <p className="pb-4">
                    {getAlgemeneVoorwaardenResources("artikel4Text")}
                  </p>
                  <h4>{getAlgemeneVoorwaardenResources("artikel5Header")}</h4>
                  <p className="pb-4">
                    {getAlgemeneVoorwaardenResources("artikel5Text")}
                  </p>
                  <h4>{getAlgemeneVoorwaardenResources("artikel6Header")}</h4>
                  <p className="pb-4">
                    {getAlgemeneVoorwaardenResources("artikel6Text")}
                  </p>
                  <h4>{getAlgemeneVoorwaardenResources("artikel7Header")}</h4>
                  <p className="pb-4">
                    {getAlgemeneVoorwaardenResources("artikel7Text")}
                  </p>
                  <h4>{getAlgemeneVoorwaardenResources("artikel8Header")}</h4>
                  <p className="pb-4">
                    {getAlgemeneVoorwaardenResources("artikel8Text")}
                  </p>
                  <h4>{getAlgemeneVoorwaardenResources("artikel9Header")}</h4>
                  <p className="pb-4">
                    {getAlgemeneVoorwaardenResources("artikel9Text")}
                  </p>
                  <h4>{getAlgemeneVoorwaardenResources("artikel10Header")}</h4>
                  <p className="pb-4">
                    {getAlgemeneVoorwaardenResources("artikel10Text")}
                  </p>
                  <h4>{getAlgemeneVoorwaardenResources("artikel11Header")}</h4>
                  <p className="pb-4">
                    {getAlgemeneVoorwaardenResources("artikel11Text")}
                  </p>
                  <h4>{getAlgemeneVoorwaardenResources("artikel12Header")}</h4>
                  <p className="pb-4">
                    {getAlgemeneVoorwaardenResources("artikel12Text")}
                  </p>
                  <h4>{getAlgemeneVoorwaardenResources("artikel13Header")}</h4>
                  <p className="pb-4">
                    {getAlgemeneVoorwaardenResources("artikel13Text")}
                  </p>
                  <h4>{getAlgemeneVoorwaardenResources("artikel14Header")}</h4>
                  <p className="pb-4">
                    {getAlgemeneVoorwaardenResources("artikel14Text")}
                  </p>
                  <h4>{getAlgemeneVoorwaardenResources("artikel15Header")}</h4>
                  <p className="pb-4">
                    {getAlgemeneVoorwaardenResources("artikel15Text")}
                  </p>
                  <p>Gepubliceerd op 1 januari 2020 – versie 1.1</p>
                </article>
              </section>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-end pb-4">
                <a
                  href="/docs/Algemene-voorwaarden.pdf"
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
