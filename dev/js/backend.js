 //-----會員編輯彈窗------

       //顯示下拉選單
       $('.dropdown_arrow').click(function(e) {
        //  e.preventDefault();
         $('.dropdown_select').toggleClass('on');
        });
       
        $('#backend_options li').click(function(){
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

//-----拍立得管理彈窗------

       //打開彈窗
       $('.Edit_action').click(function(){
        $('.backend_my_photo_popUps').fadeIn(100);
      });
      
      // 關閉彈窗
      $('.btn_close').click(function(){
       $('.backend_my_photo_popUps').fadeOut(200);
      });