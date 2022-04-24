type SkillItemProps = {
  skill: string;
  name: string;
  ratio: number;
  className: string;
};

export const SkillItem = ({
  skill,
  name,
  ratio,
  className,
}: SkillItemProps) => {
  return (
    <div className="skill-set-item">
      <div className="skill-set-icon">
        <img src={`/images/skills/${skill}.svg`} alt={skill} />
      </div>
      <div className="skill-set-detail">
        <div className="skill-set-meta">
          <div className="skill-set-name">
            <h4 className="small-title-skill">{name}</h4>
          </div>
          <h4
            className="small-title-skill skill-set-high aos-init aos-animate"
            data-aos="fade-in"
          >
            {ratio}
            <span className="skill-set-ratio">%</span>
          </h4>
        </div>
        <div
          className={"skill-set-bar aos-init aos-animate " + className + " in"}
          data-aos="show-hide"
        ></div>
      </div>
    </div>
  );
};
