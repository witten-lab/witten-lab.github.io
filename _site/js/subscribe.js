function submitForm() {
    var form = document.getElementById('form');
    if (form.checkValidity()) {
        document.getElementById('hiddenFrame').onload = onLoad();
        form.target = 'hiddenFrame';
        form.submit();
    }
}

function onLoad() {
    document.getElementById('form').setAttribute('style', 'display: none');
    document.getElementById('thanks').setAttribute('style', 'display: block');
}