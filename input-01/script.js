const input = document.querySelector(".input__field");
const inputIcon = document.querySelector(".input__icon");

inputIcon.addEventListener("click", (event) => {
  event.preventDefault();

  inputIcon.setAttribute(
    "src",
    input.getAttribute("type") === "password" ? "eye-off.svg" : "eye.svg"
  );

  input.setAttribute(
    "type",
    input.getAttribute("type") === "password" ? "text" : "password"
  );
});
