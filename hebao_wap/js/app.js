
$(function(){
    /*
        手机端菜单开关
    */
    var  MissCloser=true;    //控制变量
    $('.s_open').click(function(){
        if(MissCloser){
            $(this).children('span').eq(0).css({'-webkit-transform':'rotate(45deg)','-webkit-transform-origin': '5px 0px'});
            $(this).children('span').eq(1).css({'-webkit-transform':'rotate(-45deg)','-webkit-transform-origin': '1px 0px'});
            $('.s_navList').slideDown(200);
            MissCloser=false;
        }else{
            $(this).children('span').css({'-webkit-transform':'rotate(0deg)','-webkit-transform-origin': '0px 0px'});
            $('.s_navList').slideUp(200);
            MissCloser=true;
        }
    })
    /*
        手机端按钮绑定
    */
    $('#mb_wcClose').click(function(){
        $('.mb_erwei,.HBshadow').fadeOut();
    })
    $('.mb_logwx').click(function(){        //绑定手机关注微信按钮
        $('.mb_erwei,.HBshadow').fadeIn();
    })
    var timerout=null;
    $("#touchDown").bind('touchstart',function() {  
        timerout = setTimeout(function() { 
            window.location.href='hebao://com.hebao.app/downloadImg?url=http://www.hebaodai.com/img/226era.png';
        }, 2000);  
    });  
    $('.mb_download').click(function(){       //绑定手机下载按钮
        if(IsiOS()){
            isWeiXin()?window.location.href="http://a.app.qq.com/o/simple.jsp?pkgname=com.hebao.app":window.location.href="https://itunes.apple.com/cn/app/he-bao/id964715691?mt=8";
        }else{
            isWeiXin()?window.location.href="http://a.app.qq.com/o/simple.jsp?pkgname=com.hebao.app":window.location.href="https://www.hebaodai.com/download/android/hebao.apk";
        }
    })


    function IsiOS() {
        return /iPhone|iPad|iPod/i.test(navigator.userAgent);
    }
    function isWeiXin() {
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            return true
        } else {
            return false;
        }
    }
})