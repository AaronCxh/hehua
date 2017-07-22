/**
 * Created by wsl-01 on 2017/2/28.
 */
$(function() {
    $(".header_box").load("header.html",function(){
        navText("首页");
    });
    show();
    map();
})
   function show(){
       $(".icon_btn1").mouseover(function () {
           $("#qrForweixin").stop().fadeIn();
       });
       $(".icon_btn1").mouseout(function () {
           $("#qrForweixin").stop().fadeOut();
       });
       $(".icon_btn2").mouseover(function () {
           $("#qrFordown").stop().fadeIn();
       });
       $(".icon_btn2").mouseout(function () {
           $("#qrFordown").stop().fadeOut();
       });
   }
