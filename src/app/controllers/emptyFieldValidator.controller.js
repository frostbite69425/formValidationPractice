export default () => {
  const emailInput = document.querySelector("input#email");
  const postalInput = document.querySelector("input#postalCode");
  const passwordInput = document.querySelector("input#password");
  const passwordConfirmInput = document.querySelector("input#passwordConfirm");

  const submitButton = document.querySelector("button#submit");

  const inputArr = [
    emailInput,
    postalInput,
    passwordInput,
    passwordConfirmInput,
  ];

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    let correctForm = false;

    for (const inputField of inputArr) {
      if (inputField.value == "") {
        correctForm = false;
        inputField.setCustomValidity("This cannot be empty");
        inputField.reportValidity();
        return;
      } else if (inputField.checkValidity() == false) {
        inputField.reportValidity();
        correctForm = false;
        return;
      } else {
        inputField.setCustomValidity("");
        inputField.reportValidity();
        correctForm = true;
      }
    }

    if (correctForm === true) {
      const form = document.querySelector("form.test-form");
      form.innerHTML = "Good Job! High five! ✋";
    }
  });
};
