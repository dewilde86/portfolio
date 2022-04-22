import { ReactElement } from "react";
import { ProjectDetails } from "../shared/components/ProjectDetails/ProjectDetails";
import TopNavigationbar from "../shared/components/TopNavigationbar/TopNavigationbar";
import { Footer } from "../shared/components/Footer/Footer";
import { getPortfolioTextResources } from "../shared/utils/text-resources";
import { getGeneralTextResources } from "../shared/utils/text-resources-algemeen";

export const Armalux = (): ReactElement => {
  return (
    <div className="project-page">
      <header id="header">
        <TopNavigationbar />
      </header>
      <main>
        <ProjectDetails
          CustomerBrand="armalux"
          CustomerName={getPortfolioTextResources("ArmaluxCustomerName")}
          CustomerInfo={getPortfolioTextResources("ArmaluxCustomerInfo")}
          Role={getGeneralTextResources("Webdevelopment")}
          ProjectImage="Armalux"
          FullWebsiteImageHeight={1801}
          Products={getPortfolioTextResources("Products")}
          Tools={getPortfolioTextResources("UsedToolsWordpress")}
          Description={getPortfolioTextResources("ArmaluxDescription")}
          Solution={getPortfolioTextResources("ArmaluxSolution")}
          PrevProject="Softvalue"
          NextProject="KokSchilderwerken"
        />
      </main>
      <Footer />
    </div>
  );
};
