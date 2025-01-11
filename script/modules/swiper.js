const swiper = new Swiper('.swiper-container', {
  autoplay: {
    delay: 3000,
  },
  speed: 1000,
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
