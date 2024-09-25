// tabUI
$(document).ready(function () {
  $('.tabname li:first-child').addClass('active');
  $('.content.tab1').addClass('active');

  $('.tabname li').click(function () {
    $('.tabname li').removeClass('active');
    $('.content').removeClass('active');

    const tabSelector = $(this).data('tab');
    $(this).addClass('active');
    $(tabSelector).addClass('active');
  });
});
$(document).ready(function () {
  $('.tabname2 li:first-child').addClass('active');
  $('.content.tab1').addClass('active');

  $('.tabname2 li').click(function () {
    $('.tabname2 li').removeClass('active');
    $(this).addClass('active');

    const targetTab = $(this).data('tab');
    $('.content').removeClass('active');
    $(targetTab).addClass('active');
  });
});
// scroll-down
$(document).ready(function () {
  $('a.scroll-down').click(function () {
    var target = $(this).data('href');

    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000);
  });
});
//   swiper
var swiper = new Swiper(".themes-swiper.swiper-container.swiper-container-horizontal", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".customer-swiper.swiper-container.swiper-container-horizontal", {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

// question
$(document).ready(function () {
  $(".faq .question p").hide();

  $(".faq .question:first-child p").show();
  $(".faq .question:first-child").addClass("active");

  $(".faq .question h4").click(function () {
    var questionDiv = $(this).parent(".question");

    if (questionDiv.hasClass("active")) {
      questionDiv.find("p").slideUp();
      questionDiv.removeClass("active");
    } else {
      $(".faq .question p").slideUp();
      $(".faq .question").removeClass("active");
      questionDiv.find("p").slideDown();
      questionDiv.addClass("active");
    }
  });
});



