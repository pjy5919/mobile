$(document).ready(function () {
  let $simg = $(".todatyimg ul");
  let $simgli = $(".todatyimg ul li");
  let $sbtn = $(".slide_btn ul li");
  let $snext = $(".slide_side_btn .nex");
  let $spre = $(".slide_side_btn .pre");
  let simg_w = $simgli.width(); //이미지의 가로너비
  let simg_n = $simgli.length; //이미지의 총개수
  let soldidx = 0; //기존이미지
  let sindex = 0; //선택된 새이미지

  //index번째 비주얼이미지 이동하는 함수생성
  function slideImg(sindex) {
    targetX = -(sindex * simg_w); //움직이는 거리(너비)

    $simg.stop().animate({ left: targetX }, 600); //위에서 계산한 거리만큼 움직임
    $sbtn.eq(soldidx).removeClass("active"); //기존버튼 비활성화
    $sbtn.eq(sindex).addClass("active"); //선택버튼 활성화
    soldidx = sindex;
  }
  //자동함수 생성
  function slideAuto() {
    sindex++;
    if (sindex == simg_n) {
      //simg_n은 이미지개수 5, index는 0,1,2,3,4
      sindex = 0;
    }
    slideImg(sindex); //함수호출
  }

  auto = setInterval(slideAuto, 4000);

  //하단버튼
  $sbtn.click(function () {
    clearInterval(auto);
    sindex = $(this).index();
    slideImg(sindex);
    timer = setInterval(slideAuto, 4000);
  });

    //좌우버튼
$spre.click(function () {
clearInterval(auto);
sindex--;
if (sindex < 0) {
  sindex = simg_n - 1;
}
slideImg(sindex);
auto = setInterval(slideAuto, 4000);
});

$snext.click(function () {
clearInterval(auto);
sindex++;
if (sindex > simg_n - 1) {
  //index는 0부터 시작하고 length는 1부터 시작하므로 1을 빼주어야 마지막 숫자가 맞음
  sindex = 0;
}
slideImg(sindex);
auto = setInterval(slideAuto, 4000);
});
});

$(document).ready(function () {
let objDate = new Date();
let month=objDate.getMonth(); //월구하기 ->0(1월)부터 11(12월)까지의 정수값
let date=objDate.getDate();//일구하기->날짜(일)를 나타내는 1에서 31까지의 정수
let day=objDate.getDay(); // 0(일)부터 6(토)까지의 정수값
let aryDay = ['일','월','화','수','목','금','토'];

//년, 월, 일, 요일 출력
let fulldate=`${month+1}월${date}일(${aryDay[day]})`;
$('#date').text(fulldate);
});


//자동으로 슬라이드 함수생성
function bannerAuto(){

$(".ban ul").stop(true,true).animate({marginLeft:"-=230px"},500,function(){
$(".ban ul li:first-child").appendTo(".ban ul");
$(this).css({marginLeft:"0px"});
});
};
bauto=setInterval(bannerAuto,4000);

$(".ban").hover(function(){
clearInterval(bauto);
},function(){
bauto=setInterval(bannerAuto,4000);
});
