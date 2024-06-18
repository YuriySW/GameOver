const items = document.querySelectorAll('.questions__item');
const textWrap = document.querySelectorAll('.questions__text-wrapp');
const purpleItems = document.querySelectorAll('.questions__items_svg-purple');
const whiteItems = document.querySelectorAll('.questions__items_svg-white');

purpleItems.forEach((item) => {
  item.addEventListener('click', function () {
    this.classList.remove('questions__items_svg-purple');

    this.classList.add('questions__items_svg-white', 'active');

    setTimeout(() => {
      this.classList.remove('questions__items_svg-white', 'active');
      this.classList.add('questions__items_svg-purple');
    }, 500);
  });
});

whiteItems.forEach((item) => {
  item.addEventListener('click', function () {
    this.classList.add('active');

    setTimeout(() => {
      this.classList.remove('active');
    }, 500);
  });
});

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
        // purpleItems.forEach((item) => item.blur());
        // whiteItems.forEach((item) => item.blur());
        purpleItems.forEach((item) => {
          setTimeout(() => {
            item.blur();
          }, 700);
        });

        whiteItems.forEach((item) => {
          setTimeout(() => {
            item.blur();
          }, 700);
        });
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
