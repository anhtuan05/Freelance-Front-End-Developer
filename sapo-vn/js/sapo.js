function addLoadEvent(e) {
    if (document.readyState === "complete") { e() }
    else {
        var t = window.onload;
        if (typeof window.onload != "function") { window.onload = e }
        else { window.onload = function () { if (t) { t() } e() } }
    }
}
/*Nav-Menu*/
// function openMenu() {
//     $('body').css('overflow', 'hidden');
//     $('.overlay-menu').fadeIn(300);
//     $('.menu-mobile').addClass('show');
// }
// function closeMenu() {
//     $('body').css('overflow', '');
//     $('.overlay-menu').fadeOut(300);
//     $('.menu-mobile').removeClass('show');
// }
addLoadEvent(function () {

    var itemTop = $('.header').height();
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > itemTop) {
            $('.header').addClass('sticky');
        } else {
            $('.header').removeClass('sticky');
        }
    });

});

/*XemThemNganhHang*/
addLoadEvent(function () {
    function activeTab(obj) {
        $('.ul-tab li').removeClass('active');
        $(obj).addClass('active');
        var id = $(obj).attr('data-href');
        $('.tabpanel .tab-content').removeClass('active');
        $(id).addClass('active');
    }
    $('.ul-tab li').click(function () {
        activeTab(this);
        return false;
    });
    $('.category .view-more').on('click', function () {
        var $this = $(this),
            contentp = $('.category .block-content');
        contentp.toggleClass('active');
        if ($(this).hasClass('more')) {
            $this.html('Xem thêm ngành hàng <i class="fa fa-angle-down"></i>');
            $(this).removeClass('more').addClass('hie');
        } else {
            $this.html('Thu gọn ngành hàng <i class="fa fa-angle-up"></i>');
            $(this).removeClass('hie').addClass('more');
        }
    });
});
/*VN*/
document.addEventListener("DOMContentLoaded", function () {
    var images = document.querySelectorAll('source, img');
    if ('IntersectionObserver' in window) {
        var onChange = function onChange(changes, observer) {
            changes.forEach(function (change) {
                if (change.intersectionRatio > 0) {
                    loadImage(change.target);
                    observer.unobserve(change.target);
                }
            });
        };
        var config = { root: null, threshold: 0.1 }; var observer = new IntersectionObserver(onChange, config); images.forEach(function (img) { return observer.observe(img); });
    } else {
        images.forEach(function (image) { return loadImage(image); });
    }

    function loadImage(image) {
        image.classList.add('fade', 'show');
        if (image.dataset && image.dataset.src) {
            image.src = image.dataset.src;
        }

        if (image.dataset && image.dataset.srcset) {
            image.srcset = image.dataset.srcset;
        }
        image.style.maxWidth = null;
        image.style.maxHeight = null;
    }
});

/*LenDauTrang*/
addLoadEvent(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 700) {
            $('.scroll-top').show();
        }
        else {
            $('.scroll-top').hide();
        }
    });

    $('.scroll-top').click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });
    if ($(window).width() < 768) {
        $('.scroll-top').css({ 'bottom': '90px', 'right': '8px' });
    }
});