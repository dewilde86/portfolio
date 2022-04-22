import { ReactElement } from "react";
import { ProjectDetails } from "../shared/components/ProjectDetails/ProjectDetails";
import TopNavigationbar from "../shared/components/TopNavigationbar/TopNavigationbar";
import { Footer } from "../shared/components/Footer/Footer";
import { getPortfolioTextResources } from "../shared/utils/text-resources";
import { getGeneralTextResources } from "../shared/utils/text-resources-algemeen";

export const KokSchilderwerken = (): ReactElement => {
  return (
    <div className="project-page">
      <header id="header">
        <TopNavigationbar />
      </header>
      <main>
        <ProjectDetails
          CustomerBrand="kokschilderwerken"
          CustomerName={getPortfolioTextResources(
            "KokSchilderwerkCustomerName"
          )}
          CustomerInfo={getPortfolioTextResources(
            "KokSchilderwerkCustomerInfo"
          )}
          Role={getGeneralTextResources("Webdevelopment")}
          ProjectImage="KokSchilderwerken"
          FullWebsiteImageHeight={1645}
          Products={getPortfolioTextResources("Products")}
          Tools={getPortfolioTextResources("UsedToolsWordpress")}
          Url={getPortfolioTextResources("KokSchilderwerkUrl")}
          Description={getPortfolioTextResources("KokSchilderwerkDescription")}
          Solution={getPortfolioTextResources("KokSchilderwerkSolution")}
          PrevProject="Armalux"
          NextProject="Supertech"
        />
      </main>
      <Footer />
    </div>
  );
};
