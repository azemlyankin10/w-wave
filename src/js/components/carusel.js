import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);
const swiper = new Swiper('.about__swiper', {
  navigation: {
    nextEl: '.about__swiper-btn-next',
    prevEl: '.about__swiper-btn-prev',
  },
  slidesPerView: 4,
  loop: true,
  spaceBetween: 30,

  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    1025: {
      slidesPerView: 4,
    }
  }
});
