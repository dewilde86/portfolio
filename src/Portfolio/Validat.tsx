import { ReactElement } from "react";
import { ProjectDetails } from "../shared/components/ProjectDetails/ProjectDetails";
import TopNavigationbar from "../shared/components/TopNavigationbar/TopNavigationbar";
import { Footer } from "../shared/components/Footer/Footer";
import { getPortfolioTextResources } from "../shared/utils/text-resources";
import { getGeneralTextResources } from "../shared/utils/text-resources-algemeen";

export const Validat = (): ReactElement => {
  return (
    <div className="project-page">
      <header id="header">
        <TopNavigationbar />
      </header>
      <main>
        <ProjectDetails
          CustomerBrand="validat"
          CustomerName={getPortfolioTextResources("ValidatCustomerName")}
          CustomerInfo={getPortfolioTextResources("ValidatCustomerInfo")}
          Products={getPortfolioTextResources("Products")}
          Role={getGeneralTextResources("Webdevelopment")}
          ProjectImage="Validat"
          FullWebsiteImageHeight={3093}
          Tools={getPortfolioTextResources("ValidatUsedTools")}
          Url={getPortfolioTextResources("ValidatUrl")}
          Description={getPortfolioTextResources("ValidatDescription")}
          Solution={getPortfolioTextResources("ValidatSolution")}
          PrevProject="Supertech"
          NextProject="StrongerBodyStrongermind"
        />
      </main>
      <Footer />
    </div>
  );
};
