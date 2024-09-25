//scroll-down
document.addEventListener("DOMContentLoaded", function () {
    $(document).ready(function () {
        $('.scroll-down').click(function () {
            var target = $(this).data('href');

            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);
        });
    });
});