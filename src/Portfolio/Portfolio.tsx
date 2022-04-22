import { ReactElement } from "react";
import TopNavigationbar from "../shared/components/TopNavigationbar/TopNavigationbar";
import { Footer } from "../shared/components/Footer/Footer";
import { CardWrapper } from "../shared/components/Card/CardWrapper";
import { Card } from "../shared/components/Card/Card";

export const Portfolio = (): ReactElement => {
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
              <Card
                imageSrc="Validat"
                imageAlt="Validat Website"
                link="Validat"
                customerName="Validat"
              />
              <Card
                imageSrc="StrongerBodyStrongerMind"
                imageAlt="Stronger Body Stronger Mind Website"
                link="StrongerBodyStrongerMind"
                customerName="Stronger Body Stronger Mind"
              />
              <Card
                imageSrc="OraCoaching"
                imageAlt="Ora Coaching Website"
                link="Oracoaching"
                customerName="Ora coaching"
              />
              <Card
                imageSrc="Intersoftware-website"
                imageAlt="Intersoftware Website"
                link="Intersoftware-website"
                customerName="Intersoftware website"
              />
              <Card
                imageSrc="Starterstool-website"
                imageAlt="Intersoftware Startertool"
                link="Intersoftware-rekentools"
                customerName="Intersoftware rekentools"
              />
              <Card
                imageSrc="Obg"
                imageAlt="Oudebegraafplaats"
                link="OudebegraafplaatsGouda"
                customerName="Stichting Oudebegraafplaats Gouda"
              />
              <Card
                imageSrc="Montblanc"
                imageAlt="Montblanc intranet"
                link="Montblanc"
                customerName="Montblanc"
              />
            </CardWrapper>
          </div>
        </div>
      </main>
      <Footer borderTop />
    </div>
  );
};
