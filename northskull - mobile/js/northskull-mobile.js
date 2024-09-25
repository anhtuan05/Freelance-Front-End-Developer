// search button
$(document).ready(function () {
    $(".search-button").click(function (e) {
        e.preventDefault();
        $(".quick-search").addClass("active");
    });

    $(".search-close").click(function (e) {
        e.preventDefault();
        $(".quick-search").removeClass("active");
    });
});

// main menu
$(document).ready(function () {
    $(".menu-button").click(function (event) {
        event.preventDefault();
        $(".global-header").toggleClass("push-height main-menu-active");
    });
});

// global-navigation
$(document).ready(function () {
    $("li.has-sub-nav").click(function (e) {
        e.preventDefault();
        $("li.has-sub-nav").not(this).removeClass("active");
        $(this).toggleClass("active");
    });

    $("li.has-sub-nav .toggle-subcategories").click(function (e) {
        e.stopPropagation();
    });
});



// currencies
$(document).ready(function () {
    $(".icon-current").click(function () {
        if ($(".dropdown-holder").hasClass("active")) {
            $(".dropdown-holder").removeClass("active");
        } else {
            $(".dropdown-holder").addClass("active");
        }
    });
});
$(document).ready(function () {
    $(".content ul li a").click(function (event) {
        event.preventDefault();

        var selectedValue = $(this).attr("href");

        $(".currency-select").val(selectedValue);

        $(".current").text($(this).text());
        fn_change_selectbox_value_by_dh($(".currency-select")[0], selectedValue);
    });
});

// subcategories
$(document).ready(function () {
    var activeSubcategories = null;

    $(".toggle-subcategories").click(function (e) {
        e.preventDefault();
        var clickedSubcategories = $(this).next(".subcategories");

        if (activeSubcategories !== clickedSubcategories[0]) {
            $(".subcategories").removeClass("active");
            clickedSubcategories.addClass("active");
            activeSubcategories = clickedSubcategories[0];
        } else {
            clickedSubcategories.removeClass("active");
            activeSubcategories = null;
        }
    });
});


// basket-preview
$(document).ready(function () {
    $(".basket-button").click(function (event) {
        event.preventDefault();
        $(".preview").addClass("active");
        $(".global-header").addClass("push-height2");
    });
    $(".close-preview").click(function (event) {
        event.preventDefault();
        $(".preview").removeClass("active");
        $(".global-header").removeClass("push-height2");
    });
});

// basket-preview not empty
// add matching item
$(document).ready(function () {
    $(".ecl-rec-products-cart-link").click(function () {
        var cartDiv = $(this).closest(".ecl-rec-products-cart");
        if (cartDiv.hasClass("open")) {
            cartDiv.removeClass("open");
        } else {
            cartDiv.addClass("open");
        }
    });
});
// quantity 
$(document).ready(function () {
    $(".decrement").click(function (e) {
        e.preventDefault();
        var inputField = $(this).closest(".quantity-widget").find(".quantity-input");
        var currentValue = parseInt(inputField.val());
        if (currentValue > 1) {
            inputField.val(currentValue - 1);
        }
    });

    $(".increment").click(function (e) {
        e.preventDefault();
        var inputField = $(this).closest(".quantity-widget").find(".quantity-input");
        var currentValue = parseInt(inputField.val());
        inputField.val(currentValue + 1);
    });
});

// back to top
$(document).ready(function () {
    const $backToTopButton = $('.back-to-top');
    $backToTopButton.click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});

// product
$(document).ready(function () {
    $(".ecl-cm-grid-product-link").hover(function () {
        $(this).find(".reverse").addClass("active");
    }, function () {
        $(this).find(".reverse").removeClass("active");
    });
});

// login
$(document).ready(function () {
    $(".i-forgot-password").click(function (event) {
        event.preventDefault();
        $(".tab.signin").addClass("recover-pw-active");
    });
    $(".i-forgot-password.close").click(function (event) {
        event.preventDefault();
        $(".tab.signin").removeClass("recover-pw-active");
    });
});
$(document).ready(function () {
    $(".create-an-account-btn").click(function (event) {
        event.preventDefault();
        $(".tab.register").addClass("register-form-active");
    });
    $(".create-an-account-btn.close").click(function (event) {
        event.preventDefault();
        $(".tab.register").removeClass("register-form-active");
    });
});
$(document).ready(function () {
    $(".tab-navigation li").click(function () {
        $(".tab-navigation li").removeClass("active");

        $(this).addClass("active");

        var index = $(this).index();

        $(".tab").removeClass("active");

        if (index === 0) {
            $(".tab.signin").addClass("active");
        } else if (index === 1) {
            $(".tab.register").addClass("active");
        }
    });
});



