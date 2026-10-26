const form = document.getElementById("inquiryForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  message.textContent =
    "Demo only: Your inquiry form is valid!";
  message.className = "mt-3 mb-0 text-success fw-bold";

  form.reset();
});
