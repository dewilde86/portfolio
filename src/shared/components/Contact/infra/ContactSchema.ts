import * as Yup from "yup";
import { getContactErrorTextResources } from "./contact-resources";

export const SignupSchema = Yup.object().shape({
  Name: Yup.string()
    .min(2, getContactErrorTextResources("ErrorMinLength").replace("{lengte}", "2 tekens"))
    .max(100, getContactErrorTextResources("ErrorMaxLength").replace("{lengte}", "100 tekens"))
    .required(getContactErrorTextResources("ErrorName")),
  Email: Yup.string()
    .email(getContactErrorTextResources("ErrorEmail"))
    .required(getContactErrorTextResources("ErrorEmail")),
  Subject: Yup.string()
    .min(2, getContactErrorTextResources("ErrorMinLength").replace("{lengte}", "2 tekens"))
    .max(50, getContactErrorTextResources("ErrorMaxLength").replace("{lengte}", "50 tekens"))
    .required(getContactErrorTextResources("ErrorSubject")),
  Message: Yup.string()
    .min(2, getContactErrorTextResources("ErrorMinLength").replace("{lengte}", "2 tekens"))
    .max(500, getContactErrorTextResources("ErrorMaxLength").replace("{lengte}", "500 tekens"))
    .required(getContactErrorTextResources("ErrorMessage")),
});
