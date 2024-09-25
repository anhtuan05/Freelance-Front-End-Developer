//swpier-index
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".success-stories-Swiper", {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".reviewsSwiper", {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});
//swiper-system-integration-page
var swiper = new Swiper(".our-clients-Swiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".our-clients-Swiper-container .swiper-button-next",
        prevEl: ".our-clients-Swiper-container .swiper-button-prev",
    },
    pagination: {
        el: ".our-clients-Swiper-container .swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});

//swiper-design
var swiper = new Swiper(".img-Swiper", {
    loop: true,
    // autoplay: {
    //     delay: 10000,
    //     disableOnInteraction: false,
    // },
    navigation: {
        nextEl: ".img-Swiper-container .swiper-button-next",
        prevEl: ".img-Swiper-container .swiper-button-prev",
    },
    pagination: {
        el: ".img-Swiper-container .swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});

// faq
document.addEventListener("DOMContentLoaded", function () {
    const t585Wrappers = document.querySelectorAll(".t585");

    t585Wrappers.forEach((wrapper, index) => {
        const t585Content = wrapper.querySelector(".t585__content");
        const t585Icon = wrapper.querySelector(".t585__icon");
        const t585Btn = wrapper.querySelector(".t585__trigger-button");
        const contentWrapper = t585Content.querySelector(".t585__textwrapper");
        const iconPath = t585Icon.querySelector("svg > g > g > path:nth-child(2)");

        if (index === 0) {
            t585Content.style.maxHeight = contentWrapper.scrollHeight + "px";
            iconPath.style.display = "none";
        }

        t585Btn.addEventListener("click", function () {
            if (t585Content.style.maxHeight) {
                t585Content.style.maxHeight = null;
                iconPath.style.display = "block";
            } else {
                t585Wrappers.forEach((otherWrapper) => {
                    const otherContent = otherWrapper.querySelector(".t585__content");
                    const otherIconPath = otherWrapper.querySelector("svg > g > g > path:nth-child(2)");
                    otherContent.style.maxHeight = null;
                    otherIconPath.style.display = "block";
                });

                t585Content.style.maxHeight = contentWrapper.scrollHeight + "px";
                iconPath.style.display = "none";
            }
        });
    });
});





