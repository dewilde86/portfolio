type props = {
  iconType: string;
};

export const Icons = ({ iconType }: props) => {
  return (
    <div className="icon-grid">
      <div className="icon-container mb-5">
        <div className="icon-item flex" data-aos="zoom-in">
          <figure>
            <img
              src={`/images/icons/${iconType}.svg`}
              alt={iconType}
              title={iconType}
            />
            <label>{iconType}</label>
          </figure>
        </div>
      </div>
    </div>
  );
};
