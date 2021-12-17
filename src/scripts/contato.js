window.onload = () => {
  const buttonEnviar = document.querySelector('.button');

  buttonEnviar.addEventListener('click', event => {
    event.preventDefault();

    const [nameInput, emailInput, mensageInput] =
      document.querySelectorAll('.input');

    const body = {
      [nameInput.name]: nameInput.value,
      [emailInput.name]: emailInput.value,
      [mensageInput.name]: mensageInput.value,
    };

    alert(JSON.stringify(body));
  });
};
