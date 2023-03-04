$(function () {
    const parameters = getParameters();
    if (parameters.emailplaceholder) document.getElementById('emailAddress').placeholder = decodeURI(parameters.emailplaceholder);
    if (parameters.subject) document.getElementById('subject').value = decodeURI(parameters.subject);
    if (parameters.message) document.getElementById('message').value = decodeURI(parameters.message);
    else if (parameters.messageplaceholder) document.getElementById('message').placeholder = decodeURI(parameters.messageplaceholder);
    if (parameters.product) document.getElementById('product').value = decodeURI(parameters.product);
    if (parameters.options == "no") document.getElementById('options').setAttribute('style', 'display:none');
});

$(document).on('click', '.dropdown-menu li a', function () {
    $(this).parent().parent().parent().find('.btn').val($(this).html());
});

function submitForm() {
    var form = document.getElementById('form');
    if (form.checkValidity()) {
        document.getElementById('subscription').value = document.getElementById('subscription').checked;
        document.getElementById('hiddenFrame').onload = onLoad();
        document.getElementById('submitButton').setAttribute('style', 'opacity:.5');
        form.target = 'hiddenFrame';
        form.submit();
    }
}

function onLoad() {
    document.getElementById('form').setAttribute('style', 'display:none');
    document.getElementById('thanks').setAttribute('style', 'display:block');
}