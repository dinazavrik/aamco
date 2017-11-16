(function ($) {

    $(document).ready(function () {

        $('input[type="date"], input[type="datetime"], input[type="datetime-local"], input[type="month"], input[type="time"], input[type="week"]').each(function() {
            var el = this, type = $(el).attr('type');
            if ($(el).val() == '') $(el).attr('type', 'text');
            $(el).focus(function() {
                $(el).attr('type', type);
                el.click();
            });
            $(el).blur(function() {
                if ($(el).val() == '') $(el).attr('type', 'text');
            });
        });

        $('a[href*="#"]').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') ||
                location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1500);
                }
            }
        });

        $(document).foundation();

        $('.menu-icon').on('click', function () {
            $(this).toggleClass('menu-icon--open');
            $('.menu').toggleClass('menu--show');
        });

    });

})(jQuery);



