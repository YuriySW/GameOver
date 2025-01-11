import {closeModal} from './modal.js';
const justValidate = new JustValidate('.popup__form');
const popupTitleModal = document.querySelector('.popup__title_modal');
const inputTel = document.querySelector('.form__input_tel');
const formFieldset = document.querySelector('.form__fieldset');

const inputs = formFieldset.querySelectorAll(
  '.form__input_tel, .form__input_name, .form__submit_modal'
);

justValidate
  .addField('.form__input_name', [
    {rule: 'minLength', value: 2, errorMessage: 'Имя должно быть не короче 2 символов'},
  ])
  .onSuccess(async (event) => {
    const target = event.target;
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        name: target.name.value,
        tel: inputTel.inputmask.unmaskedvalue(),
      });
      target.reset();

      inputs.forEach((input) => (input.disabled = true));

      formFieldset.setAttribute('aria-disabled', 'true');

      popupTitleModal.textContent = `Номер заявки ${response.data.id}!`;
      closeModal();
    } catch (err) {
      console.error(err);
      target.reset();

      inputs.forEach((input) => (input.disabled = false));

      formFieldset.setAttribute('aria-disabled', 'false');

      popupTitleModal.textContent = `Ошибка!`;
      closeModal();
    }
  });
