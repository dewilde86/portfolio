import { useState } from "react";

type props = {
  alertType: string;
  caption: string;
};

export const AlertMessage = ({ alertType, caption }: props) => {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <>
      <div
        className={[
          `alert`,
          alertType,
          `alert-dismissible fade`,
          showAlert ? "show" : "",
        ].join(" ")}
        role="alert"
      >
        <p>{caption}</p>
        <button
          className="btn-close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={() => setShowAlert(false)}
        ></button>
      </div>
    </>
  );
};
