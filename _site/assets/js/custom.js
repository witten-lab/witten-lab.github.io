(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-42273251-3', 'auto');
ga('send', 'pageview');

$(function () {
    //Animate with anchor
    $('a[href*=\\#]:not([href=\\#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            animateTo($(this.hash));
        }
    });

    var offsetTop = $('.navbar').height() - 24;

    function animateTo(target) {
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top - offsetTop
            }, 500);
            return false;
        }
    }

    if (window.location.hash) animateTo($(window.location.hash));

    $('#nav-icon').click(function () {
        $(this).toggleClass('open');
    });
});
