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

    if (query_string.emailplaceholder) document.getElementById('emailAddress').placeholder = decodeURI(query_string.emailplaceholder);
    if (query_string.subject) document.getElementById('subject').value = decodeURI(query_string.subject);
    if (query_string.message) document.getElementById('message').value = decodeURI(query_string.message);
    else if (query_string.messageplaceholder) document.getElementById('message').placeholder = decodeURI(query_string.messageplaceholder);
    if (query_string.product) document.getElementById('product').value = decodeURI(query_string.product);
    if (query_string.options == "no") document.getElementById('options').setAttribute('style', 'display: none');
});

$(document).on('click', '.dropdown-menu li a', function () {
    $(this).parent().parent().parent().find('.btn').val($(this).html());
});

function submitForm() {
    var form = document.getElementById('form');
    if (form.checkValidity()) {
        document.getElementById('subscription').value = document.getElementById('subscription').checked;
        document.getElementById('hiddenFrame').onload = onLoad();
        document.getElementById('submitButton').setAttribute('style', 'opacity: .5');
        form.target = 'hiddenFrame';
        form.submit();
    }
}

function onLoad() {
    document.getElementById('form').setAttribute('style', 'display:none');
    document.getElementById('thanks').setAttribute('style', 'display:block');
}
