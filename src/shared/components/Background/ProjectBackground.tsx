type BackgroundProps = {
  ProjectImage: string;
};

export const ProjectBackground = ({ ProjectImage }: BackgroundProps) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <figure className="project-img">
          <img
            src={`/images/Projects/` + ProjectImage + `.png`}
            alt="Project header"
          />
        </figure>
      </div>
    </div>
  );
};
