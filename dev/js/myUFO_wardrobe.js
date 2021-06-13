
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
   spaceBetween: 0,   //slide之間的距離 (單位px)
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

function change(){

      $('#myUFO_wardrobe_popUps_change').show();      
    
    popUp("#資料傳送送的網址",content,btn1,btn2); 
}



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

$('#myUFO_wardrobe_popUpsbox').click(function () {
  $('#myUFO_wardrobe_popUps_car').css('display', 'block').fadeIn(100);
  console.log('click ok');
})

// 關閉彈窗
$('.btn_close').click(function () {
  $('#myUFO_wardrobe_popUps_car').fadeOut(200);
});


    function init(){
          $.ajax({            
            method: "POST",
            url: "./php/Frontend/API/LoginCheck.php",
            data:{},            
            dataType: "text",
            success: function (response) {
                if(response == ""){
                  alert('請先登入，將前往登入頁'); 
                  location.href = 'login_member.html';                
                }else{
                  getData();
                }
            },
            error: function(exception) {
                alert("數據載入失敗: " + exception.status);
            },
        });
      };  
    