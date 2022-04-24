import { ProjectDetails } from "../shared/components/ProjectDetails/ProjectDetails";
import TopNavigationbar from "../shared/components/TopNavigationbar/TopNavigationbar";
import { Footer } from "../shared/components/Footer/Footer";
import { getPortfolioTextResources } from "../shared/utils/text-resources";
import { getGeneralTextResources } from "../shared/utils/text-resources-algemeen";

export const StrongerBodyStrongerMind = () => {
  return (
    <div className="project-page">
      <header id="header">
        <TopNavigationbar />
      </header>
      <main>
        <ProjectDetails
          CustomerBrand="strongerbodystrongermind"
          CustomerName={getPortfolioTextResources(
            "StrongerBodyStrongerMindCustomerName"
          )}
          CustomerInfo={getPortfolioTextResources(
            "StrongerBodyStrongerMindCustomerInfo"
          )}
          Products={getPortfolioTextResources("Products")}
          Role={getGeneralTextResources("InterfaceAnddevelopment")}
          ProjectImage="StrongerBodyStrongerMind"
          FullWebsiteImageHeight={2637}
          Tools={getPortfolioTextResources("UsedToolsWordpress")}
          Description={getPortfolioTextResources(
            "StrongerBodyStrongerMindDescription"
          )}
          Solution={getPortfolioTextResources(
            "StrongerBodyStrongerMindSolution"
          )}
          PrevProject="Validat"
          NextProject="Oracoaching"
        />
      </main>
      <Footer />
    </div>
  );
};
