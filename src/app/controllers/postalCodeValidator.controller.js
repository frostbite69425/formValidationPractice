import patternTester from "../utils/patternTester.js";
import regExStorage from "../utils/regExStorage.js";

export default () => {
  const countrySelectElement = document.querySelector("select#userCountry");
  const postalCodeInput = document.querySelector("input#postalCode");
  let selectedCountry = countrySelectElement.value;

  function postValidationChecker() {
    let validationStatus = patternTester(
      postalCodeInput,
      regExStorage["post"][selectedCountry][0],
    );
    if (!validationStatus) {
      postalCodeInput.setCustomValidity(
        `Please enter the postal code in the following format: ${regExStorage["post"][selectedCountry][1]}.`,
      );
      postalCodeInput.reportValidity();
    } else {
      postalCodeInput.setCustomValidity("");
      postalCodeInput.reportValidity();
    }
  }

  countrySelectElement.addEventListener("change", () => {
    selectedCountry = countrySelectElement.value;

    postValidationChecker();
  });

  postalCodeInput.addEventListener("change", () => {
    postValidationChecker();
  });
};
