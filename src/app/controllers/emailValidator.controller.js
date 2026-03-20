import patternTester from "../utils/patternTester.js";
import regExStorage from "../utils/regExStorage.js";

export default () => {
  const emailInput = document.querySelector("input#email");
  emailInput.addEventListener("input", () => {
    let validationStatus = patternTester(emailInput, regExStorage["email"]);
    if (!validationStatus) {
      emailInput.setCustomValidity(
        "Your email address must be in the format example@example.com",
      );
      emailInput.reportValidity();
    } else {
      emailInput.setCustomValidity("");
      emailInput.reportValidity();
    }
  });
};
