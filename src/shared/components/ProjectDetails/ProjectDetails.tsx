export const ProjectDetails = (props: {
  ProjectImage: string;
  FullWebsiteImageHeight: number;
  CustomerName: string;
  CustomerBrand: string;
  CustomerInfo: string;
  Products: string;
  Tools: string;
  Role: string;
  Url?: string;
  Description: string;
  Solution: string;
  PrevProject: string;
  NextProject: string;
}) => {
  const {
    ProjectImage,
    FullWebsiteImageHeight,
    CustomerName,
    CustomerBrand,
    CustomerInfo,
    Products,
    Tools,
    Role,
    Url,
    Description,
    Solution,
    PrevProject,
    NextProject,
  } = props;
  return (
    <>
      <div className="container">
        <div className="project-block">
          <div className="project-info">
            <section>
              <article>
                <figure>
                  <div
                    className={["customer-brand", CustomerBrand].join(" ")}
                    data-aos="flip-in-y"
                  />
                </figure>
                <p data-aos="slide-in-left">
                  <strong>Opgeleverde product(en):</strong>
                  <br />
                  {Products}
                  <br />
                  <br />
                  <strong>Gebruikte skills:</strong>
                  <br />
                  {Tools}
                  <br />
                  <br />
                  <strong>Mijn rol:</strong>
                  <br />
                  {Role}
                </p>
              </article>
            </section>
          </div>
          <div className="project-text-block mt-1-7">
            <h3 data-aos="slide-down">{CustomerName}</h3>
            <div className="header-bar" data-aos="slide-up" />
            <section>
              <article data-aos="slide-in-right">
                <p>{CustomerInfo}</p>
              </article>
            </section>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="aspect-ratio aspect-ratio-16/9">
            <figure className="project-img aspect-ratio-item">
              <img
                src={`/images/projects/` + ProjectImage + `_1.png`}
                alt={ProjectImage + `_1`}
                data-aos="zoom-in"
              />
            </figure>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="project-block">
          <div className="project-info" data-aos="slide-in-left">
            <h3>Behoefte</h3>
          </div>
          <div className="project-text-block">
            <section>
              <article data-aos="slide-in-right">
                <p>{Description}</p>
              </article>
            </section>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="project-block">
          <figure className="project-block-img">
            <img
              src={`/images/projects/` + ProjectImage + `_2.png`}
              alt={ProjectImage + `_2`}
              data-aos="zoom-in"
              style={{ height: FullWebsiteImageHeight + `px` }}
            />
          </figure>
        </div>
      </div>
      <div className="container">
        <div className="project-block">
          <div className="project-info">
            <h3 data-aos="slide-in-left">Oplossing</h3>
          </div>
          <div className="project-text-block">
            <section>
              <article data-aos="slide-in-right">
                <p>{Solution}</p>
              </article>
              {Url && (
                <a
                  href={Url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary-color my-4"
                  data-aos="fade-up"
                >
                  Bekijk website
                </a>
              )}
            </section>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="project-footer">
          <div className="aspect-ratio aspect-ratio-16/9">
            <figure className="project-img aspect-ratio-item">
              <img
                src={`/images/projects/` + ProjectImage + `_3.png`}
                alt={ProjectImage + `_3`}
                data-aos="zoom-in"
              />
              <figcaption>
                <a
                  href={PrevProject}
                  title={PrevProject}
                  className="prev-project"
                  data-aos="slide-in-left"
                >
                  <span className="arrow" />
                  <span className="text">prev project</span>
                </a>
                <h3 data-aos="flip-in-y">Work</h3>
                <a
                  href={NextProject}
                  title={NextProject}
                  className="next-project"
                  data-aos="slide-in-right"
                >
                  <span className="text">next project</span>
                  <span className="arrow">
                    <span className="arrow-tip"></span>
                    <span className="arrow-length"></span>
                  </span>
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};
