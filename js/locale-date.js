$(function () {
    var lang = "en-US";
    if (window.location.pathname.indexOf("/ko") > -1) lang = "ko-KR";
    var options = { year: 'numeric', month: 'short', day: 'numeric'};
    var releaseDateArray = document.getElementsByName('locale-date');
    var i = releaseDateArray.length;
    while (i--) releaseDateArray[i].innerHTML = new Date(releaseDateArray[i].innerHTML).toLocaleDateString(lang, options);
});