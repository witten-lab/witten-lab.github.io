window.onload = function () {
    if (window.location.hash) scrollTo(window.location.hash);

    const sidebarItems = $(".sidebar a");
    sidebarItems.on("click", function (e) {
        scrollTo($(this).attr("href"));
    });

    function scrollTo(target) {
        $("html").animate({
            scrollTop: $(target).offset().top - 24
        }, 1000, "easeInOutExpo");
    }

    if (matchMedia("screen and (min-width: 1024px)").matches) {
        const anchors = gsap.utils.toArray(".anchor");
        let currentAnchor;

        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".sidebar", {
            scrollTrigger: {
                trigger: ".sidebar",
                start: (-$(".navbar").outerHeight(true) - 32) + "px",
                end: $(".content").height() - $(".navbar-header").height() - $(".sidebar").outerHeight(true) + "px",
                pin: true,
            },
        });

        anchors.forEach((anchor, i) => {
            ScrollTrigger.create({
                trigger: anchor,
                start: "-=1px",
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