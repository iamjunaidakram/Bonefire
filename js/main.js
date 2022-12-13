
$( document ).ready(function() {
  $('.featured_slider').slick({

  infinite: true,
  speed: 300,
  arrows:true,
  autoplay:true,
  dots:true,
  slidesToShow: 1,
  adaptiveHeight: true,
  prevArrow : $('.previous-slide'),
  nextArrow : $('.next-slide'),
  appendDots : $('.dots')
});





$('.brand_slider').slick({
  dots: true,
    arrows:true,  
  prevArrow : $('.previous-slide'),
  nextArrow : $('.next-slide'),
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



$('.latest_slider').slick({
  dots: true,
  infinite: false,
  arrows:true,  
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
});