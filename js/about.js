$(document).ready(function(){
  $(".tab_btn li").click(function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    let result = $(this).attr("data-alt");
    $(".tabContent div").removeClass("active");
    $("#"+result).addClass("active").hide().show();
  });
});