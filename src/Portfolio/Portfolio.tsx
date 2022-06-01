import TopNavigationbar from "../shared/components/TopNavigationbar/TopNavigationbar";
import { Footer } from "../shared/components/Footer/Footer";
import { CardWrapper } from "../shared/components/Card/CardWrapper";
import { Card } from "../shared/components/Card/Card";
import { portfolioItems } from "../shared/utils/data/data";

export const Portfolio = () => {
  return (
    <div className="project-page">
      <header id="header">
        <TopNavigationbar />
      </header>
      <main>
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-12">
              <div className="flex pt-5 pb-4">
                <h3 data-aos="slide-down">Mijn werk</h3>
                <div className="header-bar" data-aos="slide-up" />
              </div>
            </div>
          </div>
          <div className="row">
            <CardWrapper maxRowCount={17}>
              {portfolioItems.map((item, index) => (
                <Card
                  imageSrc={item.image}
                  imageAlt={item.alt}
                  link={item.link}
                  customerName={item.name}
                  key={index}
                />
              ))}
            </CardWrapper>
          </div>
        </div>
      </main>
      <Footer borderTop />
    </div>
  );
};
