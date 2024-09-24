
const notifyBtn = document.getElementById("submit-button");
const error1 = document.getElementById("error1");
const error2 = document.getElementById("error2");
const emailInput = document.getElementById("email");

// function isValidEmail(email) {}

/*  notifyBtn.addEventListener("click", () => {
  input = emailInput.value;
  if (input == "") {
    error1.style.display = "block";
  } else if (!/\S+@\S+\.\S+/.test(input)) {
    error2.style.display = "block";
  } else if (/\S+@\S+\.\S+/.test(input)) {
    alert("Thank you for subscribing");
  }
});*/
function isValidEmail(email) {}
notifyBtn.addEventListener("click", () => {
    input = emailInput.value;
    if (input == "") {
        error1.style.display = "block";
    } else if (!/\S+@\S+\.\S+/.test(input)) {
        error2.style.display = "block";
    } else if (/\S+@\S+\.\S+/.test(input)) {
        alert("Thank you for subscribing");
    }
})