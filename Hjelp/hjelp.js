const form = document.querySelector('form');
const urlInput = document.querySelector('#url-input');
const checkButton = document.querySelector('#check-button');
const resultDiv = document.querySelector('#result');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const url = urlInput.value;
  if (url) {
    checkUrl(url);
  }
});





const menuToggle = document.querySelector('.toggle');
    const showcase = document.querySelector('.showcase');

    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      showcase.classList.toggle('active');
    })
    



    