//關閉彈窗, 移除毛玻璃
// $('.btn_close').click(function(){
//     $('.wrapper').removeClass('blur');  
// })

//點選漢堡，彈窗消失
$('.ham').click(function(){
    $('.popUps').fadeOut(100);
    // $('.wrapper').removeClass('blur');  
});
//在漢堡選單出現時，移除blur

$('#ham_icon').click(function(){
    $('.wrapper').removeClass('blur');
});