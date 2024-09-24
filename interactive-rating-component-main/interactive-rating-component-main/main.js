const feedbackDiv = document.querySelector(".feedback")
const thanksDiv = document.querySelector(".thanks")
const feedbackForm = document.querySelector(".feedback__form")
const submitBtn = document.querySelector('.form__btn')

function handleSubmit(event) {
    event.preventDefault();
    var feedbackValue = document.querySelector('input[name = "feedback"]:checked');

    if (feedbackValue) {
        feedbackDiv.classList.toggle('hidden');
        thanksDiv.classList.toggle('hidden');

        var selectedValue = feedbackValue.value;
        document.querySelector('.thanks__subtitle').textContent = `You selected ${selectedValue} out of 5`;
        // document.querySelector('.thanks__subtitle').textContent = `You selected ${selectedValue} out of 5`;

    } else {
        window.alert("Please choose an option");
    }
}
// submitBtn.addEventListener('submit' , handelSubmit());

/* var feedbackForm = document.querySelector('.feedback__form');
var feedbackDiv = document.querySelector('.feedback');
var thanksDiv = document.querySelector('.thanks');

function handleSubmit(event) {
  event.preventDefault();

  var feedbackValue = document.querySelector('input[type = radio]:checked');

  if (feedbackValue) {
    feedbackDiv.classList.toggle('hidden');
    thanksDiv.classList.toggle('hidden');
    
    var selectedValue = feedbackValue.value;

    document.querySelector('.thanks__subtitle').textContent = `You selected ${selectedValue} out of 5`;

  } else {
    window.alert("please choose an option.");
  }
}
*/

feedbackForm.addEventListener('submit', handleSubmit);