import { createGetTextResources } from "../../../utils/text-resources-algemeen";

export const getContactErrorTextResources = createGetTextResources({
  ErrorName: "Vul een naam in.",
  ErrorEmail: "Vul een geldig e-mailadres in.",
  ErrorSubject: "Vul een onderwerp in.",
  ErrorMessage: "Vul een bericht in.",
  EmailSuccessMessage:
    "Bedankt voor het invullen van het formulier, Ik zal je bericht bekijken en neem zo snel mogelijk contact met je op!",
  EmailErrorMessage:
    "Er is iets verkeerd gegaan, de e-mail is niet verzonden. Probeer het later nog een keer.",
});
