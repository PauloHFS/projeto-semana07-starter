const form = document.querySelector('.contato-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const [nomeInput, emailInput, mensageInput] = event.target;

  const body = {
    [nomeInput.name]: nomeInput.value,
    [emailInput.name]: emailInput.value,
    [mensageInput.name]: mensageInput.value,
  };

  alert(JSON.stringify(body));
});
