
const brandsSliderClass = document.querySelector('.brands__slider');
const devicesSliderClass = document.querySelector('.devices__slider');
const pricesSliderClass = document.querySelector('.prices__slider');
const breakpoint = window.matchMedia( '(max-width:768px)' );

let brandsSwiper;
let devicesSwiper;
let pricesSwiper;

function breakpointChecker() {
  if (breakpoint.matches) {
    createSwiper()
  } else if (!breakpoint.matches) {
    if (brandsSwiper !== undefined || devicesSwiper !== undefined || pricesSwiper !== undefined) {
      brandsSwiper.destroy(true, true)
      devicesSwiper.destroy(true, true)
      pricesSwiper.destroy(true, true)
    }
  }
};

function createSwiper() {

  brandsSwiper = new Swiper (brandsSliderClass, {
    loop: false,
    direction: 'horizontal',
    slidesPerView: 'auto',
    grabCursor: true,
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true',
    },
  });

  devicesSwiper = new Swiper (devicesSliderClass, {
    loop: false,
    direction: 'horizontal',
    slidesPerView: 'auto',
    grabCursor: true,
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true',
    },
  });

  pricesSwiper = new Swiper (pricesSliderClass, {
    loop: false,
    direction: 'horizontal',
    slidesPerView: 'auto',
    grabCursor: true,
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true',
    },
  });

};

breakpoint.addListener(breakpointChecker);
breakpointChecker();
