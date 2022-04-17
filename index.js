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
  let emailNotValid;
  if (email.length === 0) {
    errorArray.push("email");
    emailNotValid = false;
  } else if (!(email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))) {
    errorArray.push("email");
    emailNotValid = true;
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

    // Change email error message depending on type of error
    if (element === "email") {
      if (emailNotValid) {
        errorMessage.innerHTML = "Looks like this is not an email";
      } else {
        errorMessage.innerHTML = "Email cannot be empty";
      }
    }
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