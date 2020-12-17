$(function () {
    const parameters = getParameters();
    if (parameters.emailAddress) document.getElementById('emailAddress').value = parameters.emailAddress;
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
    document.getElementById('form').setAttribute('style', 'display:none');
    document.getElementById('unsubscribe').setAttribute('style', 'display:none');
    document.getElementById('thanks').setAttribute('style', 'display:block');
}