(function ($) {
    $.fn.textfill = function (maxFontSize) {
        maxFontSize = parseInt(maxFontSize, 10);
        return this.each(function () {
            var containerDiv, parent, maxHeight, maxWidth, fontSize, horizMult, vertMult;
            containerDiv = $(this);
            parent = containerDiv.parent();
            maxHeight = parent.height();
            maxWidth = parent.width();
            fontSize = parseInt(containerDiv.css("fontSize"), 10);
            horizMult = maxWidth / containerDiv.width();
            vertMult = maxHeight / containerDiv.height();
            containerDiv.css({ 'transform': 'scale(' + horizMult + ', ' + vertMult + ')',
                '-webkit-transform': 'scale(' + horizMult + ', ' + vertMult + ')',
                '-moz-transform': 'scale(' + horizMult + ', ' + vertMult + ')',
                '-ms-transform': 'scale(' + horizMult + ', ' + vertMult + ')',
                '-o-transform': 'scale(' + horizMult + ', ' + vertMult + ')'});
        });
    };
})(jQuery);

window.onload = function () {
    $('div').textfill();
}
window.onresize = function () {
    $('div').textfill();
}

