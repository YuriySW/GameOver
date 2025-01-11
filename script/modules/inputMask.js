const inputTel = document.querySelector('.form__input_tel');
const telMask = new Inputmask('+7(999)-999-99-99');

telMask.mask(inputTel);
