window.onload = () => {
  const buttonContato = document.querySelector('.button__solid');

  buttonContato.addEventListener(
    'click',
    () => (location.href = '../contato.html')
  );
};
