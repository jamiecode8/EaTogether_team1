 //-----會員編輯彈窗------

       //顯示下拉選單
       $('.dropdown_arrow').click(function(e) {
        //  e.preventDefault();
         $('.dropdown_select').toggleClass('on');
        });
       
        $('#dropdown_options li').click(function(){
        let inputColor=document.getElementById('dropdown_choice');
        inputColor.value=$(this).text();
         $('.dropdown_select').toggleClass('on');
        });
  
       //打開彈窗
        $('.Edit_action').click(function(){
         $('.backend_member_popUps').fadeIn(100);
        });
  
       // 關閉彈窗
        $('.btn_close').click(function(){
         $('.backend_member_popUps').fadeOut(200);
        });

 //-----商家照片彈窗------

       //打開彈窗
       $('.Edit_action').click(function(){
        $('.backend_store_popUps').fadeIn(100);
       });
 
      // 關閉彈窗
       $('.btn_close').click(function(){
        $('.backend_store_popUps').fadeOut(200);
       });

