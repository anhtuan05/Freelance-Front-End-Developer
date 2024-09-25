    //member-form
    $(document).ready(function () {
        $(".member-form.sign-up-form").hide();
        $(".member-form.forget-password").hide();

        $("a.sign-in-form").click(function () {
            $(".member-form.sign-in-form").show().animate({ opacity: 1 }, 500);
            $(".member-form.sign-up-form, .member-form.forget-password").hide().css("opacity", 0);
        });

        $("a.sign-up-form").click(function () {
            $(".member-form.sign-up-form").show().animate({ opacity: 1 }, 500);
            $(".member-form.sign-in-form, .member-form.forget-password").hide().css("opacity", 0);
        });

        $("a.forget-password").click(function () {
            $(".member-form.forget-password").show().animate({ opacity: 1 }, 500);
            $(".member-form.sign-in-form, .member-form.sign-up-form").hide().css("opacity", 0);
        });
    });