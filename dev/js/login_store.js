 // 登入註冊切換
 $('#btn_signup').click(function(){
    $(this).addClass('areaShow');
    $('#btn_login').removeClass('areaShow');
    $('#login_block').addClass('areaHide');
    $('#signUp_block').removeClass('areaHide');
});

$('#btn_login').click(function(){
    $(this).addClass('areaShow');
    $('#btn_signup').removeClass('areaShow');
    $('#signUp_block').addClass('areaHide');
    $('#login_block').removeClass('areaHide');
});

// 下拉選單-客單價
$('.login_station_arrow').click(function (e) {
    $('.login_station_select').toggleClass('on');
});


$('#login_station_options li').click(function(){
    let inputColor=document.getElementById('login_station_choice');
    inputColor.value=$(this).text();
    $('.login_station_select').toggleClass('on');

})



// 下拉選單-鄰近站點
$('.login_store_station_arrow').click(function (e) {
    // e.preventDefault();
$('.login_store_station_select').toggleClass('on');
});


$('#login_station_options_store li').click(function(){
    let inputColor=document.getElementById('login_station_choice_store');
    inputColor.value=$(this).text();
    $('.login_store_station_select').toggleClass('on');

})

// 那顆眼睛按下去，密碼會出現
$('.showPassword').click(function(){
    let myPassword = document.getElementById('myPassword')
    if( myPassword.type === "password"){
        myPassword.type = "text";
    }else{
        myPassword.type = "password";
    }
})