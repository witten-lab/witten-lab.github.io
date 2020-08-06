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

window.onload = function() {

    $('#nav-icon').click(function () {
        $(this).toggleClass('open');
    });

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".sub-header", {
        scrollTrigger: {
            trigger: ".sub-header",
            start: "top",
            end: $(".footer-area").position().top + "px",
            pin: true,
            pinSpacing: false,
        },
    });

    if (window.location.hash) scrollTo(window.location.hash);

    const sidebarItems = $(".sidebar a");
    sidebarItems.on("click", function (e) {
        scrollTo($(this).attr("href"));
    });

    function scrollTo(target) {
        $("html").animate({
            scrollTop: $(target).offset().top - 32
        }, 1000, "easeInOutExpo");
    }

    if (matchMedia("screen and (min-width: 1024px)").matches) {
        gsap.to(".sidebar", {
            scrollTrigger: {
                trigger: ".sidebar",
                start: (-$(".navbar").outerHeight(true) - 32) + "px",
                end: $(".content").height() - $(".navbar-header").height() - $(".sidebar").outerHeight(true) + "px",
                pin: true,
                pinSpacing: false,
            },
        });

        const anchors = gsap.utils.toArray(".anchor");
        let currentAnchor;

        anchors.forEach((anchor, i) => {
            ScrollTrigger.create({
                trigger: anchor,
                start: (-$(".navbar").outerHeight(true) - 32) + "px",
                onToggle: self => self.isActive && setAnchor(anchor),
            });
        });

        function setAnchor(newAnchor) {
            if (newAnchor !== currentAnchor) {
                $(sidebarItems[anchors.indexOf(currentAnchor)]).removeClass('active');
                $(sidebarItems[anchors.indexOf(newAnchor)]).addClass('active');
                currentAnchor = newAnchor;
            }
        }
    }
}