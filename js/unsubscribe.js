$(function () {
    const query_string = {};
    const query = window.location.search.substring(1);
    const vars = query.split("&");
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
    if (query_string.emailAddress) document.getElementById('emailAddress').value = query_string.emailAddress;
});

function submitForm() {
    const form = document.getElementById('form');
    if (form.checkValidity()) {
        const unsubscribe = document.createElement('input');
        unsubscribe.setAttribute('type', 'hidden');
        unsubscribe.setAttribute('name', 'subscribe');
        unsubscribe.setAttribute('value', false);
        form.appendChild(unsubscribe);

        document.getElementById('hiddenFrame').onload = onLoad();
        form.target = 'hiddenFrame';
        form.submit();
    }
}

function onLoad() {
    document.getElementById('form').setAttribute('style', 'display: none');
    document.getElementById('unsubscribe').setAttribute('style', 'display: none');
    document.getElementById('thanks').setAttribute('style', 'display: block');
}