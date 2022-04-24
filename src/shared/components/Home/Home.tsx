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

const Home = () => {
  return (
    <>
      <div className="App">
        <NavPills />
        <header id="header">
          <Background imgUrl="Header">
            <div className="background-caption">
              <section className="flex">
                <h1 data-aos="slide-in-left">
                  <span className="highlight">Ruben de Wilde</span>
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
                <CardWrapper maxRowCount={10}>
                  <Card
                    imageSrc="Superfuif"
                    imageAlt="Superfuif Website"
                    link="Superfuif"
                    customerName="Superfuif"
                  />
                  <Card
                    imageSrc="Flexalarm"
                    imageAlt="Flexalarm Website"
                    link="Flexalarm"
                    customerName="FlexAlarm"
                  />
                  <Card
                    imageSrc="Supergroup"
                    imageAlt="Supergroup Website"
                    link="Supergroup"
                    customerName="Supergroup"
                  />
                  <Card
                    imageSrc="DJSchoolGouda"
                    imageAlt="DJSchoolGouda Website"
                    link="DJSchoolGouda"
                    customerName="DJ School Gouda"
                  />
                  <Card
                    imageSrc="Softvalue"
                    imageAlt="Softvalue Website"
                    link="Softvalue"
                    customerName="Softvalue"
                  />
                  <Card
                    imageSrc="Armalux"
                    imageAlt="Armalux Website"
                    link="Armalux"
                    customerName="Armalux"
                  />
                  <Card
                    imageSrc="KokSchilderwerken"
                    imageAlt="KokSchilderwerken Website"
                    link="KokSchilderwerken"
                    customerName="Kok Schilderwerken"
                  />
                  <Card
                    imageSrc="Supertech"
                    imageAlt="Supertech Website"
                    link="Supertech"
                    customerName="Supertech"
                  />
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
