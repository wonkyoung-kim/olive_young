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
  on: {
    // 패럴럭스효과
    slideNextTransitionEnd : function(){
      active = this.realIndex;
      console.log(this.slides)
      this.slides.forEach(element => {
        element.childNodes[1].dataset.swiperParallaxX = '0';
      });
      this.slides[active].childNodes[1].dataset.swiperParallaxX = '100%';
    },
    slidePrevTransitionEnd : function(){
      active = this.realIndex;
      this.slides.forEach(element => {
        element.childNodes[1].dataset.swiperParallaxX = '0';
      });
      this.slides[active].childNodes[1].dataset.swiperParallaxX = '100%'
    },
    // 텍스트 효과
    slideNextTransitionStart : function(){
      active = this.realIndex;
      this.slides.forEach(element => {
        element.classList.remove('aniTxtL');
      });
      this.slides[active].classList.add('aniTxtR')
    },
    slidePrevTransitionStart : function(){
      active = this.realIndex;
      this.slides.forEach(element => {
        element.classList.remove('aniTxtR');
      });
      this.slides[active].classList.add('aniTxtL')
    },
  }
});

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

$('.btn-like').click(function(){
  if($(this).hasClass('on')) {
    $(this).removeClass('on');
  } else {
    $(this).addClass('on');
  }
})

// btn-tab
let count1 = 1;
let count2 = 1;
let count3 = 1;

$('.btn-tab').click(function(){
  const target = $(this).data('target');
  const list1 = $('.sc-related .product-list');
  const list2 = $('.sc-curation .product-list');
  const list3 = $('.sc-keyword .keyword-list');

  if(target == 'btnTab1') {
    count1++;
    if(count1 <= list1.length) {
      $(this).children().children('.current').html(count1);
      $(this).siblings('.product-list').removeClass('active');
      $(this).siblings('.product-list:nth-of-type('+ count1 +')').addClass('active');
    } else {
      count1 = 1;
      $(this).children().children('.current').html(count1);
      $(this).siblings('.product-list').removeClass('active');
      $(this).siblings('.product-list:nth-of-type('+ count1 +')').addClass('active');
    }
  } else if(target == 'btnTab2') {
    count2++;
    if(count2 <= list2.length) {
      $(this).children().children('.current').html(count2);
      $(this).siblings('.product-list').removeClass('active');
      $(this).siblings('.product-list:nth-of-type('+ count2 +')').addClass('active');
    } else {
      count2 = 1;
      $(this).children().children('.current').html(count2);
      $(this).siblings('.product-list').removeClass('active');
      $(this).siblings('.product-list:nth-of-type('+ count2 +')').addClass('active');
    }
  } else {
    count3++;
    if(count3 <= list3.length) {
      $(this).children().children('.current').html(count3);
      $(this).siblings('.keyword-list').removeClass('active');
      $(this).siblings('.keyword-list:nth-of-type('+ count3 +')').addClass('active');
    } else {
      count3 = 1;
      $(this).children().children('.current').html(count3);
      $(this).siblings('.keyword-list').removeClass('active');
      $(this).siblings('.keyword-list:nth-of-type('+ count3 +')').addClass('active');
    }
  }
})

// sc-category;
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

let count = 0;

$('.sc-category .rank-title').addClass('on').eq(0).siblings('.rank-box').css('display','block');

let loop = setInterval(function() {
  title = $('.sc-category .rank-title');
  if(count < title.length) {
    if(title.hasClass('on')) {
      title.removeClass('on');
      count++;
    } else {
      title.siblings('.rank-box').slideUp(500);
      title.eq(count).siblings('.rank-box').slideDown(500);
      count++;
    }
  } else {
    count = 0;
  }
}, 3000);

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

$(window).scroll(function(){
  currt = $(this).scrollTop();
  if(currt >= 50) {
    if(currt > lastScrT) {
      $('.footer-nav').removeClass('active');
    } else {
      $('.footer-nav').addClass('active');
    }
  }
  lastScrT = currt;
})

// btn-top
$('.btn-top').click(function(){
  $('html, body').animate({scrollTop: 0}, 400);
})