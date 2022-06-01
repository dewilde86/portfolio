import { NavHashLink as NavLink } from "react-router-hash-link";
import { iconsItems } from "../../utils/data/data";
import { getServiceTextResources } from "../../utils/text-resources";
import { Icons } from "../Icons/Icons";

export const Service = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="flex text-center">
              <h3 data-aos="slide-down">Hoe ga ik te werk?</h3>
              <div className="header-bar" data-aos="slide-up" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-12 order-2 order-sm-2 order-md-1 order-lg-1">
            <div className="flex h-100">
              <section className="text-block pb-1">
                <article>
                  <p data-aos="slide-in-left">
                    {getServiceTextResources("HoeGaIkTeWerkTop")}
                  </p>
                  <p data-aos="slide-in-left">
                    {getServiceTextResources("HoeGaIkTeWerk")}
                  </p>
                </article>
              </section>
            </div>
          </div>
          <div className="col-md-6 col-12 order-1 order-sm-1 order-md-2 order-lg-2">
            <figure className="pb-4">
              <div
                className="brainstorm"
                title="Brainstorm"
                data-aos="slide-in-right"
              />
            </figure>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-12">
            <figure className="pb-4">
              <div
                className="websites"
                title="Ontwikkeling"
                data-aos="slide-in-left"
              />
            </figure>
          </div>
          <div className="col-md-6">
            <div className="flex h-100">
              <section className="text-block">
                <article>
                  <p data-aos="slide-in-right">
                    {getServiceTextResources("MijnAanpakTop")}
                  </p>
                  <p data-aos="slide-in-right">
                    {getServiceTextResources("MijnAanpakBottom")}
                  </p>
                </article>
                <div className="pb-4">
                  <NavLink
                    smooth
                    to="#contact"
                    className="btn btn-primary-color my-4"
                    data-aos="slide-in-right"
                  >
                    Vraag een gesprek aan!
                  </NavLink>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="flex text-center">
              <h4 data-aos="slide-down">Waar kan je mij voor inschakelen?</h4>
            </div>
            <section className="text-block text-center pb-4">
              <article>
                <p data-aos="slide-up">
                  {getServiceTextResources("WaarKanJeMijVoorInschakelen")}
                </p>
              </article>
            </section>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {iconsItems.map((item, index) => (
            <Icons iconType={item.type} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};
