import { ReactElement } from "react";
import { ProjectDetails } from "../shared/components/ProjectDetails/ProjectDetails";
import TopNavigationbar from "../shared/components/TopNavigationbar/TopNavigationbar";
import { Footer } from "../shared/components/Footer/Footer";
import { getPortfolioTextResources } from "../shared/utils/text-resources";
import { getGeneralTextResources } from "../shared/utils/text-resources-algemeen";

export const OraCoaching = (): ReactElement => {
  return (
    <div className="project-page">
      <header id="header">
        <TopNavigationbar />
      </header>
      <main>
        <ProjectDetails
          CustomerBrand="oracoaching"
          CustomerName={getPortfolioTextResources("OraCoachingCustomerName")}
          CustomerInfo={getPortfolioTextResources("OraCoachingCustomerInfo")}
          Products={getPortfolioTextResources("Products")}
          Role={getGeneralTextResources("InterfaceAnddevelopment")}
          ProjectImage="OraCoaching"
          FullWebsiteImageHeight={2269}
          Tools={getPortfolioTextResources("UsedToolsWordpress")}
          Url={getPortfolioTextResources("OraCoachingUrl")}
          Description={getPortfolioTextResources("OraCoachingDescription")}
          Solution={getPortfolioTextResources("OraCoachingSolution")}
          PrevProject="StrongerBodyStrongerMind"
          NextProject="Intersoftware-website"
        />
      </main>
      <Footer />
    </div>
  );
};
