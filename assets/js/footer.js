$(function () {
    document.getElementById('en').setAttribute('href', window.location.pathname.replace("/ko", ""));
    document.getElementById('ko').setAttribute('href', "/ko" + window.location.pathname.replace("/ko", ""));
});