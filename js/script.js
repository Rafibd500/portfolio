$('.service_item_part').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<i class="fas fa-long-arrow-alt-left prevarrow"></i>',
  nextArrow: '<i class="fas fa-long-arrow-alt-right nextarrow"></i>',
});





// ========================


var containerEl = document.querySelector('.portfolio-item-part');

var mixer = mixitup(containerEl);




// testimonial slider ===============
$('.testimonial-item-part').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: '<i class="fas fa-long-arrow-alt-left prevarrow"></i>',
  nextArrow: '<i class="fas fa-long-arrow-alt-right nextarrow"></i>',
});