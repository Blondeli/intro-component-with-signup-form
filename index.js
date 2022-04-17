// Create function to display error messages
function displayErrorMessage(event) {
  let errorArray = [];
  let correctArray = [];

  // Check First Name, Last Name, and Password
  let checkArray = ["first-name", "last-name", "password"]
  checkArray.forEach(element => {
    let checkValue = document.querySelector("form").elements[`${element}`].value;
    if (checkValue.length === 0) {
      errorArray.push(`${element}`);
    } else {
      correctArray.push(`${element}`);
    }
  })

  // Check Email
  let email = document.querySelector("form").elements["email"].value;
  if ((email.length === 0) || (!(email.includes("@")))) {
    errorArray.push("email");
  } else {
    correctArray.push("email");
  }

  // Display error messages and icons if input is wrong
  errorArray.forEach(element => {
    // Unhide error icon
    let errorIcon = document.querySelector(`#${element}-error-icon`);
    errorIcon.classList.remove("hide");

    // Unhide error message
    let errorMessage = document.querySelector(`#${element}-error-message`);
    errorMessage.classList.remove("hide");

    // Color input field border
    let inputField = document.querySelector(`#${element}`);
    inputField.style.border = "1px solid red";
  });

  // Hide error messages and icons if input is correct
  correctArray.forEach(element => {
    // Hide error icon
    let errorIcon = document.querySelector(`#${element}-error-icon`);
    errorIcon.classList.add("hide");

    // Hide error message
    let errorMessage = document.querySelector(`#${element}-error-message`);
    errorMessage.classList.add("hide");

    // Color input field border
    let inputField = document.querySelector(`#${element}`);
    inputField.style.border = "1px solid var(--border-color)";
  });

  // Prevent page from reloading if there is an error
  if (errorArray.length != 0) {
    event.preventDefault();
  }
}

// Add event listener for submit button
let submitBtn = document.querySelector("#submit-btn");
submitBtn.addEventListener("click", displayErrorMessage);