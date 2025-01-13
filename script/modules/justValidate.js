// import {closeModal} from './modal.js';
// const justValidate = new JustValidate('.popup__form');
// const popupTitleModal = document.querySelector('.popup__title_modal');
// const inputTel = document.querySelector('.form__input_tel');
// const formFieldset = document.querySelector('.form__fieldset');

// const inputs = formFieldset.querySelectorAll(
//   '.form__input_tel, .form__input_name, .form__submit_modal'
// );

// justValidate
//   .addField('.form__input_name', [
//     {rule: 'minLength', value: 2, errorMessage: 'Имя должно быть не короче 2 символов'},
//   ])
//   .onSuccess(async (event) => {
//     const target = event.target;
//     try {
//       const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
//         name: target.name.value,
//         tel: inputTel.inputmask.unmaskedvalue(),
//       });
//       target.reset();

//       inputs.forEach((input) => (input.disabled = true));

//       formFieldset.setAttribute('aria-disabled', 'true');

//       popupTitleModal.textContent = `Номер заявки ${response.data.id}!`;
//       closeModal();
//     } catch (err) {
//       console.error(err);
//       target.reset();

//       inputs.forEach((input) => (input.disabled = false));

//       formFieldset.setAttribute('aria-disabled', 'false');

//       popupTitleModal.textContent = `Ошибка!`;
//       closeModal();
//     }
//   });

import {closeModal} from './modal.js';

const popupTitleModal = document.querySelector('.popup__title_modal');
const inputTel = document.querySelector('.form__input_tel');
const formFieldset = document.querySelector('.form__fieldset');
const submitButton = document.querySelector('.form__submit');
const justValidate = new JustValidate('.popup__form', {
  errorLabelStyle: {
    color: 'f0ffff',
    fontSize: '17px',
  },
  errorFieldCssClass: 'form__error',
});

justValidate
  .addField(
    '.form__input_name',
    [
      {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Имя должно быть не короче 2 символов',
      },
      {
        rule: 'required',
        errorMessage: 'Введите имя',
      },
      {
        rule: 'function',
        validator: (value) => {
          return value.trim().length >= 2;
        },
        errorMessage: 'Имя не должно состоять из пробелов в начале и конце',
      },
    ],
    {
      errorLabelCssClass: 'form__error-label',
      errorFieldCssClass: 'form__error-field',
    }
  )
  .addField(
    '.form__input_tel',
    [
      {
        rule: 'required',
        errorMessage: 'Введите номер телефона',
      },
      {
        rule: 'function',
        validator: (value) => {
          const unmaskedValue = inputTel.inputmask ? inputTel.inputmask.unmaskedvalue() : value;
          return unmaskedValue.length === 10;
        },
        errorMessage: 'Введите полный номер телефона',
      },
    ],
    {
      errorLabelCssClass: 'form__error-label',
      errorFieldCssClass: 'form__error-field',
    }
  )
  .onSuccess(async (event) => {
    const target = event.target;

    const isDisabled = formFieldset.querySelector('input').disabled;
    if (isDisabled) {
      return;
    }

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        name: target.name.value,
        tel: inputTel.inputmask.unmaskedvalue(),
      });
      target.reset();

      formFieldset.querySelectorAll('input, button').forEach((input) => (input.disabled = true));
      formFieldset.setAttribute('aria-disabled', 'true');

      popupTitleModal.textContent = `Номер заявки ${response.data.id}!`;
      closeModal();
    } catch (err) {
      console.error(err);

      formFieldset.querySelectorAll('input, button').forEach((input) => (input.disabled = true));
      formFieldset.setAttribute('aria-disabled', 'true');

      popupTitleModal.textContent = `Ошибка!`;
    }
  });

///

submitButton.addEventListener('click', (event) => {
  const isDisabled = formFieldset.querySelector('input').disabled;
  if (isDisabled) {
    event.preventDefault();
    return;
  }
});