// more-details
$(document).ready(function () {
    $(".more-details-button").click(function (e) {
        e.preventDefault();
        var moreDetails = $(".more-details");
        if (moreDetails.height() === 190) {
            moreDetails.css("height", "0");
            $(this).text("More details...");
            $(".product-media .swiper-button-next, .product-media .swiper-button-prev").css("top", "25%");
            $(".product-media .swiper-horizontal>.swiper-pagination-bullets, .product-media .swiper-pagination-bullets.swiper-pagination-horizontal").css("top", "34%");
        } else {
            moreDetails.css("height", "190px");
            $(this).text("Less details...");
            $(".product-media .swiper-button-next, .product-media .swiper-button-prev").css("top", "22.5%");
            $(".product-media .swiper-horizontal>.swiper-pagination-bullets, .product-media .swiper-pagination-bullets.swiper-pagination-horizontal").css("top", "30.5%");
        }
    });
});

// product-detail
$(document).ready(function () {
    $("ul.ecl-pd-products-group-feature-other-values.v1 li").click(function (e) {
        e.preventDefault();
        $("ul.ecl-pd-products-group-feature-other-values.v1 li").removeClass("active");

        $(this).addClass("active");
    });
});

$(document).ready(function () {
    $("ul.ecl-pd-products-group-feature-other-values.v2 li").click(function (e) {
        e.preventDefault();
        $("ul.ecl-pd-products-group-feature-other-values.v2 li").removeClass("active");

        $(this).addClass("active");
    });
});

// shop-our-insta
$(document).ready(function () {
    $('.link-wrapper-tabs a').click(function () {
        $('.tab-content').hide();

        $('.link-wrapper-tabs a').removeClass('active');

        var tabId = $(this).attr('href');

        $(tabId).show();

        $(this).addClass('active');

        return false;
    });
});
$(document).ready(function () {
    $(".feature-categories h6.header a").click(function (e) {
        e.preventDefault();
        $("#ii_contents_categories").addClass("active");
    });

    $(".feature-categories .close-button, .feature-categories ul.link-wrapper-tabs li a").click(function (e) {
        e.preventDefault();
        $("#ii_contents_categories").removeClass("active");
    });
});

// Stockists
$(document).ready(function () {
    $(".view").click(function () {
        if ($(this).hasClass("open")) {
            $(this).removeClass("open");
        } else {
            $(".view").removeClass("open");
            $(this).addClass("open");
        }
    });
});

// tab UI Checkout
$(document).ready(function () {
    $('.tunnel-stages li').click(function () {
        $('.tunnel-stages li').removeClass('active');
        $('.tunnel-body').hide();

        var tabId = $(this).find('a').attr('href');

        $(this).addClass('active');
        $(tabId).show();

        return false;
    });
});

// checkout - Ship to my billing address
$(document).ready(function () {
    var isCheckboxChecked = $('#delivery-address').is(':checked');

    if (!isCheckboxChecked) {
        $('.delivery-form').addClass('active');
    }

    $('#delivery-address').change(function () {
        if (!$(this).is(':checked')) {
            $('.delivery-form').addClass('active');
        } else {
            $('.delivery-form').removeClass('active');
        }
    });
});

// footer menu-container
$(document).ready(function () {
    $(".ty-sidebox__title").click(function () {
        var tySidebox = $(this).closest(".ty-sidebox");

        if (tySidebox.hasClass("open")) {
            tySidebox.removeClass("open");
        } else {
            $(".ty-sidebox").removeClass("open");
            tySidebox.addClass("open");
        }
    });
});


// //Swiper
document.addEventListener('DOMContentLoaded', function () {

    // introductionSwiper
    var introductionSwiperElement = document.querySelector('.introductionSwiper');

    if (introductionSwiperElement) {
        var introductionSwiper = new Swiper(introductionSwiperElement, {
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
        });
    }

    // featured-productsSwiper
    var featuredProductsSwiperElement = document.querySelector('.featured-productsSwiper');

    if (featuredProductsSwiperElement) {
        var featuredProductsSwiper = new Swiper(featuredProductsSwiperElement, {
            slidesPerView: 2,
            spaceBetween: 30,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }

    //product-detailSwiper
    var productDetailSwiperElement = document.querySelector('.product-detailSwiper');

    if (productDetailSwiperElement) {
        var productDetailSwiper = new Swiper(productDetailSwiperElement, {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }

    //about-us Swiper
    var standardSlideshow = new Swiper('.slideshow-bl-one', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    var standardSlideshow = new Swiper('.slideshow-bl-two', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    var standardSlideshow = new Swiper('.slideshow-bl-three', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});

