"use strict";

// $(function () {
//   var tabMenu = function tabMenu() {
//     var $tabs = $('.Choose_tabs');
//     var $content = $('.tab-content');
//     var TAB_ACTIVE_CLASS = 'is_active';
//     var CONTENT_SHOW_CLASS = 'is_show';
//     var id_arr = $content.map(function () {
//       return '#' + $(this).attr('id');
//     }).get();
//     /**
//      * @return {string} 
//      * @return {false} 
//      */

//     var getHash = function getHash() {
//       var hash = window.location.hash;
//       var index = id_arr.indexOf(hash);

//       if (index === -1) {
//         return false;
//       } else {
//         return id_arr[index];
//       }
//     };

//     var initialize = function initialize() {
//       var hash = getHash();

//       if (hash) {
//         $tabs.find('a[href="' + hash + '"]').addClass(TAB_ACTIVE_CLASS); // 1

//         $(hash).addClass(CONTENT_SHOW_CLASS); // 2
//       } else {
//         $tabs.find('li:first > a').addClass(TAB_ACTIVE_CLASS); // 3

//         $($content[0]).addClass(CONTENT_SHOW_CLASS); // 3
//       }
//     };

//     var addEvent = function addEvent() {
//       $tabs.find('a').on('click', function (e) {
//         var href = $(this).attr('href'); // 1

//         var $targetContent = $(href); // 1
//         // 2

//         if ($(this).hasClass(TAB_ACTIVE_CLASS)) {
//           return false;
//         } // 3


//         $tabs.find('a').removeClass(TAB_ACTIVE_CLASS);
//         $content.removeClass(CONTENT_SHOW_CLASS); // 4

//         $(this).addClass(TAB_ACTIVE_CLASS);
//         $targetContent.addClass(CONTENT_SHOW_CLASS);
//         return false;
//       });
//     };

//     return [initialize(), addEvent()];
//   };

//   tabMenu();
// }); // ---------------

$('.tabgroup > div').hide();
$('.tabgroup > div:first-of-type').show();
$('.tabs a').click(function(e){
  e.preventDefault();
    var $this = $(this),
        tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
        others = $this.closest('li').siblings().children('a'),
        target = $this.attr('href');
    others.removeClass('active');
    $this.addClass('active');
    $(tabgroup).children('div').hide();
    $(target).show();
  
})

// --------------------

var swipers = ["#swiper-container-One","#swiper-container-two","#swiper-container-three",
              "#swiper-container-four","#swiper-container-fives","#swiper-container-six"
              ];

for(var i =0; i<6;i++){
    

 var swiper = new Swiper(swipers[i], {
   slidesPerView: 5,   //同時顯示的slides數量
   spaceBetween: 10,   //slide之間的距離 (單位px)
   loop: false,
   pagination: {
     el: '.swiper-pagination',  
     clickable: true,  
   }
 });
}
// $('.carousel[data-type="multi"] .item').each(function () {
//   var next = $(this).next();

//   if (!next.length) {
//     next = $(this).siblings(':first');
//   }

//   next.children(':first-child').clone().appendTo($(this));

//   for (var i = 0; i < 2; i++) {
//     next = next.next();

//     if (!next.length) {
//       next = $(this).siblings(':first');
//     }

//     next.children(':first-child').clone().appendTo($(this));
//   }
// });




// chris 暫時取消

// function change(){

//       $('#myUFO_wardrobe_popUps_change').show();      
    
//     popUp("#資料傳送送的網址",content,btn1,btn2); 
// }



// //彈窗
// function addCar() 
// {
//     //這邊可以做餘額的判斷
//     var key = true; //餘額足夠  
//     //var key = false; //餘額不足
// ;
   
//      if(key){
//          $('#myUFO_wardrobe_popUps_car').show();
//      }
//     else{
//         $('#myUFO_wardrobe_popUps_car_less').show();  
//     }

// chris 暫時取消    
    
    



    
    
// }
    
   