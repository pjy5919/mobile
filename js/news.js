$(document).ready(function(){

  $(".jb-b").hover(
    function () {
      $(this).attr("src","image/p1.PNG");
    },
    function () {
      $(this).attr("src","image/p1-1.PNG");
    }
  );

  $(".jb-c").hover(
    function () {
      $(this).attr("src","image/p2.PNG");
    },
    function () {
      $(this).attr("src","image/p2-1.PNG");
    }
  );

  $(".jb-e").hover(
    function () {
      $(this).attr("src","image/p3.PNG");
    },
    function () {
      $(this).attr("src","image/p3-1.PNG");
    }
  );

  $(".jb-f").hover(
    function () {
      $(this).attr("src","image/p4.PNG");
    },
    function () {
      $(this).attr("src","image/p4-1.PNG");
    }
  );

  $(".jb-i").hover(
    function () {
      $(this).attr("src","image/p5.PNG");
    },
    function () {
      $(this).attr("src","image/p5-1.PNG");
    }
  );

  $(".jb-j").hover(
    function () {
      $(this).attr("src","image/p6.PNG");
    },
    function () {
      $(this).attr("src","image/p6-1.PNG");
    }
  );


  //모달

  $(".Vi1 a img").click(function(){
    $(".modal").fadeIn();
  });


  $(".btn-close").click(function(){
    $(".modal").fadeOut();
  });

  $(".Vi2 a img").click(function(){
    $(".modal2").fadeIn();
  });


  $(".btn-close2").click(function(){
    $(".modal2").fadeOut();
  });




});