import { ProjectDetails } from "../shared/components/ProjectDetails/ProjectDetails";
import TopNavigationbar from "../shared/components/TopNavigationbar/TopNavigationbar";
import { Footer } from "../shared/components/Footer/Footer";
import { getPortfolioTextResources } from "../shared/utils/text-resources";
import { getGeneralTextResources } from "../shared/utils/text-resources-algemeen";

export const OudebegraafsplaatsGouda = () => {
  return (
    <div className="project-page">
      <header id="header">
        <TopNavigationbar />
      </header>
      <main>
        <ProjectDetails
          CustomerBrand="oudebegraafplaatsgouda"
          CustomerName={getPortfolioTextResources(
            "OudeBegraafplaatsGoudaCustomerName"
          )}
          CustomerInfo={getPortfolioTextResources(
            "OudeBegraafplaatsGoudaCustomerInfo"
          )}
          Products={getPortfolioTextResources("OudebegraafplaatsGoudaProducts")}
          Role={getGeneralTextResources("Ontwerpen")}
          ProjectImage="Oudebegraafplaats"
          FullWebsiteImageHeight={600}
          Tools={getPortfolioTextResources("OudeBegraafplaatsGoudaUsedTools")}
          Url={getPortfolioTextResources("OudeBegraafplaatsGoudaUrl")}
          Description={getPortfolioTextResources(
            "OudeBegraafplaatsGoudaDescription"
          )}
          Solution={getPortfolioTextResources("OudeBegraafplaatsGoudaSolution")}
          PrevProject="Intersoftware-rekentools"
          NextProject="Montblanc"
        />
      </main>
      <Footer />
    </div>
  );
};
