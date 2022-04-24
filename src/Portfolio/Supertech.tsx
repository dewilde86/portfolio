import { ProjectDetails } from "../shared/components/ProjectDetails/ProjectDetails";
import TopNavigationbar from "../shared/components/TopNavigationbar/TopNavigationbar";
import { Footer } from "../shared/components/Footer/Footer";
import { getPortfolioTextResources } from "../shared/utils/text-resources";
import { getGeneralTextResources } from "../shared/utils/text-resources-algemeen";

export const Supertech = () => {
  return (
    <div className="project-page">
      <header id="header">
        <TopNavigationbar />
      </header>
      <main>
        <ProjectDetails
          CustomerBrand="supertech"
          CustomerName={getPortfolioTextResources("SupertechCustomerName")}
          CustomerInfo={getPortfolioTextResources("SupertechCustomerInfo")}
          Products={getPortfolioTextResources("Products")}
          Role={getGeneralTextResources("InterfaceAnddevelopment")}
          ProjectImage="Supertech"
          FullWebsiteImageHeight={1775}
          Tools={getPortfolioTextResources("UsedToolsWordpress")}
          Url={getPortfolioTextResources("SupertechUrl")}
          Description={getPortfolioTextResources("SupertechDescription")}
          Solution={getPortfolioTextResources("SupertechSolution")}
          PrevProject="KokSchilderwerken"
          NextProject="Validat"
        />
      </main>
      <Footer />
    </div>
  );
};
