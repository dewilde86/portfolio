import { ReactElement } from "react";
import { ProjectDetails } from "../shared/components/ProjectDetails/ProjectDetails";
import TopNavigationbar from "../shared/components/TopNavigationbar/TopNavigationbar";
import { Footer } from "../shared/components/Footer/Footer";
import { getPortfolioTextResources } from "../shared/utils/text-resources";
import { getGeneralTextResources } from "../shared/utils/text-resources-algemeen";

export const DJSchoolGouda = (): ReactElement => {
  return (
    <div className="project-page">
      <header id="header">
        <TopNavigationbar />
      </header>
      <main>
        <ProjectDetails
          CustomerBrand="djschoolgouda"
          CustomerName={getPortfolioTextResources("DJSchoolGoudaCustomerName")}
          CustomerInfo={getPortfolioTextResources("DJSchoolGoudaCustomerInfo")}
          Products={getPortfolioTextResources("Products")}
          Role={getGeneralTextResources("InterfaceAnddevelopment")}
          ProjectImage="DJSchoolGouda"
          FullWebsiteImageHeight={2242}
          Tools={getPortfolioTextResources("DJSchoolGoudaUsedTools")}
          Url={getPortfolioTextResources("DJSchoolGoudaUrl")}
          Description={getPortfolioTextResources("DJSchoolGoudaDescription")}
          Solution={getPortfolioTextResources("DJSchoolGoudaSolution")}
          PrevProject="Supergroup"
          NextProject="Softvalue"
        />
      </main>
      <Footer />
    </div>
  );
};
