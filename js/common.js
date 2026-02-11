/* 상단 고정 */

/* animation & fadein */
function aniToTop1(){
    var winST = $(window).scrollTop();
    var winH = $(window).height();
    if($(".aniToTop1").length){
        $(".aniToTop1").each(function(){
            var ot = $(this).offset().top;
            if(winST >= ot-(winH * 0.9)){
                $(this).addClass("on");
            } else {
                $(this).removeClass("on");
            }
        });
    } else {
        return;
    }
}

function aniToLeft1(){
    var winST = $(window).scrollTop();
    var winH = $(window).height();
    if($(".aniToLeft1").length){
        $(".aniToLeft1").each(function(){
            var ot = $(this).offset().top;
            if(winST >= ot-(winH * 0.8)){
                $(this).addClass("on");
            } else {
                $(this).removeClass("on");
            }
        });
    } else {
        return;
    }
}

function aniToRight1(){
    var winST = $(window).scrollTop();
    var winH = $(window).height();
    if($(".aniToRight1").length){
        $(".aniToRight1").each(function(){
            var ot = $(this).offset().top;
            if(winST >= ot-(winH * 0.8)){
                $(this).addClass("on");
            } else {
                $(this).removeClass("on");
            }
        });
    } else {
        return;
    }
}

function hideGoTop(){
    var winST = $(window).scrollTop();
    if(winST > 1000){
        $(".go_top").slideDown("fast");
    } else {
        $(".go_top").slideUp("fast");
    }
}

$(document).ready(function(){
    aniToTop1();
    aniToLeft1();
    aniToRight1();
    hideGoTop();
   
    $(window).scroll(function(){
        aniToTop1();
        aniToLeft1();
        aniToRight1();
        hideGoTop();
    });


    //모바일용 사이드 메뉴
    $(".btn_menu").on("click", function(){
        $(".side_wrap").addClass("open");
    });
    $(".close_menu").on("click", function(){
        $(".side_wrap").removeClass("open");
    });
    $(".side_wrap").on("click", function(){
        $(".side_wrap").removeClass("open");
    });
    $(".side").on("click", function(){
        event.stopPropagation();
    });

    //탑으로 이동 버튼
    $(".go_top").on("click", function(){
        $("html, body").animate({ scrollTop : 0}, 400);
	    return false;
    });

    //quick
    $(".q_hide").on("click", function(){
        event.preventDefault();
        if($(this).hasClass("hide")){
            $(this).removeClass("hide");
            $(this).prev(".hide").slideDown("fast");
        } else {
            $(this).addClass("hide");
            $(this).prev(".hide").slideUp("fast");
        }
    });

    //한줄 뉴스
    if($(".oneline_news li").length > 1){
        var onelineSwiper = new Swiper(".oneline_conts", {
            speed: 1000,
            direction: "vertical",
            loop: true,
            autoplay: {
                delay : 3000,
            },
        });
    } else {
        return;
    }

    $(".close_oneline").on("click", function(){
        $(".oneline_wrap").slideUp("fast");
        $(".body_wrap").addClass("top_fixed1");
        
    });
    
})