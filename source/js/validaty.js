var button = document.querySelector(".form__button");
var input = document.querySelectorAll("input[required]");

button.addEventListener("click", function () {
  for (var i = 0; i < input.length; i++) {
    if (!input[i].value) {
      input[i].classList.add("input__error");
      alert("Заполните обязательные поля")
    }
  }
});
