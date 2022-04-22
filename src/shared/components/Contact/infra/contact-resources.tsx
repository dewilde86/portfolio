import { createGetTextResources } from "../../../utils/text-resources-algemeen";

export const getContactErrorTextResources = createGetTextResources({
  ErrorName: "Vul een naam in.",
  ErrorEmail: "Vul een geldig e-mailadres in.",
  ErrorSubject: "Vul een onderwerp in.",
  ErrorMessage: "Vul een bericht in.",
  EmailSendMessage: "De e-mail is verstuurd, ik neem zo spoedig mogelijk contact met je op!",
});
