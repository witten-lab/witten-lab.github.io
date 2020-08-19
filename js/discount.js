function submitForm() {
    const form = document.getElementById('form');
    if (form.checkValidity()) {
        const regExp = /([A-Z0-9]{8})-([A-Z0-9]{8})-([A-Z0-9]{8})-([A-Z0-9]{8})/;
        if (regExp.test(document.getElementById('licenseKey').value))
        {
            document.getElementById('submitButton').setAttribute('style', 'opacity: .5');
            if (window.location.href.indexOf('superstring') > -1) window.location.href = 'https://gumroad.com/l/superstring/discount';
            else window.location.href = 'https://gumroad.com/l/membrane/discount';
        }
        else
        {
            document.getElementById('licenseKey').setAttribute('style', 'border: 1px solid #b00020');
            document.getElementById('error').setAttribute('style', 'display:block');
        }
        form.target = 'hiddenFrame';
    }
}