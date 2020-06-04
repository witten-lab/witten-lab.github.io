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

!function (e, n) {
    var o = e();
    e.fn.dropdownHover = function (t) {
        return "ontouchstart" in document ? this : (o = o.add(this.parent()), this.each(function () {
            function r() {
                n.clearTimeout(a), n.clearTimeout(i), i = n.setTimeout(function () {
                    o.find(":focus").blur(), f.instantlyCloseOthers === !0 && o.removeClass("open"), n.clearTimeout(i), d.attr("aria-expanded", "true"), s.addClass("open"), d.trigger(l)
                }, f.hoverDelay)
            }

            var a, i, d = e(this)
                , s = d.parent()
                , u = {
                delay: 500
                , hoverDelay: 0
                , instantlyCloseOthers: !0
            }
                , h = {
                delay: e(this).data("delay")
                , hoverDelay: e(this).data("hover-delay")
                , instantlyCloseOthers: e(this).data("close-others")
            }
                , l = "show.bs.dropdown"
                , c = "hide.bs.dropdown"
                , f = e.extend(!0, {}, u, t, h);
            s.hover(function (e) {
                return s.hasClass("open") || d.is(e.target) ? void r(e) : !0
            }, function () {
                n.clearTimeout(i), a = n.setTimeout(function () {
                    d.attr("aria-expanded", "false"), s.removeClass("open"), d.trigger(c)
                }, f.delay)
            }), d.hover(function (e) {
                return s.hasClass("open") || s.is(e.target) ? void r(e) : !0
            }), s.find(".dropdown-submenu").each(function () {
                var o, t = e(this);
                t.hover(function () {
                    n.clearTimeout(o), t.children(".dropdown-menu").show(), t.siblings().children(".dropdown-menu").hide()
                }, function () {
                    var e = t.children(".dropdown-menu");
                    o = n.setTimeout(function () {
                        e.hide()
                    }, f.delay)
                })
            })
        }))
    }, e(document).ready(function () {
        e('[data-hover="dropdown"]').dropdownHover()
    })
}(jQuery, window);

window.onload = function () {
    $('#nav-icon').click(function () {
        $(this).toggleClass('open');
    });
}