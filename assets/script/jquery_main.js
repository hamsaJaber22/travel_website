// about page to hide and show th answer
 $(document).ready(function(){
   $(".question1 .question_icon").click(function(){
       $(".answer1").toggle(400);
   });
});
       
$(document).ready(function(){
  $(".question2 .question_icon").click(function(){
      $(".answer2").toggle(400);
  });
});

$(document).ready(function(){
  $(".question3 .question_icon").click(function(){
      $(".answer3").toggle(400);
  });
});

$(document).ready(function(){
  $(".question4 .question_icon").click(function(){
      $(".answer4").toggle(400);
  });
});

// about us page to for our team
$(".team_member").hover(function() {
  
  $(".overlay",this).css("opacity" , `0.8`);
  $(".overlay",this).animate({top: "0px"}, 1000);

 },
  function(){
  $(".overlay",this).css("opacity" , `0`);
  $(".overlay",this).animate({top: "270px"}, 1000);
});


// button up(arraw)
$(".scrollUp").click(function(){
  $(window).scrollTop(0);
})

$(".header_title").animate({opacity:'1'},500);
