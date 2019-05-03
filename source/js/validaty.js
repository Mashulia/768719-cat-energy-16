var button = document.querySelector(".form__button");
var input = document.querySelectorAll("input[required]");
var icon = document.querySelectorAll(".input__icon")

button.addEventListener("click", function () {
  for (var i = 0; i < input.length; i++) {
    if (!input[i].value) {
      input[i].classList.add("input--error");
    }
  }

  for (var j = 0; j < icon.length; j++) {
    if (!input[j].value) {
      icon[j].classList.add("input__icon--error");
    }
  }
});
