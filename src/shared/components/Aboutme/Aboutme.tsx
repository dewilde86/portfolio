import { SkillItem } from "../SkillItem/SkillItem";
import { NavHashLink as NavLink } from "react-router-hash-link";
import {
  getAboutMeTextResources,
  getSkilsTextResources,
  getMijnWerkervaringResources,
} from "../../utils/text-resources";
import { skillItems } from "../../utils/data/data";

export const Aboutme = () => {
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
            {skillItems.slice(0, 5).map((item, index) => (
              <SkillItem
                skill={item.skill}
                className={item.class}
                ratio={item.ratio}
                name={item.name}
                key={index}
              />
            ))}
          </div>
          <div className="col-12 col-md-6">
            {skillItems.slice(5, 10).map((item, index) => (
              <SkillItem
                skill={item.skill}
                className={item.class}
                ratio={item.ratio}
                name={item.name}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
