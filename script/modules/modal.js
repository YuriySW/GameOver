const callbackBtn = document.querySelector('.callback');
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

export const openModal = () => {
  callbackBtn.addEventListener('click', (e) => {
    const target = e.target;
    if (target === callbackBtn) {
      inputModal.forEach((input) => (input.value = ''));
      overlay.style.display = 'block';
    }
  });
};

closeModal();
openModal();
