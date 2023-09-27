$(document).ready(function(){

  //탭메뉴
  $(".qna_list ul li").click(function(){
    
    $(this).addClass("active1");
    $(this).siblings().removeClass("active1");

    let result=$(this).attr("data-alt");
    $(".accordion div").removeClass("active1");
    $("#" + result).addClass("active1");

  });

  // 아코디언 효과
  $(".title").click(function(){

    $(this).siblings(".title").removeClass("active");
    $(this).toggleClass("active");
    $(this).siblings(".content").stop().slideUp();
    $(this).next().stop().slideToggle();

  });

});