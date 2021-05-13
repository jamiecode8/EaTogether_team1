new Vue({
    el: '.app',
    data:{
        blueStations: ['市政府','忠孝敦化','國父紀念館','板橋','新埔','府中','龍山寺'],
        redStation: ['淡水','劍潭','圓山','台北車站','東門','大安森林公園','信義安和','台北101'],
        greenStation: ['松山','南京三民','南京復興','中山','中正紀念堂','台電大樓','公館','景美'],
        brownStation: ['東湖','西湖','港墘','大直','中山國中','六張犁','萬芳社區'],
        yellowStation: ['頂溪','南京松江','忠孝新生','台北橋','徐匯中學','新莊'],
        selectedStation:'最愛捷運站點',
        selectedBlueStation: '藍線'
    },
    methods: {
        
    },
    computed:{

    },
})

  // 以下會員編輯彈窗
    // 下拉選單、喜好標籤
    $('.memberInfo_edit_editIcon_tag').click(function (){
        $('.memberInfo_edit_area_tag').toggleClass('on');
        });
    
        // 下拉選單、鄰近站點
        $('#memberInfo_editIcon_station').click(function (){
        $('.memberInfo_edit_area_stationSelect').toggleClass('on');
        });
    
        $('#memberInfo_edit_area_stationSelect li').click(function(){
            let inputColor=document.getElementById('memberInfo_station_input');
            inputColor.value=$(this).text();
            $('.memberInfo_edit_area_stationSelect').toggleClass('on');
        });
    
        // 那顆眼睛按下去，密碼會出現
        $('.showPassword').click(function(){
            let myPassword = document.getElementById('myPassword')
            if( myPassword.type === "password"){
                myPassword.type = "text";
            }else{
                myPassword.type = "password";
            }
        })
    
        // 串料庫後要修改；按送出也是關閉彈窗
        $('.memberInfo_edit_submit').click(function(){
        $(this.parentNode.parentNode).fadeOut(100);
        });
    
        // 以上會員編輯彈窗
    
    
        // 以下登入註冊彈窗
        // 關閉登入註冊彈窗
        $('.btn_close').click(function(){
        $(this.parentNode.parentNode).fadeOut(100);
        });
    
        //串料庫後要修改；目前是按送出，會跳出會員編輯 
        $('#memberLogin_submit').click(function(){
        $(this.parentNode.parentNode).fadeOut(100);   
        $('#memberInfo_edit').css('display', 'block').fadeIn(300); 
        });
    
    
        //認證彈窗開關(目前無效) Chris
        $('.forgetPassword').click(function(){
            // $('.wrapper').addClass('blur');
            $(".wrapper:not(.verification)").addClass('blur');  
            $('.verification').removeClass('areaHide').addClass('verifiShow').removeClass('blur');
            $('.ver_submit').click(function(){
            $('.verification').removeClass('verifiShow').addClass('areaHide');
            $('.wrapper').removeClass('blur');
            });
        });
        
        //關閉認證彈窗 Chris
        $('.btn_close').click(function(){
            $('.verification').addClass('areaHide');  
        })
    
        // 開啟登入註冊寫在header裡
        // 登入註冊切換
        $('#btn_signup').click(function(){
            // $('.wrapper:not(.login)').addClass('blur');
            $(this).addClass('areaShow');
            $('#btn_login').removeClass('areaShow');
            $('#login_block').addClass('areaHide');
            $('#signUp_block').removeClass('areaHide');
            // $('.wrapper').addClass('blur'); //背景毛玻璃
        });
    
        $('#btn_login').click(function(){
            $(this).addClass('areaShow');
            $('#btn_signup').removeClass('areaShow');
            $('#signUp_block').addClass('areaHide');
            $('#login_block').removeClass('areaHide');
        });
    
        // 下拉選單
        $('.login_station_arrow').click(function (e) {
            // e.preventDefault();
            $('.login_station_select').toggleClass('on');
        });
    
    
        $('#login_station_options li').click(function(){
            let inputColor=document.getElementById('login_station_choice');
            inputColor.value=$(this).text();
            $('.login_station_select').toggleClass('on');
        });
    
        // 會員註冊-喜好選單開關
        $('.signUp_tag_area').click(function (){
        $('.login_tag_select').toggleClass('on');
        });
    
        //關閉彈窗, 移除毛玻璃
        $('.btn_close').click(function(){
            $('.wrapper').removeClass('blur');  
        })
