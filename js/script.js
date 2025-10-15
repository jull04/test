const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');
const rangeInput = document.querySelector('.form__range');
const rangeValue = document.querySelector('.form__range-value');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('header__nav--active');
  document.body.classList.toggle('no-scroll'); 
});

if (rangeInput && rangeValue) {
  rangeInput.addEventListener('input', () => {
    rangeValue.textContent = `${rangeInput.value}%`;
  });
}
