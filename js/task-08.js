const form = document.querySelector(".login-form");
const button = document.querySelector('button [type="submit"]');

const onFormSubmit = (event) => {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email === "" || password === "") {
    alert("Заполните, пожалуйста, все поля");
  }

  const user = {};
  user.email = email;
  user.password = password;
  console.log(user);
  event.currentTarget.reset();
};

form.addEventListener("submit", onFormSubmit);
