//----------創建角色彈窗----------
            //打開角色彈窗
            $('.character').click(function (){
                $('.MyCharacter').fadeIn(50);
            });
            //關閉角色彈窗
            $('.btn_close').click(function (){
                $(this.parentNode.parentNode).fadeOut(200);
            });
            //點選其他部位
            //眼睛
            $('.choiceList_eye').click(function (){
                $('.choiceList_eye').addClass('on');
                $('.choiceList_body').addClass('off');
                $('.choiceList_mouth').removeClass('on');
                $('.choiceOrgan').fadeOut(100);
                $('.myEye').fadeIn(50);
            });
            //嘴巴
            $('.choiceList_mouth').click(function (){
                $('.choiceList_mouth').addClass('on');
                $('.choiceList_eye').removeClass('on');
                $('.choiceList_body').addClass('off');
                $('.choiceOrgan').fadeOut(100);
                $('.myMouth').fadeIn(50);
            });
            //身體
            $('.choiceList_body').click(function (){
                $('.choiceList_mouth').removeClass('on');
                $('.choiceList_eye').removeClass('on');
                $('.choiceList_body').removeClass('off');
                $('.choiceOrgan').fadeOut(100);
                $('.myBody').fadeIn(50);
            });
