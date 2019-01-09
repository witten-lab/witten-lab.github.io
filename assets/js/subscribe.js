function submitForm() {
    var form = document.getElementById('form');
    if (form.checkValidity()) {
        var product = document.createElement('input');
        product.setAttribute('type', 'hidden');
        product.setAttribute('name', 'product');
        product.setAttribute('value', 'Website');
        form.appendChild(product);
        document.getElementById('hiddenFrame').onload = onLoad();
        form.target = 'hiddenFrame';
        form.submit();
    }
}

function onLoad() {
    document.getElementById('form').setAttribute('style', 'display: none');
    document.getElementById('thanks').setAttribute('style', 'display: block');
}