import { ProjectDetails } from "../shared/components/ProjectDetails/ProjectDetails";
import TopNavigationbar from "../shared/components/TopNavigationbar/TopNavigationbar";
import { Footer } from "../shared/components/Footer/Footer";
import { getPortfolioTextResources } from "../shared/utils/text-resources";
import { getGeneralTextResources } from "../shared/utils/text-resources-algemeen";

export const Supergroup = () => {
  return (
    <div className="project-page">
      <header id="header">
        <TopNavigationbar />
      </header>
      <main>
        <ProjectDetails
          CustomerBrand="supergroup"
          CustomerName={getPortfolioTextResources("SupergroupCustomerName")}
          CustomerInfo={getPortfolioTextResources("SupergroupCustomerInfo")}
          Products={getPortfolioTextResources("Products")}
          Role={getGeneralTextResources("InterfaceAnddevelopment")}
          ProjectImage="Supergroup"
          FullWebsiteImageHeight={500}
          Tools={getPortfolioTextResources("UsedToolsPlain")}
          Url={getPortfolioTextResources("SupergroupUrl")}
          Description={getPortfolioTextResources("SupergroupDescription")}
          Solution={getPortfolioTextResources("SupergroupSolution")}
          PrevProject="FlexAlarm"
          NextProject="DJSchoolGouda"
        />
      </main>
      <Footer />
    </div>
  );
};
