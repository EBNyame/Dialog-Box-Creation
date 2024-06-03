'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
console.log(btnsOpenModal);

// *******Refactoring the code********

// for opening the modal
const openModal = function () {
  console.log('Button Clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  // closing the modal
};

// for closing modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener(
  'click',
  closeModal
  //   modal.classList.add('hidden');
  //   overlay.classList.add('hidden');
);

// clicking empty space to close the modal
overlay.addEventListener(
  'click',
  closeModal
  //   modal.classList.add('hidden');
  //   overlay.classList.add('hidden');
);

//   adding key events
document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
