$(function() {
    $(".header_box").load("header.html",function(){
        navText("首页");
        nav();
    });
    $(".secondFooter").load("footer.html");
    var pageCur=1;
    var pageC;
    var type=1;
    $(".dateList a").click(function(e){
        e.preventDefault();
        type=$(this).attr("href");
        pageCur=1;
        console.log(type);
        $(".dateList a").removeClass().eq(type).addClass("dateListSelected");
        proList(pageCur,type);
    });

    function proList(pageCur,type){
        $.ajax(
            {
                type:"post",
                url:"data/report.php",
                data:{pageNum:pageCur,type:type},
                success:function(d){
                    var data=d.data;
                    var n=data.length;
                    var htmlText="";
                    for(var i=0;i<n;i++){
                        htmlText+='<li>'+data[i].rimg+'<div class="art"><h3>'+data[i].title+'</h3><span>'+data[i].time+'</span><p>'+data[i].detail+'</p><a href="report_detail.html?rid='+data[i].rid+'"><strong>'+data[i].baodao+'</strong></a></div><div class="clearfloat"></div></li>';
                    }
                    $(".postContent ul").html(htmlText);
                }
            }
        )
    }
    proList(pageCur,type);
})