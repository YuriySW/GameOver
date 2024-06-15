// const items = document.querySelectorAll('.questions__item ');
// const textWrap = document.querySelectorAll('.questions__text-wrapp');

// export const accOpen = () => {
//   items.forEach((btn, index) => {
//     btn.addEventListener('click', () => {
//       textWrap.forEach((el, i) => {
//         if (i !== index) {
//           el.classList.remove('questions__item_actv');
//           el.style.maxHeight = null;
//         }
//       });

//       const panel = textWrap[index];
//       const isActive = panel.classList.toggle('questions__item_actv');
//       if (isActive) {
//         panel.style.maxHeight = panel.scrollHeight + 'px';
//       } else {
//         panel.style.maxHeight = null;
//       }
//     });
//   });

//   document.addEventListener('click', (event) => {
//     if (!event.target.closest('.questions__item')) {
//       textWrap.forEach((el) => {
//         el.classList.remove('questions__item_actv');
//         el.style.maxHeight = null;
//       });
//     }
//   });
// };

// accOpen();

const items = document.querySelectorAll('.questions__item');
const textWrap = document.querySelectorAll('.questions__text-wrapp');
const purpleItems = document.querySelectorAll('.questions__items_svg-purple');
const whiteItems = document.querySelectorAll('.questions__items_svg-white');

export const accOpen = () => {
  items.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      textWrap.forEach((el, i) => {
        if (i !== index) {
          el.classList.remove('questions__item_actv');
          el.style.maxHeight = null;
        }
      });

      const panel = textWrap[index];
      const isActive = panel.classList.toggle('questions__item_actv');
      if (isActive) {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      } else {
        panel.style.maxHeight = null;
        purpleItems.forEach((item) => item.blur());
        whiteItems.forEach((item) => item.blur());
      }
    });
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.questions__item')) {
      textWrap.forEach((el) => {
        el.classList.remove('questions__item_actv');
        el.style.maxHeight = null;
      });
    }
  });
};

accOpen();
