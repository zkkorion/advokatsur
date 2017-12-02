$(document).ready(function ()//вся магия после загрузки страницы
{
    var url = window.location.href;//определение страницы
    //слайдер с отзывами
    var elActive, elid, point, pointid, tabsid,
        speed = 300;
    //мобильное меню
    if ($(window).width() < 1366) {
        var x1 = $("#x1"); var x2 = $("#x2"); var x3 = $("#x3");
        var menuOpen = false;
        $("#burger").click(function () {
            if (!menuOpen) {
                $(".mTopMenu").slideToggle(speed, function () {
                    x1.css("top", "8px");
                    x1.css("transform", "rotate(45deg)");
                    x2.css("transform", "rotate(45deg)");
                    x3.css("top", "8px");
                    x3.css("transform", "rotate(135deg)");
                    $(this).attr("style", "display:flex");
                    menuOpen = true;
                });
            } else {
                $(".mTopMenu").slideToggle(speed, function () {
                    x1.removeAttr("style"); x2.removeAttr("style"); x3.removeAttr("style");
                    menuOpen = false;
                });
            }
        });
    }
    //end мобильное меню
});