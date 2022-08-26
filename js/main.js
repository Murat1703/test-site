const selectSingle = document.querySelector('.__select');
const selectSingle_title = selectSingle.querySelector('.__select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
    if (selectSingle_title.textContent=="Английский"){
        window.location.href = 'index_en.html';
    } else {
        window.location.href = 'index_ru.html';
    }
  });
}
let Body = document.querySelector('body');
let menuBurger = document.querySelector('.burger');
let Burger = document.querySelector('.menu-burger');
menuBurger.addEventListener('click', ()=> {
 menuBurger.classList.toggle('_active');
 Body.classList.toggle('_active');
})

