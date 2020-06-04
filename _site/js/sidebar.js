window.onload = function () {
    const sidebarItems = $(".sidebar a");
    sidebarItems.on("click", function (e) {
        $("html").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 1000, "easeInOutExpo");
    });

    if (matchMedia("screen and (min-width: 1024px)").matches) {
        const anchors = gsap.utils.toArray(".anchor");
        let currentAnchor;

        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".sidebar", {
            scrollTrigger: {
                trigger: ".sidebar",
                start: (-$(".navbar").outerHeight(true) - 24) + "px",
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
            console.log(newAnchor);
            if (newAnchor !== currentAnchor) {
                $(sidebarItems[anchors.indexOf(currentAnchor)]).removeClass('active');
                $(sidebarItems[anchors.indexOf(newAnchor)]).addClass('active');
                currentAnchor = newAnchor;
            }
        }
    }
}

/*
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
*/