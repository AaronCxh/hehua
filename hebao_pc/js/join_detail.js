$(function() {
    $(".header_box").load("header.html");
    $(".secondFooter").load("footer.html");

    var str=window.location.href;
    var jid=str.substr(str.lastIndexOf("=")+1);
    $.ajax(
        {
            type:"post",
            url:"data/hebao_detail.php",
            data:{jid:jid},
            success:function(d){
                $(".artText>h3").html(d.jname);
                $(".artText>h4.gangwei").html(d.zhize)
                $(".artText>p.detail").html(d.detail)
                $(".artText>h4.renzhi").html(d.yaoqiu)
                $(".artText>p.yaoqiu").html(d.detail1)
                $(".artText>p.joinEmail").html(d.email)
                $(".callbackR").click(function(){
                        history.go(-1);
                    }
                )
            }
        }
    )
})