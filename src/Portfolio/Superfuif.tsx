import { ProjectDetails } from "../shared/components/ProjectDetails/ProjectDetails";
import TopNavigationbar from "../shared/components/TopNavigationbar/TopNavigationbar";
import { Footer } from "../shared/components/Footer/Footer";
import { getPortfolioTextResources } from "../shared/utils/text-resources";
import { getGeneralTextResources } from "../shared/utils/text-resources-algemeen";

export const Superfuif = () => {
  return (
    <div className="project-page">
      <header id="header">
        <TopNavigationbar />
      </header>
      <main>
        <ProjectDetails
          CustomerBrand="superfuif"
          CustomerName={getPortfolioTextResources("SuperfuifCustomerName")}
          CustomerInfo={getPortfolioTextResources("SuperfuifCustomerInfo")}
          Products={getPortfolioTextResources("Products")}
          Role={getGeneralTextResources("InterfaceAnddevelopment")}
          ProjectImage="Superfuif"
          FullWebsiteImageHeight={1899}
          Tools={getPortfolioTextResources("SuperfuifUsedTools")}
          Url={getPortfolioTextResources("SuperfuifUrl")}
          Description={getPortfolioTextResources("SuperfuifDescription")}
          Solution={getPortfolioTextResources("SuperfuifSolution")}
          PrevProject="Montblanc"
          NextProject="Flexalarm"
        />
      </main>
      <Footer />
    </div>
  );
};
