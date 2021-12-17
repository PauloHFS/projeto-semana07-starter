window.onload = () => {
  document
    .querySelector('.button__solid')
    .addEventListener('click', () => (location.href = '../contato.html'));

  const burger_button = document.querySelector('.burger-button');
  const close_button = document.querySelector('.close-button');

  const mobile_navbar = document.querySelector('.mobile-navbar');

  burger_button.addEventListener('click', () => {
    burger_button.style.display = 'none';
    close_button.style.display = 'block';

    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = 'no';

    // mobile_navbar.style.display = 'flex';
    mobile_navbar.style.cssText = 'display:flex;flex-direction:column;';
  });

  close_button.addEventListener('click', () => {
    burger_button.style.display = 'block';
    close_button.style.display = 'none';

    document.documentElement.style.overflow = 'auto';
    document.body.scroll = 'yes';

    mobile_navbar.style.display = 'none';
  });
};
