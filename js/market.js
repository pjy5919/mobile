$(document).ready(function () {

  let $simg=$(".slide ul");
  let $simgli=$(".slide ul li");
  let $sbtn=$(".slide_btn ul li");
  let $snext=$(".slide_side_btn .nex");
  let $spre=$(".slide_side_btn .pre");
  let simg_w=$simgli.width(); 
  let simg_n=$simgli.length; 
  let soldidx=0; 
  let sindex=0; 

  function slideImg(sindex){ 

    targetX=-(sindex*simg_w) 

    $simg.stop().animate({left:targetX},600); 
    $sbtn.eq(soldidx).removeClass("active"); 
    $sbtn.eq(sindex).addClass("active"); 
    soldidx=sindex;
    
  };

  function slideAuto(){

    sindex++;
    if(sindex == simg_n){
      sindex=0;
    }
    slideImg(sindex); 

  }

  auto = setInterval(slideAuto,4000);  

  //하단버튼
  $sbtn.click(function(){

    clearInterval(auto); 
    $(".play").hide();
    $(".stop").show();
    sindex=$(this).index();
    slideImg(sindex);
    auto = setInterval(slideAuto,4000);

  });

  //Play,Stop.....
  $(".play").hide();

  $(".stop").click(function(){
    clearInterval(auto); 
    $(".stop").hide();
    $(".play").show();
  });
  $(".play").click(function(){
    auto = setInterval(slideAuto,4000);
    $(".play").hide();
    $(".stop").show();
  });


  // ---------------------------------------

  //구단배너

  function bannerAuto(){

    $(".TNB ul").stop(true,true).animate({marginLeft:"-=50px"},500,function(){			
			$(".TNB ul li:first-child").appendTo(".TNB ul"); 
			$(this).css({marginLeft:"0px"}); 
		});	

  };
  bauto = setInterval(bannerAuto,2000);

  $(".TNB").hover(function(){ 
    clearInterval(bauto);
  }, function(){
    bauto = setInterval(bannerAuto,2000);
  });


  //WEEKLY

  $(".WEEKLY ul .W1 img").hover(
    function () {
      $(this).attr("src","image/1-2.jpg");
    },
    function () {
      $(this).attr("src","image/1-1.jpg");
    }
  );

  $(".WEEKLY ul .W2 img").hover(
    function () {
      $(this).attr("src","image/2-2.jpg");
    },
    function () {
      $(this).attr("src","image/2-1.jpg");
    }
  );

  $(".WEEKLY ul .W3 img").hover(
    function () {
      $(this).attr("src","image/5-2.jpg");
    },
    function () {
      $(this).attr("src","image/5-1.jpg");
    }
  );

  $(".WEEKLY ul .W4 img").hover(
    function () {
      $(this).attr("src","image/9-2.jpg");
    },
    function () {
      $(this).attr("src","image/9-1.jpg");
    }
  );

  //팝업배너

  let $img = $(".popB ul li");
  let $btn = $(".popBbtn ul li");
  let oldidx = 0; 
  let idx = 0;
  let img_n = $img.length; 

  function changeImg(idx){ 

    if(oldidx != idx){ 
      $btn.eq(oldidx).removeClass("active"); 
      $btn.eq(idx).addClass("active"); 
      $img.eq(oldidx).stop().fadeOut("300"); 
      $img.eq(idx).stop().fadeIn("300");
    }
    oldidx = idx;  
  };

  function changeAuto(){

    idx++;
    
    if(idx > img_n-1){ 
      idx=0;
    }

    changeImg(idx);  

  }

  timer = setInterval(changeAuto,4000); 

  //하단버튼
  $btn.click(function(){

    clearInterval(timer); 
    idx=$(this).index();
    changeImg(idx);
    timer = setInterval(changeAuto,4000); 

  });

  //RECOMMEND

  $(".R1 li img").hover(
    function () {
      $(this).attr("src","image/7-2.png");
    },
    function () {
      $(this).attr("src","image/7-1.png");
    }
  );

  $(".R2 li img").hover(
    function () {
      $(this).attr("src","image/8-2.png");
    },
    function () {
      $(this).attr("src","image/8-1.png");
    }
  );

  $(".R3 li img").hover(
    function () {
      $(this).attr("src","image/11-2.png");
    },
    function () {
      $(this).attr("src","image/11-1.png");
    }
  );

});