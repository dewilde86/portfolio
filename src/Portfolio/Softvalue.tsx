import { ProjectDetails } from "../shared/components/ProjectDetails/ProjectDetails";
import TopNavigationbar from "../shared/components/TopNavigationbar/TopNavigationbar";
import { Footer } from "../shared/components/Footer/Footer";
import { getPortfolioTextResources } from "../shared/utils/text-resources";
import { getGeneralTextResources } from "../shared/utils/text-resources-algemeen";

export const Softvalue = () => {
  return (
    <div className="project-page">
      <header id="header">
        <TopNavigationbar />
      </header>
      <main>
        <ProjectDetails
          CustomerBrand="softvalue"
          CustomerName={getPortfolioTextResources("SoftvalueCustomerName")}
          CustomerInfo={getPortfolioTextResources("SoftvalueCustomerInfo")}
          Products={getPortfolioTextResources("Products")}
          Role={getGeneralTextResources("InterfaceAnddevelopment")}
          ProjectImage="Softvalue"
          FullWebsiteImageHeight={1998}
          Tools={getPortfolioTextResources("SoftvalueUsedTools")}
          Url={getPortfolioTextResources("SoftvalueUrl")}
          Description={getPortfolioTextResources("SoftvalueDescription")}
          Solution={getPortfolioTextResources("SoftvalueSolution")}
          PrevProject="DJSchoolGouda"
          NextProject="Armalux"
        />
      </main>
      <Footer />
    </div>
  );
};
