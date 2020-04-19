$(document).ready(function() {
  $('.blog-slider').slick({
    infinite: true,
    dots: false,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    prevArrow: document.querySelector('.blog-arrow__left'),
    nextArrow: document.querySelector('.blog-arrow__right'),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

