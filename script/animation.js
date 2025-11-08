// animasi toggle menu
const toggleActive = document.querySelector('.navigasi-container');
const box1 = document.querySelector('#menu');

box1.addEventListener('click', () => {
    console.log('clicked')
  toggleActive.classList.toggle('active');
});  