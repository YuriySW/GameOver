const callbackBtn = document.querySelectorAll('.callback, .callback_burger-menu');
// const callbackBurgerMenu = document.querySelector('.callback_burger-menu');
const overlay = document.querySelector('.overlay');
const overlayShow = document.querySelector('.overlay_show');
const inputModal = document.querySelectorAll('.form__input');

export const closeModal = () => {
  overlay.addEventListener('click', (e) => {
    const target = e.target;
    if (target === overlay || target === target.closest('.popup__close-img')) {
      overlayShow.style.display = 'none';
    }
  });
};

const openModal = () => {
  callbackBtn.forEach((callbackBtn) => {
    callbackBtn.addEventListener('click', (e) => {
      inputModal.forEach((input) => (input.value = ''));

      setTimeout(() => {
        overlay.style.display = 'block';
      }, 500);
    });
  });
};

closeModal();
openModal();
