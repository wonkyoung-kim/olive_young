// main-slide
var mainSwiper = new Swiper(".main-slide", {
  speed:300,
  parallax: true,
  pagination: {
    el: ".fraction",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

mainSwiper.on('slideNextTransitionEnd',function(){
  active = this.realIndex;
  console.log(active)
  this.slides.forEach(element => {
    element.childNodes[1].dataset.swiperParallaxX = '0';
  });
  this.slides[active].childNodes[1].dataset.swiperParallaxX = '100%'
})

mainSwiper.on('slidePrevTransitionEnd',function(){
  active = this.realIndex;
  this.slides.forEach(element => {
    element.childNodes[1].dataset.swiperParallaxX = '0';
  });
  this.slides[active].childNodes[1].dataset.swiperParallaxX = '100%'
})


// quick-menu-slide
var swiper = new Swiper(".quick-menu-slide", {
  slidesPerView: 'auto',
  spaceBetween: 14,
});

// main-banner-slide
var swiper = new Swiper(".main-banner-slide", {
});

// category-list
var swiper = new Swiper(".category-list", {
  slidesPerView: 'auto',
  spaceBetween: 18,
});

// popular-slide
var swiper = new Swiper(".popular-slide", {
  pagination: {
    el: ".fraction",
    type: "fraction",
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});

// banner-slide
var swiper = new Swiper(".banner-slide", {
  pagination: {
    el: ".pagination",
  },
});

// healthy-slide
var swiper = new Swiper(".healthy-slide", {
  slidesPerView: 'auto',
  spaceBetween: 15,
});

// product-slide
var swiper = new Swiper(".product-slide", {
  slidesPerView: 'auto',
  spaceBetween: 8,
});


// footer-addr
$('.footer .info-area').click(function(){
  if($('.addr').hasClass('on')) {
    $('.addr').removeClass('on');
  } else {
    $('.addr').addClass('on');
  }
})

// footer-nav 
let lastScrT = 0;
let delta = 15;
$(window).scroll(function(){
  let scrT = $(window).scrollTop();
    
  if(Math.abs(lastScrT - scrT) <= delta) {
    return;
  }
  
  if((scrT>lastScrT) && (lastScrT>0)) {
    $('.footer-nav').removeClass('on');
  } else {
    $('.footer-nav').addClass('on');
  }

  lastScrT = scrT;
})
// btn-top
$('.btn-top').click(function(){
  $('html, body').animate({scrollTop: 0}, 400);
})

// btn-tab
let num1 = 1;
let num2 = 1;
let num3 = 1;

$('.btn-tab').click(function(){
  const target = $(this).data('target');
  const list1 = $('.sc-related .product-list');
  const list2 = $('.sc-curation .product-list');
  const list3 = $('.sc-keyword .keyword-list');
  num1++;
  num2++;
  num3++;
  console.log(target)
  if(target == 'btnTab1') {
    if(num1 <= list1.length) {
      $(this).children().children('.current').html(num1);
      $(this).siblings('.product-list').removeClass('active');
      $(this).siblings('.product-list:nth-of-type('+ num1 +')').addClass('active');
    } else {
      num1 = 1;
      $(this).children().children('.current').html(num1);
      $(this).siblings('.product-list').removeClass('active');
      $(this).siblings('.product-list:nth-of-type('+ num1 +')').addClass('active');
    }
  } else if(target == 'btnTab2') {
    if(num2 <= list2.length) {
      $(this).children().children('.current').html(num2);
      $(this).siblings('.product-list').removeClass('active');
      $(this).siblings('.product-list:nth-of-type('+ num2 +')').addClass('active');
    } else {
      num2 = 1;
      $(this).children().children('.current').html(num2);
      $(this).siblings('.product-list').removeClass('active');
      $(this).siblings('.product-list:nth-of-type('+ num2 +')').addClass('active');
    }
  } else {
    if(num3 <= list3.length) {
      $(this).children().children('.current').html(num3);
      $(this).siblings('.keyword-list').removeClass('active');
      $(this).siblings('.keyword-list:nth-of-type('+ num3 +')').addClass('active');
    } else {
      num3 = 1;
      $(this).children().children('.current').html(num3);
      $(this).siblings('.keyword-list').removeClass('active');
      $(this).siblings('.keyword-list:nth-of-type('+ num3 +')').addClass('active');
    }
  }
})

// sc-category
$('.product-item:nth-child(1) .rank-title').siblings('.rank-box').css('display','block')

$('.rank-title').click(function(e){
  e.preventDefault();
  
  if($(this).hasClass('on')) {
    $('.rank-title').removeClass('on');
    $(this).siblings('.rank-box').slideUp(200);
  } else {
    $('.rank-title').removeClass('on').siblings('.rank-box').slideUp(200);
    $(this).addClass('on').siblings('.rank-box').slideDown(200);
  }
  
})

// console.log($('.category-list').siblings().children('.product-item').length);
let length= $('.category-list').siblings().children('.product-item').length;
let number = 0;

// setInterval(function(){
  
//   number++;
//   // console.log(number)
//   // $('.category-list').siblings().children('.product-item')[number].css('display','block');
//   // if()
//   console.log( $('.category-list')
//   .siblings().children(`.product-item:nth-child(${number})`)
//   .children('rank-title').addClass('on'));

// },3000)


$('.sc-popular .popular-item').click(function(e){
  e.preventDefault();

  target = $(this).data('target');

  $(this).addClass('active').siblings().removeClass('active');
  $(target).addClass('active').siblings().removeClass('active');
})


$('.sc-attention .tab-item ').click(function(e){
  e.preventDefault();

  target = $(this).data('target');

  $(this).addClass('active').siblings().removeClass('active');
  $(target).addClass('active').siblings().removeClass('active');
})