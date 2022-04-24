import { Formik, Form, Field } from "formik";
import { MailBase } from "../MailBase/MailBase";
import { renderToString } from "react-dom/server";
import { SignupSchema } from "./infra/ContactSchema";
import { getContactErrorTextResources } from "./infra/contact-resources";
import { getContactTextResources } from "../../utils/text-resources";

const baseUrl =
  "https://allow-cors-private.herokuapp.com/https://api.sendgrid.com/v3/mail/send";
const apiKey =
  "Bearer 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";

export interface MyFormValues {
  Name: string;
  Email: string;
  Subject: string;
  Message: string;
}

const getMailInput = (values: any): any => {
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
export const Contact = () => {
  const initialValues: MyFormValues = {
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="flex pb-4">
            <h3 data-aos="slide-down">Neem contact op</h3>
            <div className="header-bar" data-aos="slide-up" />
          </div>
        </div>
        <div className="col-12">
          <section className="text-block text-center pb-4" data-aos="slide-up">
            <article>
              <p>{getContactTextResources("ContactIntro")}</p>
            </article>
          </section>
        </div>
      </div>
      <Formik
        validateOnMount
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={(values: any, actions: any): void => {
          fetch(baseUrl, {
            method: "post",
            headers: {
              Authorization: apiKey,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(getMailInput(values)),
          });
          actions.setStatus({
            msg: "De e-mail is verstuurd, ik neem zo spoedig mogelijk contact met je op!",
          });
          actions.resetForm();
          setTimeout(() => {
            alert(getContactErrorTextResources("EmailSendMessage"));
          }, 1000);
        }}
      >
        {({ errors, touched, values }): any => (
          <Form>
            <div className="form-group form-row mb-3" data-aos="slide-in-right">
              <div className="col-12">
                <div
                  className={[
                    "input-group",
                    errors.Name && touched.Name ? "has-error" : "",
                  ].join(" ")}
                >
                  <span className="input-group-text" id="inputGroupPrepend">
                    <i className="fas fa-user" />
                  </span>
                  <Field
                    type="text"
                    className="form-control"
                    placeholder="Voor- en achternaam"
                    name="Name"
                    value={values.Name}
                  />
                </div>
                {errors.Name && touched.Name ? (
                  <div className="invalid-feedback">{errors.Name}</div>
                ) : null}
              </div>
            </div>
            <div className="form-group form-row mb-3" data-aos="slide-in-left">
              <div className="col-12">
                <div
                  className={[
                    "input-group",
                    errors.Email && touched.Email ? "has-error" : "",
                  ].join(" ")}
                >
                  <span className="input-group-text" id="inputGroupPrepend">
                    <i className="fas fa-envelope" />
                  </span>
                  <Field
                    type="email"
                    className="form-control"
                    placeholder="E-mailadres"
                    name="Email"
                    value={values.Email}
                  />
                </div>
                {errors.Email && touched.Email ? (
                  <div className="invalid-feedback">{errors.Email}</div>
                ) : null}
              </div>
            </div>
            <div className="form-group form-row mb-3" data-aos="slide-in-right">
              <div className="col-12">
                <div
                  className={[
                    "input-group",
                    errors.Subject && touched.Subject ? "has-error" : "",
                  ].join(" ")}
                >
                  <span className="input-group-text" id="inputGroupPrepend">
                    <i className="fas fa-comment-dots" />
                  </span>
                  <Field
                    type="text"
                    className="form-control"
                    placeholder="Onderwerp"
                    name="Subject"
                    value={values.Subject}
                  />
                </div>
                {errors.Subject && touched.Subject ? (
                  <div className="invalid-feedback">{errors.Subject}</div>
                ) : null}
              </div>
            </div>
            <div className="form-group form-row mb-3" data-aos="slide-in-left">
              <div className="col-12">
                <div
                  className={[
                    "input-group",
                    errors.Message && touched.Message ? "has-error" : "",
                  ].join(" ")}
                >
                  <span className="input-group-text">
                    <i className="fas fa-comments" />
                  </span>
                  <Field
                    type="text"
                    component="textarea"
                    className="form-control"
                    placeholder="Typ hier je bericht"
                    name="Message"
                    value={values.Message}
                  />
                </div>
                {errors.Message && touched.Message ? (
                  <div className="invalid-feedback">{errors.Message}</div>
                ) : null}
              </div>
            </div>
            <div
              className="d-flex flex-wrap justify-content-center"
              data-aos="fade-up"
            >
              <button
                type="submit"
                className="btn btn-primary-color"
                disabled={
                  !values.Name &&
                  !values.Email &&
                  !values.Subject &&
                  !values.Message
                }
              >
                Verzenden
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
