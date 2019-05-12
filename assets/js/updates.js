$(function () {
    var query_string = {};
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (typeof query_string[pair[0]] === "undefined") {
            query_string[pair[0]] = pair[1];
        } else if (typeof query_string[pair[0]] === "string") {
            var arr = [query_string[pair[0]], pair[1]];
            query_string[pair[0]] = arr;
        } else {
            query_string[pair[0]].push(pair[1]);
        }
    }

    if (query_string.expiration_date) {
        var expiration_date = Number(query_string.expiration_date);
        var versionArray = document.getElementsByName('version');
        var releaseDateArray = document.getElementsByName('locale-date');
        var i = releaseDateArray.length;
        while (i--) {
            if (new Date(releaseDateArray[i].innerHTML).getTime() > expiration_date) {
                var version = versionArray[i + 1].innerHTML;
                break;
            }
        }
        document.getElementById('expired').setAttribute('style', 'display: block');
        document.getElementById('date').innerHTML = new Date(Number(query_string.expiration_date)).toLocaleDateString(lang, options);
        document.getElementById('version').innerHTML = version;
    }
});