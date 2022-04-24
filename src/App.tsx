import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AlgemeneVoorwaarden } from "./AlgemeneVoorwaarden/AlgemeneVoorwaarden";
import { Armalux } from "./Portfolio/Armalux";
import { DJSchoolGouda } from "./Portfolio/DJSchoolGouda";
import { FlexAlarm } from "./Portfolio/FlexAlarm";
import { IswWebsite } from "./Portfolio/IswWebsite";
import { KokSchilderwerken } from "./Portfolio/KokSchilderwerken";
import { Montblanc } from "./Portfolio/Montblanc";
import { OraCoaching } from "./Portfolio/OraCoaching";
import { OudebegraafsplaatsGouda } from "./Portfolio/OudebegraafplaatsGouda";
import { Portfolio } from "./Portfolio/Portfolio";
import { PrivacyStatement } from "./PrivacyStatement/PrivacyStatement";
import { Rekentools } from "./Portfolio/Rekentools";
import { Softvalue } from "./Portfolio/Softvalue";
import { StrongerBodyStrongerMind } from "./Portfolio/StrongerBodyStrongerMind";
import { Superfuif } from "./Portfolio/Superfuif";
import { Supergroup } from "./Portfolio/Supergroup";
import { Supertech } from "./Portfolio/Supertech";
import { Validat } from "./Portfolio/Validat";

import Home from "./shared/components/Home/Home";
import { My404Page } from "./shared/components/My404Page/My404Page";

import smoothscroll from "smoothscroll-polyfill";
import AOS from "aos";

import "./styles/style.scss";
import "aos/dist/aos.css";
import { getCookieNotificationTextResources } from "./shared/utils/text-resources";
import CookieConsent from "react-cookie-consent";

smoothscroll.polyfill();

AOS.init({
  duration: 700,
  useClassNames: true,
});

type props = {
  tab: string;
};

const App = ({ tab }: props) => {
  const message = getCookieNotificationTextResources("CookieMessage");

  return (
    <>
      <CookieConsent
        location="bottom"
        buttonText="Accepteren"
        cookieName="Rdewilde_Cookie"
        disableStyles={true}
        buttonClasses="btn btn-reverse"
        containerClasses="cookie-banner"
        contentClasses="cookie-message"
        buttonWrapperClasses="button-close"
        expires={150}
      >
        {message}
      </CookieConsent>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Portfolio/Armalux/" element={<Armalux />} />
          <Route path="/Portfolio/DJSchoolGouda/" element={<DJSchoolGouda />} />
          <Route path="/Portfolio/FlexAlarm/" element={<FlexAlarm />} />
          <Route
            path="/Portfolio/Intersoftware-website/"
            element={<IswWebsite />}
          />
          <Route
            path="/Portfolio/Intersoftware-rekentools/"
            element={<Rekentools />}
          />
          <Route
            path="/Portfolio/KokSchilderwerken/"
            element={<KokSchilderwerken />}
          />
          <Route path="/Portfolio/Montblanc/" element={<Montblanc />} />
          <Route path="/Portfolio/OraCoaching/" element={<OraCoaching />} />
          <Route
            path="/Portfolio/OudebegraafplaatsGouda/"
            element={<OudebegraafsplaatsGouda />}
          />
          <Route path="/Portfolio/Softvalue/" element={<Softvalue />} />
          <Route
            path="/Portfolio/StrongerBodyStrongerMind/"
            element={<StrongerBodyStrongerMind />}
          />
          <Route path="/Portfolio/Superfuif/" element={<Superfuif />} />
          <Route path="/Portfolio/Supergroup/" element={<Supergroup />} />
          <Route path="/Portfolio/Supertech/" element={<Supertech />} />
          <Route path="/Portfolio/Validat/" element={<Validat />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route
            path="/AlgemeneVoorwaarden"
            element={<AlgemeneVoorwaarden />}
          />
          <Route path="/PrivacyStatement" element={<PrivacyStatement />} />
          <Route path="*" element={<My404Page />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
