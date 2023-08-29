const loginForm = document.querySelector(".login-form");

function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const email = form.elements.email;
  const password = form.elements.password;

  if (email.value === "" || password.value === "") {
    return alert("You should fill in all the fields.");
  }

  const outputData = {
    [email.name]: email.value,
    [password.name]: password.value,
  };
  console.log(outputData);
  form.reset();
}

loginForm.addEventListener("submit", handleSubmit);
