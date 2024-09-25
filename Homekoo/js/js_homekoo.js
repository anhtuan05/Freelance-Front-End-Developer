
function backtotop() {
    $('body,html').animate({ scrollTop: 0 }, 500);
    return false;
}

const x = document.createElement('script');
x.src = 'https://cdnjs.cloudflare.com/ajax/libs/flat-ui/2.1.3/js/jquery-1.8.3.min.js';
x.type = 'text/javascript';

x.onload = function () {
    //drop_nav_menu
    var z_top;
    $(window).scroll(function () {
        var m = $(document).scrollTop() + 2;
        z_top = $(document).scrollTop() + 2;
        if (m < 500) {
            $(".zt_header_nav_bg").removeClass("header_nav_f");
            $('.new_fenlei_box').attr('style', 'height:490px');
        }
        if (m >= 500) {
            $('.zt_header_nav_bg').addClass("header_nav_f");
            $('.new_fenlei_box').attr('style', 'height:40px');
        }
    });

    $(".new_fenlei_box").hover(function () {
        $(".new_fenlei_box").animate({ "height": 490 }, 300);
    }, function () {
        if (z_top < 500) return;
        setTimeout(function () {
            if (z_top >= 500) {
                $(".new_fenlei_box").animate({ "height": 40 }, 300);
            }
        }, 100);
    });
    //hover_b1_liuxing_box
    $('.b1_liuxing_box a').mousemove(function () {
        $(this).addClass('red_s').siblings().removeClass('red_s');
    })

    Spbm.Event.index_ban();
};
document.head.appendChild(x);

//fashionstyles-slide
var slideItems;
var currentIndex = 0;

function showNextSlide() {
    for (var i = 0; i < slideItems.length; i++) {
        slideItems[i].classList.remove('active');
    }
    slideItems[currentIndex].classList.add('active');
    currentIndex++;
    if (currentIndex >= slideItems.length) {
        currentIndex = 0;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    slideItems = document.querySelectorAll('.slide-item');
    showNextSlide();
    setInterval(showNextSlide, 4000);
});

var splide = new Splide("#main-slider", {
    width: 1920,
    height: 450,
    pagination: true,
    autoplay: true,
    cover: true
  });

  var thumbnails = document.getElementsByClassName("thumbnail");
  var current;

  for (var i = 0; i < thumbnails.length; i++) {
    initThumbnail(thumbnails[i], i);
  }

  function initThumbnail(thumbnail, index) {
    thumbnail.addEventListener("click", function () {
      splide.go(index);
    });
  }

  splide.on("mounted move", function () {
    var thumbnail = thumbnails[splide.index];

    if (thumbnail) {
      if (current) {
        current.classList.remove("is-active");
      }

      thumbnail.classList.add("is-active");
      current = thumbnail;
    }
  });

  splide.mount();
