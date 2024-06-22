// let menuBut = document.querySelector('.menu-but');
// const headerListBurgerMenu = document.querySelector('.header__list-burger-menu');
// const svgCloseBut = document.querySelector('.menu-but-sub');
// const main = document.querySelector('main');
// const callbackBurgerMenu = document.querySelector('.callback_burger-menu');
// const overlayBurgerMenu = document.querySelector('.overlay_burger-menu');

// const closedMenu = () => {
//   svgCloseBut.style.display = 'none';
//   menuBut.style.display = 'block';
//   headerListBurgerMenu.style.display = 'none';
//   callbackBurgerMenu.style.display = 'none';
// };

// menuBut.addEventListener('click', () => {
//   menuBut.style.display = 'none';
//   svgCloseBut.style.display = 'block';
//   headerListBurgerMenu.style.display = 'block';
//   overlayBurgerMenu.style.display = 'block';

//   overlayBurgerMenu.style.opacity = '1';
//   callbackBurgerMenu.style.display = 'block';
// });

// svgCloseBut.addEventListener('click', () => closedMenu());

// main.addEventListener('click', () => closedMenu());

const menuBut = document.querySelector('.menu-but');
const headerListBurgerMenu = document.querySelector('.header__list-burger-menu');
const svgCloseBut = document.querySelector('.menu-but-sub');
const main = document.querySelector('main');
const callbackBurgerMenu = document.querySelector('.callback_burger-menu');
const overlayBurgerMenu = document.querySelector('.overlay-burger-menu');
const callbackBtnUp = document.querySelector('.callback_off');

export const animate = (element, property, startValue, endValue, duration, callback) => {
  let start = null;

  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const percent = Math.min(progress / duration, 1);

    element.style[property] = startValue + (endValue - startValue) * percent;

    if (progress < duration) {
      requestAnimationFrame(step);
    } else {
      if (callback) callback();
    }
  };

  requestAnimationFrame(step);
};

const closedMenu = () => {
  svgCloseBut.style.display = 'none';
  menuBut.style.display = 'block';
  animate(overlayBurgerMenu, 'opacity', 1, 0, 600, () => {
    headerListBurgerMenu.style.display = 'none';
    overlayBurgerMenu.style.display = 'none';
    callbackBurgerMenu.style.display = 'none';
  });
};

menuBut.addEventListener('click', () => {
  menuBut.style.display = 'none';
  svgCloseBut.style.display = 'block';
  headerListBurgerMenu.style.display = 'block';
  overlayBurgerMenu.style.display = 'block';

  animate(overlayBurgerMenu, 'opacity', 0, 1, 600, () => {
    callbackBurgerMenu.style.display = 'block';
  });
});

svgCloseBut.addEventListener('click', () => closedMenu());

main.addEventListener('click', () => closedMenu());

callbackBtnUp.addEventListener('click', () => closedMenu());
