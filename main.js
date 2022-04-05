$('.slide1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 3000,
    asNavFor: '.slide2',
    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next'),
  });
  $('.slide2').slick({
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    pauseOnHover: true,
    asNavFor: '.slide1',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    pauseOnFocus: true
  });
