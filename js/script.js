$(window).scroll(function(){
  $scrollamount = $(window).scrollTop();
  if($scrollamount > 500){
    $(".menu").addClass("fixed");
  }
})



// banner slider
$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    fade:true,
    prevArrow: '<i class="fa fa-arrow-circle-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-arrow-circle-right next" aria-hidden="true"></i>',
  });

  // venubox
  $('.venobox').venobox();


  // service slider
  $('.service-slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    centerMode: true,
    centerPadding:0,
    prevArrow: '<i class="fa fa-arrow-circle-up sprev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-arrow-circle-down snext" aria-hidden="true"></i>',
  });


  // testi slider
  $('.testi-slider .left').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    centerMode: true,
    centerPadding:0,
    prevArrow: '<i class="fa fa-arrow-circle-up sprev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-arrow-circle-down snext" aria-hidden="true"></i>',
    asNavFor: '.testi-slider .right'
  });


  $('.testi-slider .right').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // vertical: true,
    // centerMode: true,
    // centerPadding:0,
    // fade: true,
    arrows: false,
    asNavFor: '.testi-slider .left'
  });


  // counter up js
  $('.counter').counterUp({
    delay: 10,
    time: 1000
});