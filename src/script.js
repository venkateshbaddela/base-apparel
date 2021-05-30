const btn = document.querySelector(".section__form-btn");
const email = document.querySelector(".section__form-input");
const err = document.querySelector(".section__form-error");
const msg = document.querySelector(".section__form-label");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    err.classList.add("active");
    msg.classList.add("active");
  } else {
    err.classList.remove("active");
    msg.classList.remove("active");
  }
});
