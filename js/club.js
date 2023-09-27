$(document).ready(function(){

  $(".modal_btn").click(function(){
    $(this).next().show();
    return false
  });

  $(".btn_close").click(function(){
    $(".modal").hide();
  });

});