import patternTester from "../utils/patternTester.js";
import regExStorage from "../utils/regExStorage.js";

export default () => {
  const passwordInput = document.querySelector("input#password");
  const confirmPasswordInput = document.querySelector("input#passwordConfirm");

  passwordInput.addEventListener("input", () => {
    let validationStatus = patternTester(
      passwordInput,
      regExStorage["password"],
    );

    if (!validationStatus) {
      passwordInput.setCustomValidity(
        "Your password needs to be 8 - 15 characters long and must have an uppercase letter, a lowercase letter, a number and a special character.",
      );
      passwordInput.reportValidity();
    } else {
      passwordInput.setCustomValidity("");
      passwordInput.reportValidity();
    }
  });

  confirmPasswordInput.addEventListener("change", () => {
    const confirmPasswordInputValue = confirmPasswordInput.value;
    const passwordValue = passwordInput.value;

    if (!(confirmPasswordInputValue == passwordValue)) {
      confirmPasswordInput.setCustomValidity("The passwords do not match!");
      confirmPasswordInput.reportValidity();
    } else {
      confirmPasswordInput.setCustomValidity("");
      confirmPasswordInput.reportValidity();
    }
  });
};
