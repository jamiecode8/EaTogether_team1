 // 信用卡轉帳區，按返回回企業或個人
 $('.upgradeInfoConfirm_backTodetail').click(function(){
    $('.upgradeInfoConfirm_payment').css('display','none');
    $('.upgradeInfoConfirm_basic').css('display','block');
})

// 信用卡跟轉帳的切換
// 轉帳被click時
$('#upgradeInfoConfirm_acc').click(function(){
    $('.upgradeInfoConfirm_payment_acc')
    .removeClass('upgradeInfoConfirm_areaHide')
    .addClass('upgradeInfoConfirm_areaShow');
    $('.upgradeInfoConfirm_payment_card')
    .removeClass('upgradeInfoConfirm_areaShow')
    .addClass('upgradeInfoConfirm_areaHide');

})
// 信用卡被click時
$('#upgradeInfoConfirm_card').click(function(){
    $('.upgradeInfoConfirm_payment_acc')
    .removeClass('upgradeInfoConfirm_areaShow')
    .addClass('upgradeInfoConfirm_areaHide');
    $('.upgradeInfoConfirm_payment_card')
    .removeClass('upgradeInfoConfirm_areaHide')
    .addClass('upgradeInfoConfirm_areaShow');;
})

// 企業個人切換
// 個人 onclick 時
$('#upgradeInfoConfirm_personal').click(function(){
    $('.upgradeInfoConfirm_basic_personal')
    .removeClass('upgradeInfoConfirm_areaHide')
    .addClass('upgradeInfoConfirm_areaShow');
    $('.upgradeInfoConfirm_basic_co')
    .removeClass('upgradeInfoConfirm_areaShow')
    .addClass('upgradeInfoConfirm_areaHide');

})
$('#upgradeInfoConfirm_co').click(function(){
    $('.upgradeInfoConfirm_basic_personal')
    .removeClass('upgradeInfoConfirm_areaShow')
    .addClass('upgradeInfoConfirm_areaHide');
    $('.upgradeInfoConfirm_basic_co')
    .removeClass('upgradeInfoConfirm_areaHide')
    .addClass('upgradeInfoConfirm_areaShow');
})