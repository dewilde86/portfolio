import { ReactElement } from "react";
import { ProjectDetails } from "../shared/components/ProjectDetails/ProjectDetails";
import TopNavigationbar from "../shared/components/TopNavigationbar/TopNavigationbar";
import { Footer } from "../shared/components/Footer/Footer";
import { getPortfolioTextResources } from "../shared/utils/text-resources";
import { getGeneralTextResources } from "../shared/utils/text-resources-algemeen";

export const Rekentools = (): ReactElement => {
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
          ProjectImage="Rekentools"
          FullWebsiteImageHeight={2055}
          Tools={getPortfolioTextResources("RekenToolsUsedTools")}
          Url=""
          Description={getPortfolioTextResources("RekenToolsDescription")}
          Solution={getPortfolioTextResources("RekenToolsSolution")}
          PrevProject="Intersoftware-website"
          NextProject="OudebegraafplaatsGouda"
        />
      </main>
      <Footer />
    </div>
  );
};
