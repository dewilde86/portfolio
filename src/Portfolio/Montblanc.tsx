import { ProjectDetails } from "../shared/components/ProjectDetails/ProjectDetails";
import TopNavigationbar from "../shared/components/TopNavigationbar/TopNavigationbar";
import { Footer } from "../shared/components/Footer/Footer";
import { getPortfolioTextResources } from "../shared/utils/text-resources";
import { getGeneralTextResources } from "../shared/utils/text-resources-algemeen";

export const Montblanc = () => {
  return (
    <div className="project-page">
      <header id="header">
        <TopNavigationbar />
      </header>
      <main>
        <ProjectDetails
          CustomerBrand="montblanc"
          CustomerName={getPortfolioTextResources("MontblancCustomerName")}
          CustomerInfo={getPortfolioTextResources("MontblancCustomerInfo")}
          Products={getPortfolioTextResources("Products")}
          Role={getGeneralTextResources("InterfaceAnddevelopment")}
          ProjectImage="Montblanc"
          FullWebsiteImageHeight={2638}
          Tools={getPortfolioTextResources("MontblancUsedTools")}
          Description={getPortfolioTextResources("MontblancDescription")}
          Solution={getPortfolioTextResources("MontblancSolution")}
          PrevProject="OudebegraafplaatsGouda"
          NextProject="Superfuif"
        />
      </main>
      <Footer />
    </div>
  );
};
