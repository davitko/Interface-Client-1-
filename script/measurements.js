$(init);

function init() {


    $(".table-display-frame").css({
        "display": "none"
    });

    $(".content").css({
        "display": "block"
    });

    $(".toolbar-configuration").css({
        "border": "2px solid red"
    })
}


//function addClassByClick(button) {
//    $(button).addClass("active")
//}
//
//$(function () { //run when the DOM is ready
//    $(".toolbar-item").click(function () { //use a class, since your ID gets mangled
//        $(this).addClass("active"); //add the class to the clicked element
//    });
//});

$('.toolbar-item').click(function () {
    //    $(this).addClass("active-toolbar-item");
    $(this).toggleClass('active-toolbar-item');
});