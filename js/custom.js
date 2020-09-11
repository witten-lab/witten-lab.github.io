window.onload = function () {
    $('#nav-icon').click(function () {
        $(this).toggleClass('open');
        $('#nav-mobile').toggleClass('visible-mobile');
    });

    gsap.registerPlugin(ScrollTrigger);

    if (window.location.hash) scrollTo(window.location.hash);

    const sidebarItems = $(".sidebar a");
    sidebarItems.on("click", function (e) {
        scrollTo($(this).attr("href"));
    });
0
    function scrollTo(target) {
        $("html").animate({
            scrollTop: $(target).offset().top - 32
        }, 1000, "easeInOutExpo");
    }

    if (matchMedia("screen and (min-width: 1024px)").matches) {
        gsap.to(".sub-header", {
            scrollTrigger: {
                trigger: ".sub-header",
                start: "top",
                end: $(".footer-area").position().top + "px",
                pin: true,
                pinSpacing: false,
            },
        });

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