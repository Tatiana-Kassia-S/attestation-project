const passwordEl = document.querySelector('[name="password"]');
const retypePasswordEl = document.querySelector('[name="retype-password"]');
const emailEl = document.querySelector('[name="email"]');
const formEl = document.querySelector(".form-act");

retypePasswordEl.addEventListener("input", () => {
  if (retypePasswordEl.value !== passwordEl.value) {
    retypePasswordEl.style.border = "solid 2px red";
    passwordEl.style.border = "solid 2px red";
  } else {
    retypePasswordEl.style.border = "solid 2px green";
    passwordEl.style.border = "solid 2px green";
  }
});

formEl.addEventListener("submit", (event) => {
  if (emailEl.value === "") {
    emailEl.placeholder = "ВЫ НЕ ВВЕЛИ EMAIL!";
    event.preventDefault();
  }
});

const stars = document.querySelectorAll(".fa-star");

for (let i = 0; i < stars.length; i++) {
  stars[i].addEventListener("mouseover", function () {
    changeStarRating(i);
  });
}

function changeStarRating(num) {
  for (let i = 0; i <= num; i++) {
    stars[i].classList.add("golden");
  }
  for (let i = stars.length - 1; i > num; i--) {
    stars[i].classList.remove("golden");
  }
}

/* ВЕРСИЯ ДЛЯ МОБИЛЬНИКА */

const mobMenuBox = document.querySelector(".menu-box-mob");
const mobMenu = document
  .querySelector(".menu-sign-icon-wrap")
  .addEventListener("click", () => {
    mobMenuBox.classList.toggle("hidden");
  });
