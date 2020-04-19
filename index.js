; (function (window, document, undefined) {
    "use strict";
    var init = function () {
        var canvas = document.querySelector('#x');
        console.log('canvas width', canvas.offsetWidth)
        var icon_template = document.querySelector('#template');
        var icon_width = 40;
        var icon_height = 30;
        var the_images = [
            // 'http://static.tumblr.com/tensqk8/k8anq0438/01.png',
            'http://static.tumblr.com/tensqk8/rYanq05el/04.png',
            // 'http://static.tumblr.com/tensqk8/SYknq05py/05.png',
            // 'http://static.tumblr.com/tensqk8/s7inq057d/03.png'
        ];
        var pickRandomImage = function () {
            var i = Math.floor(Math.random() * the_images.length);
            return the_images[i];
        };
        var total_number_of_images = 200;
        var max_height = canvas.offsetHeight - icon_height;
        var max_width = canvas.offsetWidth;
        var randomCoordinate = function () {
            var r = [];
            var x = Math.floor(Math.random() * max_width);
            var y = Math.floor(Math.random() * max_height);
            r = [x, y];
            return r;
        };
        var createImage = function () {
            var node = icon_template.cloneNode(true);
            var xy = randomCoordinate();
            node.removeAttribute('id');
            node.removeAttribute('hidden');
            node.style.top = xy[1] + 'px';
            node.style.left = xy[0] + 'px';
            node.setAttribute('src', pickRandomImage());
            canvas.appendChild(node);
        };
        for (var i = 0; i < total_number_of_images; i++) {
            createImage();
        };
    };
    window.addEventListener('load', init);
})(window, document);