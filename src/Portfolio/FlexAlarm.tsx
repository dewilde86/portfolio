import { ReactElement } from "react";
import { ProjectDetails } from "../shared/components/ProjectDetails/ProjectDetails";
import TopNavigationbar from "../shared/components/TopNavigationbar/TopNavigationbar";
import { Footer } from "../shared/components/Footer/Footer";
import { getPortfolioTextResources } from "../shared/utils/text-resources";

export const FlexAlarm = (): ReactElement => {
  return (
    <div className="project-page">
      <header id="header">
        <TopNavigationbar />
      </header>
      <main>
        <ProjectDetails
          CustomerBrand="flexalarm"
          CustomerName={getPortfolioTextResources("FlexalarmCustomerName")}
          CustomerInfo={getPortfolioTextResources("FlexalarmCustomerInfo")}
          Role={getPortfolioTextResources("FlexalarmRole")}
          ProjectImage="Flexalarm"
          FullWebsiteImageHeight={1801}
          Products={getPortfolioTextResources("FlexalarmProducts")}
          Tools={getPortfolioTextResources("UsedToolsWordpress")}
          Description={getPortfolioTextResources("FlexalarmDescription")}
          Solution={getPortfolioTextResources("FlexalarmSolution")}
          Url={getPortfolioTextResources("FlexalarmUrl")}
          PrevProject="Superfuif"
          NextProject="Supergroup"
        />
      </main>
      <Footer />
    </div>
  );
};
