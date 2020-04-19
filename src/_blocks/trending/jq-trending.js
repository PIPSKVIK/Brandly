$(document).ready(function() {
  $('.trending-slider__slick').slick({
    infinite: true,
    dots: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dotsClass: "trending__dots",
    autoplay: false,
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
