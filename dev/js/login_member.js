
// 先暫時停止送出資料，不然會一直刷新頁面，之後要傳資料再來處理。
$('button').click(function (e) {
    e.preventDefault();
});

// 那顆眼睛按下去，密碼會出現
$('.showPassword').click(function () {
    let myPassword = document.getElementById('myPassword')
    if (myPassword.type === "password") {
        myPassword.type = "text";
    } else {
        myPassword.type = "password";
    }
})

// 登入註冊切換
$('#btn_signup').click(function () {
    $(this).addClass('areaShow');
    $('#btn_login').removeClass('areaShow');
    $('#login_block').addClass('areaHide');
    $('#signUp_block').removeClass('areaHide');
});

$('#btn_login').click(function () {
    $(this).addClass('areaShow');
    $('#btn_signup').removeClass('areaShow');
    $('#signUp_block').addClass('areaHide');
    $('#login_block').removeClass('areaHide');
});

