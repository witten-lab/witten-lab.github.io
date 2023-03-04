$(function () {
    const parameters = getParameters();
    if (parameters.expiration_date) {
        let lang = "en-US";
        if (window.location.pathname.indexOf("/ko") > -1) lang = "ko-KR";
        let options = {year: 'numeric', month: 'short', day: 'numeric'};
        let expiration_date = Number(parameters.expiration_date);
        let versionArray = document.getElementsByClassName('version');
        let releaseDateArray = document.getElementsByName('locale-date');
        let i = releaseDateArray.length;
        console.log(expiration_date);
        while (i--) {
            console.log(new Date(releaseDateArray[i].innerHTML).getTime());
            if (new Date(releaseDateArray[i].innerHTML).getTime() > expiration_date) {
                document.getElementById('expired').setAttribute('style', 'display: block');
                document.getElementById('date').innerHTML = new Date(Number(parameters.expiration_date)).toLocaleDateString(lang, options);
                document.getElementById('version').innerHTML = versionArray[i + 1].innerHTML;
                break;
            }
        }
    }
});