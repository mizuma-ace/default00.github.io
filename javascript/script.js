$(function () {

    // フッターと被ったらトップのボタンが消える
    $(window).scroll(function () {
        let scT = $(window).scrollTop();
        let footer = $("footer").offset().top;
        let winH = $(window).height();
        if (scT >= (footer - (winH - 200))) {
            $(".top-btn").css("display", "none");
            $(".hum-menu").css("display", "none");
            $(".up-btn").css("display", "block");
        } else {
            $(".top-btn").css("display", "block");
            $(".up-btn").css("display", "none");
            if (window.matchMedia("(max-width: 800px)").matches) {
                $(".hum-menu").css("display", "block");
            }
        }
    });
    // スクロールフワ
    $(window).scroll(function () {
        let scT = $(window).scrollTop();
        $(".fuwa").each(function () {
            if (scT > $(this).offset().top-$(window).height()) {
                $(this).addClass("on");
            } else {
                $(this).removeClass("on");
            };
        });
    });

    //    ハンバーガーメニュー
    $(".hum-menu").click(function () {
        $(this).toggleClass("on");
        $("nav").toggleClass("on");
    });
    
    // スライダー
    if (window.matchMedia("(max-width: 800px)").matches) {
        $('.slick').slick({
            autoplay: true,
        });
    }
    $('.form-slide').slick({
        autoplay: true,
        autoplaySpeed:4000,
        speed:1500,
    });

});