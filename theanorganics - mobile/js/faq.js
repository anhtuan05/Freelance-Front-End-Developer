    // faqs
    $(document).ready(function () {
        $('.toggle-title-faq').click(function () {
            $(this).toggleClass('active');
            $(this).next('.toggle-content-faq').slideToggle();
        });
    });