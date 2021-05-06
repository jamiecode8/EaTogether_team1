jQuery(function ($) {
  $(".answer").css("display", "none");
 
  $(".question").click(function () {
    
    $(".question").not(this).removeClass("open");


    $(".question").not(this).next().slideUp(300);
 
    $(this).toggleClass("open");

    $(this).next().slideToggle(300);



  });
});