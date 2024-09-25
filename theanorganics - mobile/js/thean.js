// top-menu-mobile
$(document).ready(function () {
    $(".submenu-top>.submenu-top-title i").click(function () {
        $(".submenu-top").not($(this).closest(".submenu-top")).removeClass("active");
        $(this).closest(".submenu-top").toggleClass("active");
    });
});
$(document).ready(function () {
    const menuOpenIcon = $("#menu-open");
    const menuCloseIcon = $("#menu-close");
    const menuList = $(".menu-top-ul-bars");

    menuOpenIcon.click(function () {
        menuList.show();
        menuOpenIcon.hide();
        menuCloseIcon.show();
    });

    menuCloseIcon.click(function () {
        menuList.hide();
        menuOpenIcon.show();
        menuCloseIcon.hide();
    });
});
// nav-menu-mobile
$(document).ready(function () {
    $(".container-menu .menu-item>.open-submenu i.fa.fa-chevron-down").click(function () {
        $(".menu-item").not($(this).closest(".menu-item")).removeClass("active");
        $(this).closest(".menu-item").toggleClass("active");
    });
});
$(document).ready(function () {
    $(".container-menu .submenu-item>.open-submenu i.fa.fa-chevron-down").click(function () {
        $(".submenu-item").not($(this).closest(".submenu-item")).removeClass("active");
        $(this).closest(".submenu-item").toggleClass("active");
    });
});
$(document).ready(function () {
    const menuOpenIcon2 = $("#menu-open2");
    const menuCloseIcon2 = $("#menu-close2");
    const menuList2 = $(".container-menu");

    menuOpenIcon2.click(function () {
        menuList2.show();
        menuOpenIcon2.hide();
        menuCloseIcon2.show();
    });

    menuCloseIcon2.click(function () {
        menuList2.hide();
        menuOpenIcon2.show();
        menuCloseIcon2.hide();
    });
});
// cart-mobile
$(document).ready(function() {
    $(".link-cart").click(function(e) {
        e.preventDefault();
        $(".hb-cart").toggleClass("open");
        $(".overlay").toggle();
    });

    $(".close-minicart").click(function(e) {
        e.preventDefault();
        $(".hb-cart").removeClass("open");
        $(".overlay").hide();
    });

    $(".overlay").click(function() {
        $(".hb-cart").removeClass("open");
        $(this).hide();
    });

    $(".hb-minicart-outer").click(function(e) {
        e.stopPropagation();
    });
});
// sticky
document.addEventListener('DOMContentLoaded', function () {
    var containerMenuSearch = document.querySelector('.container-menu-search');
    var headerHeight = document.querySelector('header').offsetHeight;

    window.addEventListener('scroll', function () {
        containerMenuSearch.classList.toggle('sticky-container-menu-search', window.scrollY > headerHeight);
    });
});
// heart
$(document).ready(function () {
    $('span.heart').click(function () {
        var icon = $(this).find('i');
        icon.toggleClass('fa-heart-o');
        icon.toggleClass('fa-heart');
    });
});
// review
$(document).ready(function () {
    $('.review-rating').hover(function () {
        $(this).find('ul.btn-review-bottom-button-ul').css('display', 'block');
    }, function () {
        $(this).find('ul.btn-review-bottom-button-ul').css('display', 'none');
    });

    $('.btn-review-bottom-button-li').click(function (event) {
        event.preventDefault();

        var content = $(this).find('a.btn-review').html();

        $('.btn-review-bottom-rating-placeholder').html(content);
    });
});
// back to top
$(document).ready(function () {
    const $backToTopButton = $('#wr-back-top');
    const $backToTopbtn = $('#btt');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $backToTopButton.fadeIn();
        } else {
            $backToTopButton.fadeOut();
        }
    });
    $backToTopButton.click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    $backToTopbtn.click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});
// product-detail-swiper
var swiper = new Swiper(".product-detail-Swiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".product-detail-Swiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});
// + - so luong product
$(document).ready(function () {
    const valueInput = $('#quantity_64e2e62ce8829');

    $('.plus').click(function () {
        const currentValue = parseInt(valueInput.val()) || 0;
        valueInput.val(currentValue + 1);
    });

    $('.minus').click(function () {
        const currentValue = parseInt(valueInput.val()) || 0;
        if (currentValue > 1) {
            valueInput.val(currentValue - 1);
        }
    });
});

