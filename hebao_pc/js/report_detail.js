$(function() {
    $(".header_box").load("header.html", function () {
        navText("首页");
        nav();
    });
    $(".secondFooter").load("footer.html");

    var str=window.location.href;
    var rid=str.substr(str.lastIndexOf("=")+1);
    $.ajax(
        {
            type:"post",
            url:"data/report_detail.php",
            data:{rid:rid},
            success:function(d){
                $(".artContainer>h3").html(d.title1)
                $(".artContainer>span>a").html(d.link)
                $(".artContainer>.detail").html(d.detail1)
                $(".callback").click(function(){
                        history.go(-1);
                    }
                )
            }
        }
    )
})