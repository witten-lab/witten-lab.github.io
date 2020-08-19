function submitForm() {
    var form = document.getElementById('form');
    if (form.checkValidity()) {
        const unsubscribe = document.createElement('input');
        unsubscribe.setAttribute('type', 'hidden');
        unsubscribe.setAttribute('name', 'subscribe');
        unsubscribe.setAttribute('value', true);
        form.appendChild(unsubscribe);

        document.getElementById('hiddenFrame').onload = onLoad();
        form.target = 'hiddenFrame';
        form.submit();
    }
}

function onLoad() {
    document.getElementById('form').setAttribute('style', 'display:none');
    document.getElementById('thanks').setAttribute('style', 'display:block');
}