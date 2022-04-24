type props = {
  caption: string;
};

export const AlertMessage = ({ caption }: props) => {
  return (
    <>
      <div
        className="alert alert-success alert-dismissible fade show"
        role="alert"
      >
        <p>{caption}</p>
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </>
  );
};
