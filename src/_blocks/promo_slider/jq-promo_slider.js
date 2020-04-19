$(document).ready(function() {
  $('.prommo-slider').slick({
    infinite: true,
    dots: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dotsClass: "promo-slider__dots",
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false
        }
      }
    ]
  });
});
