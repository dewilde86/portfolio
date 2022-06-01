import { Aboutme } from "../Aboutme/Aboutme";
import { Background } from "../Background/Background";
import { Card } from "../Card/Card";
import { CardWrapper } from "../Card/CardWrapper";
import { Contact } from "../Contact/Contact";
import { Footer } from "../Footer/Footer";
import { getPortfolioTextResources } from "../../utils/text-resources";
import { Link } from "react-router-dom";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { NavPills } from "../NavPills/NavPills";
import { ParallaxImage } from "../Background/ParallaxImage";
import { Service } from "../Service/Service";
import { portfolioItems } from "../../utils/data/data";

const Home = () => {
  return (
    <>
      <div className="App">
        <NavPills />
        <header id="header">
          <Background imgUrl="Header">
            <div className="background-caption">
              <section className="flex">
                <h1 className="highlight" data-aos="slide-in-left">
                  Ruben de Wilde
                </h1>
                <h1 data-aos="flip-in-y">Front-end Developer</h1>
                <NavLink
                  smooth
                  to="#aboutme"
                  className="btn btn-link"
                  data-aos="slide-in-right"
                >
                  <span className="text-shadow-1">Bekijk mijn werk</span>
                </NavLink>
              </section>
            </div>
          </Background>
        </header>
        <main>
          <div id="aboutme" className="aboutme">
            <Aboutme />
          </div>
          <div>
            <ParallaxImage imgUrl="Portfolio" />
          </div>
          <div id="portfolio" className="portfolio">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="flex pb-4">
                    <h3 data-aos="slide-down">Mijn werk</h3>
                    <div className="header-bar" data-aos="slide-up" />
                  </div>
                </div>
                <div className="col-12">
                  <section
                    className="text-block text-center pb-4"
                    data-aos="slide-up"
                  >
                    <article>
                      <p>{getPortfolioTextResources("PortfolioIntro")}</p>
                    </article>
                  </section>
                </div>
              </div>
              <div className="row">
                <CardWrapper maxRowCount={16}>
                  {portfolioItems.slice(0, 8).map((item, index) => (
                    <Card
                      imageSrc={item.image}
                      imageAlt={item.alt}
                      link={item.link}
                      customerName={item.name}
                      key={index}
                    />
                  ))}
                </CardWrapper>
                <div className="button-wrapper justify-content-end">
                  <Link
                    to="/Portfolio"
                    onClick={(): void => {
                      window.scrollTo(0, 0);
                    }}
                    className="btn btn-readmore"
                    data-aos="slide-in-right"
                  >
                    Bekijk al mijn werk <i className="fas fa-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ParallaxImage imgUrl="Service" />
          </div>
          <div id="service" className="service">
            <Service />
          </div>
          <div>
            <ParallaxImage imgUrl="Contact" />
          </div>
          <div id="contact" className="contact">
            <Contact />
          </div>
        </main>
        <Footer borderTop />
      </div>
    </>
  );
};

export default Home;
