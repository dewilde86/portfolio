import { renderToString } from "react-dom/server";
import { MailBase } from "../../MailBase/MailBase";

export const getMailInput = (values: any): any => {
  return {
    personalizations: [
      {
        to: [
          {
            email: "ruben@rdewilde.nl",
          },
        ],
        subject: "Contact via contactformulier",
      },
    ],
    from: {
      email: "no-reply@rdewilde.nl",
    },
    content: [
      {
        type: "text/html",
        value: renderToString(
          <MailBase
            name={values.Name}
            emailadres={values.Email}
            subject={values.Subject}
            message={values.Message}
          />
        ),
      },
    ],
  };
};
