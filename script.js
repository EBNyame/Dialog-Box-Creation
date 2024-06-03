'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', function () {
    console.log('Button Clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    // closing the modal
    btnCloseModal.addEventListener('click', function () {
      modal.classList.add('hidden');
      overlay.classList.add('hidden');
    });

    // clicking empty space to close the modal
    overlay.addEventListener('click', function () {
      modal.classList.add('hidden');
      overlay.classList.add('hidden');
    });
  });
