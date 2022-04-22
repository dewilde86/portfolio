import { ReactElement } from "react";
import { SkillItem } from "../SkillItem/SkillItem";
import { NavHashLink as NavLink } from "react-router-hash-link";
import {
  getAboutMeTextResources,
  getSkilsTextResources,
  getMijnWerkervaringResources,
} from "../../utils/text-resources";

export const Aboutme = (): ReactElement => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="flex pb-4">
              <h3 data-aos="slide-down">Wie ben ik en wat doe ik?</h3>
              <div className="header-bar" data-aos="slide-up" />
            </div>
          </div>
          <div className="col-12">
            <section className="text-block" data-aos="slide-in-left">
              <article>
                <p>{getAboutMeTextResources("AboutMeTop")}</p>
              </article>
            </section>
            <section className="text-block" data-aos="slide-in-right">
              <article>
                <p>{getAboutMeTextResources("AboutMeMiddle")}</p>
              </article>
            </section>
            <section className="text-block" data-aos="slide-in-left">
              <article>
                <p>{getMijnWerkervaringResources("MijnWerkervaring")}</p>
              </article>
            </section>
            <section className="text-block" data-aos="slide-in-right">
              <article>
                <p>
                  {getAboutMeTextResources("AboutmeBottom")}&nbsp;
                  <NavLink smooth to="#contact" className="link">
                    contactformulier
                  </NavLink>
                  !
                </p>
              </article>
            </section>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-9">
        <div className="row">
          <div className="col-12">
            <div className="flex pb-4">
              <h4 data-aos="slide-down">Mijn skills en specialisaties</h4>
            </div>
          </div>
          <div className="col-12">
            <section className="text-block" data-aos="slide-in-right">
              <article>
                <p>{getSkilsTextResources("SkillsEnSpecialisatie")}</p>
              </article>
            </section>
          </div>
          <div className="col-12 col-md-6">
            <SkillItem
              skill="HTML"
              className="p90"
              ratio={90}
              name="HTML5/CSS3"
            />
            <SkillItem
              skill="Sass-Less"
              className="p90"
              ratio={90}
              name="Sass/Less"
            />
            <SkillItem
              skill="Javascript"
              className="p60"
              ratio={60}
              name="Javascript"
            />
            <SkillItem
              skill="jQuery"
              className="p60"
              ratio={60}
              name="jQuery"
            />
            <SkillItem skill="React" className="p70" ratio={70} name="React" />
            <SkillItem
              skill="Angular"
              className="p50"
              ratio={50}
              name="Angular"
            />
          </div>
          <div className="col-12 col-md-6">
            <SkillItem
              skill="Git-versiebeheer"
              className="p70"
              ratio={70}
              name="Git"
            />
            <SkillItem
              skill="Photoshop"
              className="p70"
              ratio={70}
              name="Photoshop"
            />
            <SkillItem
              skill="Illustrator"
              className="p80"
              ratio={80}
              name="Illustrator"
            />
            <SkillItem
              skill="Indesign"
              className="p70"
              ratio={70}
              name="Indesign"
            />
            <SkillItem
              skill="Adobe-XD"
              className="p70"
              ratio={70}
              name="Adobe XD"
            />
          </div>
        </div>
      </div>
    </>
  );
};
