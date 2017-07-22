$(function(){
    $(".header_box").load("header.html",function(){
        nav();
    });
    $(".secondFooter").load("footer.html");

    var pageCur=1;
    var pageC;
    var type=1;
    $(".formChoice a").click(function(e){
        e.preventDefault();
        type=$(this).attr("href");
        pageCur=1;
        $(".formChoice a").removeClass().eq(type).addClass("selected");
        $(".formChoice li").children('span').remove().eq(type).append("<span class='connectLines'></span>");
        proList(pageCur,type);
    });
    $(".cutPageList").on('click','a',function(e){
        e.preventDefault();
        var pageN=$(this).index();
        if(pageN==0){
            if(pageCur==1)return;
            pageCur--;
        }else if(pageN==pageC+1){
            if(pageCur==pageC)return;
            pageCur++;
        }else{
            pageCur=pageN;
        }
        proList(pageCur,type)
    });
    function proList(pageCur,type){
        $.ajax(
            {
                type:"post",
                url:"data/hebao.php",
                data:{pageNum:pageCur,type:type},
                success:function(d){
                    var data=d.data;
                    var n=data.length;
                    var htmlText="";

                    for(var i=0;i<n;i++){
                        htmlText+='<tr class="pages_1"><td><a href="join_detail.html?jid='+data[i].jid+'">'+data[i].jname+'</a></td><td>'+data[i].fenlei+'</td><td>'+data[i].bumen+'</td><td>'+data[i].position+'</td></tr>';
                    }
                    $("#position1 tbody").html(htmlText);
                    //动态添加页码
                    var pageHtml='<a href=""><</a>';
                    pageC=d.pageCount;
                    for(var i=1;i<pageC+1;i++){
                        pageHtml+='<a href="'+i+'">'+i+'</a>';
                    }
                    pageHtml+='<a href="">></a>';
                    $(".cutPageList").html(pageHtml);
                    $(".cutPageList a").eq(pageCur).addClass("posActive");
                    if(pageCur==1){
                        $(".cutPageList a:first").addClass("disabled");
                    }
                    if(pageCur==pageC){
                        $(".cutPageList a:last").addClass("disabled");
                    }
                }

            }
        )
    }
    proList(pageCur,type);
})