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

