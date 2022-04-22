import { ReactElement } from "react";
import { ProjectDetails } from "../shared/components/ProjectDetails/ProjectDetails";
import TopNavigationbar from "../shared/components/TopNavigationbar/TopNavigationbar";
import { Footer } from "../shared/components/Footer/Footer";
import { getPortfolioTextResources } from "../shared/utils/text-resources";
import { getGeneralTextResources } from "../shared/utils/text-resources-algemeen";

export const IswWebsite = (): ReactElement => {
  return (
    <div className="project-page">
      <header id="header">
        <TopNavigationbar />
      </header>
      <main>
        <ProjectDetails
          CustomerBrand="intersoftware"
          CustomerName={getPortfolioTextResources("IswCustomerName")}
          CustomerInfo={getPortfolioTextResources("IswCustomerInfo")}
          Products={getPortfolioTextResources("Products")}
          Role={getGeneralTextResources("Webdevelopment")}
          ProjectImage="Intersoftware"
          FullWebsiteImageHeight={1608}
          Tools={getPortfolioTextResources("IswUsedTools")}
          Url={getPortfolioTextResources("IswUrl")}
          Description={getPortfolioTextResources("IswDescription")}
          Solution={getPortfolioTextResources("IswSolution")}
          PrevProject="OraCoaching"
          NextProject="Intersoftware-rekentools"
        />
      </main>
      <Footer />
    </div>
  );
};
