$(function(){
  $("a.tab").on("click", function(e){
    e.preventDefault();
    
    /* 將頁籤列表移除所有 -on，再將指定的加上 -on */
    $(this).closest("ul").find("a.tab").removeClass("-on");
    $(this).addClass("-on");
    
    /* 找到對應的頁籤內容，加上 -on 來顯示 */
    $("div.tab").removeClass("-on");
    $("div.tab." + $(this).attr("data-target")).addClass("-on");
  });
});

// ---------輪播----------------

// var swiper = new Swiper('.swiper-container', {
//   slidesPerView: 5,   //同時顯示的slides數量
//   spaceBetween: 10,   //slide之間的距離 (單位px)
//   loop: true,
//   pagination: {
//     el: '.swiper-pagination',  
//     clickable: true,  
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });
$('.carousel[data-type="multi"] .item').each(function() {
	var next = $(this).next();
	if (!next.length) {
		next = $(this).siblings(':first');
	}
	next.children(':first-child').clone().appendTo($(this));

	for (var i = 0; i < 2; i++) {
		next = next.next();
		if (!next.length) {
			next = $(this).siblings(':first');
		}

		next.children(':first-child').clone().appendTo($(this));
	}
});