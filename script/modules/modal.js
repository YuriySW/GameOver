const callbackBtn = document.querySelectorAll('.callback, .callback_burger-menu');
// const callbackBurgerMenu = document.querySelector('.callback_burger-menu');
const overlay = document.querySelector('.overlay');
const overlayShow = document.querySelector('.overlay_show');
const inputModal = document.querySelectorAll('.form__input');
const formFieldset = document.querySelector('.form__fieldset');
const popupTitleModal = document.querySelector('.popup__title_modal');
const inputs = formFieldset.querySelectorAll(
  '.form__input_tel, .form__input_name, .form__submit_modal'
);

export const closeModal = () => {
  overlay.addEventListener('click', (e) => {
    const target = e.target;
    if (target === overlay || target === target.closest('.popup__close-img')) {
      overlayShow.style.display = 'none';
      //
      inputs.forEach((input) => (input.disabled = false));
      popupTitleModal.textContent = 'Заказать звонок';
      formFieldset.setAttribute('aria-disabled', 'false');
      //
      const justValidateError = document.querySelectorAll('.just-validate-error-label');
      justValidateError.forEach((errorLabel) => {
        errorLabel.remove();
      });
    }
  });
};

const openModal = () => {
  callbackBtn.forEach((callbackBtn) => {
    callbackBtn.addEventListener('click', (e) => {
      inputModal.forEach((input) => (input.value = ''));

      setTimeout(() => {
        overlay.style.display = 'block';
      }, 400);
    });
  });
};

closeModal();
openModal();
