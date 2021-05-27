 // 登入註冊切換
// 商家登入彈窗-----------------------------

 // 切換註冊時，商家登入隱藏、商家註冊出現
 $('#btn_signupStore').click(function(){
    $('#store_signUp').removeClass('blockNone').addClass('blockBlock');
    $('#storeLogin_popups').removeClass('blockBlock').addClass('blockNone');
});

// 按忘記密碼，出現忘記密碼的彈窗，覆蓋住登入彈窗

// 商家註冊(商家資訊)彈窗----------------------
// 商家註冊頁面，按右上角XX, 回商家登入彈窗
$('#store_signUp_close').click(function(){
    $('#store_signUp').removeClass('blockBlock').addClass('blockNone');
    $('#storeLogin_popups').removeClass('blockNone').addClass('blockBlock');
});
// 商家註冊頁面，按取消，都回商家登入彈窗
$('#store_signUp_back').click(function(){
    $('#store_signUp').removeClass('blockBlock').addClass('blockNone');
    $('#storeLogin_popups').removeClass('blockNone').addClass('blockBlock');
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