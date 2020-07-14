$(document).ready(function () {
    var c;
    $(document).on("scroll", function () {
        var s = window.scrollY;
        header = $('header');
        banner = $('.section-banner');
        topbar = header.find('.header-topbar')
        navbar = header.find('.header-navbar');

        if (s >= 46) {
            height = 126 - s > 60 ? 126 - s : 60;
            header.css('position', 'fixed');
            header.css('height', `${height}px`);
            topbar.hide();
            navbar.css('height', `${height}px`);
            banner.css('margin-top', `${height + 46}px`);
        }
        if (s < c) {
            if (s > 0) {
                topbar.show();
                navbar.css({ height: '80px' });
                header.css({ height: '126px' });
            }
            else {
                topbar.show();
                navbar.css('height', `80px`);
                banner.css('margin-top', 0);
                header.css({ position: 'static', height: "126px" });
                banner.css('margin-top', 0);
            }
        }
        c = s;
    });

    $(".scroll-top").on('click', function (e) {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });

});
