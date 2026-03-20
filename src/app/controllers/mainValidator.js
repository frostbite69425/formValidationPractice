import emailValidatorController from "./emailValidator.controller.js";
import postalCodeValidatorController from "./postalCodeValidator.controller.js";
import passwordValidatorController from "./passwordValidator.controller.js";
import emptyFieldValidatorController from "./emptyFieldValidator.controller.js";

export default () => {
  emailValidatorController();
  postalCodeValidatorController();
  passwordValidatorController();
  emptyFieldValidatorController();
};
