function resize() {
    if (window.outerWidth <= 992 || window.outerHeight < 1050) {
        window.location.replace(window.location.origin + '/mw' + window.location.pathname);
    }
}

window.onload = resize;

window.onresize = resize;