export const menuBut = document.querySelector('.menu-but');
export const svgCloseBut = document.querySelector('.menu-but-sub');
export const headerListBurgerMenu = document.querySelector('.header__list-burger-menu');
export const callbackBurgerMenu = document.querySelector('.callback_burger-menu');
export const callbackBtnUp = document.querySelector('.callback_off');
export const overlayBurgerMenu = document.querySelector('.overlay-burger-menu');
const menuButUp = document.querySelector('.menu-but-up');

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

  if (window.innerWidth >= 896) {
    menuBut.style.display = 'none';
  }

  if (window.innerWidth < 896) {
    menuBut.style.display = 'block';
  }

  animate(overlayBurgerMenu, 'opacity', 1, 0, 400, () => {
    headerListBurgerMenu.style.display = 'none';
    overlayBurgerMenu.style.display = 'none';
    callbackBurgerMenu.style.display = 'none';
  });
};

const openMenu = () => {
  menuBut.style.display = 'none';
  svgCloseBut.style.display = 'block';

  headerListBurgerMenu.style.display = 'block';
  overlayBurgerMenu.style.display = 'block';

  animate(overlayBurgerMenu, 'opacity', 0, 1, 400, () => {
    callbackBurgerMenu.style.display = 'block';
  });
};

document.addEventListener('click', (event) => {
  const target = event.target;

  if (!overlayBurgerMenu.contains(target) && target !== menuBut) {
    closedMenu();
  }
});

overlayBurgerMenu.addEventListener('click', (event) => {
  const target = event.target;

  if (target === overlayBurgerMenu) {
    closedMenu();
  }
});

svgCloseBut.addEventListener('click', () => closedMenu());
menuBut.addEventListener('click', () => openMenu());
callbackBtnUp.addEventListener('click', () => closedMenu());
