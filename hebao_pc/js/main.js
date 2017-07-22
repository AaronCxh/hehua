/**
 * Created by wsl-01 on 2017/3/1.
 */
function navText(text){
    $(".navList>ul>li").each(function(){
        var thisText=$(this).children("a").text();
        if(thisText==text){
            $(".navList>ul>li>a").removeClass("current");
            $(this.children).addClass("current");
        }
    });
}
function lunbo(){
    $(".swiper-button-next").click(function(){
        var imglength=$(".swiper-slide");
        for(var i=0;i<imglength.length;i++){
            var left=parseInt($(".swiper-wrapper").css("left"));
            if(left>=(-1600)) {
                left += -320;
            }else{
                $(this).addClass("swiper-button-disabled")
            }
        }
        $(".swiper-wrapper").css("left",left+"px");
    });
    $(".swiper-button-prev").click(function(){
        var imglength=$(".swiper-slide");
        for(var i=0;i<imglength.length;i++){
            var left=parseInt($(".swiper-wrapper").css("left"));
            if(left<=-320){
                left+=320;
            }else{
                $(this).addClass("swiper-button-disabled")
            }
        }
        $(".swiper-wrapper").css("left",left+"px");
    })
}

function intro(){
    var cur=0;
   $(".swiper-pagination-bullet").click(function(){
           var now=$(this).index();
           $(".swiper-pagination-bullet").removeClass("swiper-pagination-bullet-active");
           console.log(now);
           $(this).addClass("swiper-pagination-bullet-active");
           $(".swiper-container2 .swiper-slide").eq(cur).fadeOut();//隐藏当前的图片
           $(".swiper-container2 .swiper-slide").eq(now).fadeIn();
           cur=now;
       }
   )
}

function map(){
    var arr = document.getElementById("map");
    var lis = arr.children;
    lis = Array.prototype.slice.call(lis);
    setInterval(function (i) {
        return function () {
            lis[i].style.display = getComputedStyle(lis[i]).display == "none" ? "block" : "none";
            lis[i + 3].style.display = getComputedStyle(lis[i + 3]).display == "none" ? "block" : "none";
            (++i == 3) && (i = 0);
        }
    }(0), 2000)
}

function nav(){
   var lis= $(".dropdown_menu li");
    for(var i=0;i<lis.length;i++){
        lis[i].onclick=function(){
            $("#nav_menu>a").addClass('current');
        }
         $(".navList>ul>li>a:first-child").removeClass(); 
    }
    $("#nav_menu>a").addClass('current');

}
