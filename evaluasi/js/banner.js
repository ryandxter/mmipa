function setBannerHeight() {
    var header_height = $("header").outerHeight();

    $('head').append('<style>' +
    '#one:before{' +
    'height: ' + header_height + 'px;' +
    '}' +
    '</style>')
}