$(function () {
    const parameters = getParameters();
    if (parameters.expiration_date) {
        var lang = "en-US";
        if (window.location.pathname.indexOf("/ko") > -1) lang = "ko-KR";
        var options = {year: 'numeric', month: 'short', day: 'numeric'};
        var expiration_date = Number(parameters.expiration_date);
        var versionArray = document.getElementsByClassName('version');
        var releaseDateArray = document.getElementsByName('locale-date');
        var i = releaseDateArray.length;
        while (i--) {
            if (new Date(releaseDateArray[i].innerHTML).getTime() > expiration_date) {
                var version = versionArray[i + 1].innerHTML;
                break;
            }
        }
        document.getElementById('expired').setAttribute('style', 'display: block');
        document.getElementById('date').innerHTML = new Date(Number(parameters.expiration_date)).toLocaleDateString(lang, options);
        document.getElementById('version').innerHTML = version;
    }
});