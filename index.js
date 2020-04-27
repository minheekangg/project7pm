$(document).ready(function () {
    $("nav").find("a").click(function (e) {
        e.preventDefault();
        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top - 100
        }, 1500);
    });
    

    function debounce(func, wait = 20, immediate = true) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    $(".product").hover(debounce(function (e){
        console.log(e.target.dataset.backimg)
        $(this).css('background-image', 'url(' + e.target.dataset.backimg + ')')
    }))
    $(".product").mouseleave(debounce(function (e){
        console.log(e.target.dataset.frontimg)
        $(this).css('background-image', 'url(' + e.target.dataset.frontimg + ')')
    }))
});