var feedbackForm = document.querySelector(".feedback__form");

if (feedbackForm) {
  var firstName = feedbackForm.querySelector("[name=first-name]");
  var secondName = feedbackForm.querySelector("[name=second-name]");
  var tel = feedbackForm.querySelector("[name=tel]");
  var email = feedbackForm.querySelector("[name=email]");
  var modalFailure = document.querySelector(".modal-failure");
  var modalSuccess = document.querySelector(".modal-success");
  var modalFailureButton = document.querySelector(".modal-failure__button");
  var modalSuccessButton = document.querySelector(".modal-success__button");

  feedbackForm.addEventListener("submit", function(event) {
    if (!firstName.value || !secondName.value || !tel.value || !email.value) {
      event.preventDefault();
      modalFailure.classList.remove("display-none");
    } else {
      event.preventDefault();
      modalSuccess.classList.remove("display-none");
    }
  });


  modalFailureButton.addEventListener("click", function(event) {
    event.preventDefault();
    modalFailure.classList.add("display-none");
  });


  modalSuccessButton.addEventListener("click", function(event) {
    event.preventDefault();
    modalSuccess.classList.add("display-none");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (!modalFailure.classList.contains("display-none")) {
        modalFailure.classList.add("display-none");
      }
      if (!modalSuccess.classList.contains("display-none")) {
        modalSuccess.classList.add("display-none");
      }
    }
  });
}
