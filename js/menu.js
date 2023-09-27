$(document).ready(function () {
  $("#sidebar").css({ left: "-100%" });
  $(".trigger").click(function () {
    $("#sidebar").stop(true, true).animate({ left: "0%" });
  });
  $(".colse").click(function () {
    $("#sidebar").stop(true, true).animate({ left: "-100%" });
  });
	$(".main").mouseover(function(){
		$(this).children(".show").show(500);
	});
	$(".main").mouseleave(function(){
		$(this).children(".show").hide(500);
	});
});
    