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

            // ---- 優惠卷 --------------------------
            $('#coupon_wardrobe').click(function(){
                $('#wardrobe_coupon').css('display' , 'block').fadeIn(100);
                console.log('click ok');
                })
  
                $('.btn_close').click(function(){
                $('#wardrobe_coupon').fadeOut(200);
              });

              $(".buybtn").click(
                function(){
                  $(this).text("已領取");     
                  $(this).addClass("buyed");
                }
              );  

              $('#couponbut2').click(function(){
                $('#wardrobe_coupon2').css('display' , 'block').fadeIn(100);
                console.log('click ok');
                })
  
                $('.btn_close').click(function(){
                $('#wardrobe_coupon2').fadeOut(200);
              });
              
              $(".buybtn22").click(
                function(){
                  $(this).text("兌換成功");     
                  $(this).addClass("buyed22");
                }
              ); 
        //    -------------總分類-------------------
        $('#category').click(function(){
            $('#myUFO_category').css('display' , 'block').fadeIn(100);
            console.log('click ok');
            })

                               // 關閉彈窗
          $('.btn_close').click(function(){
          $('#myUFO_category').fadeOut(200);
          });
            

        //   ---------------每日任務的進度條-----------------------
        $('#more1').on('click', function(){
            $('.more1').val( $('.more1').val() + 100);
            return false;
          });
          
          $('#more2').on('click', function(){
            $('.more2').val( $('.more2').val() + 100);
            return false;
          });
          
          $('#more3').on('click', function(){
            $('.more3').val( $('.more3').val() + 100);
            return false;
          });
          
          $('#more4').on('click', function(){
            $('.more4').val( $('.more4').val() + 100);
            return false;
          });
          
          $('#more5').on('click', function(){
            $('.more5').val( $('.more5').val() + 100);
            return false;
          });
          
          $('#more6').on('click', function(){
            $('.more6').val( $('.more6').val() + 100);
            return false;
          });
          
          $(".buybtn1").click(
            function(){
              $(this).text("兌換");     
              $(this).addClass("buyed1");
            }
          );
          $(".buybtn2").click(
            function(){
              $(this).text("兌換");     
              $(this).addClass("buyed2");
            }
          );
          $(".buybtn3").click(
            function(){
              $(this).text("兌換");     
              $(this).addClass("buyed3");
            }
          );
          $(".buybtn4").click(
            function(){
              $(this).text("兌換");     
              $(this).addClass("buyed4");
            }
          );
          $(".buybtn5").click(
            function(){
              $(this).text("兌換");     
              $(this).addClass("buyed5");
            }
          );
          $(".buybtn6").click(
            function(){
              $(this).text("兌換");     
              $(this).addClass("buyed6");
            }
          );

          $('#more1').click(function(){
            $('#myUFOprogressbar').css('display' , 'block').fadeIn(100);
            console.log('click ok');
            })

                               // 關閉彈窗
          $('.btn_close').click(function(){
          $('#myUFOprogressbar').fadeOut(200);
          });
            $('#more2').click(function(){
            $('#myUFOprogressbar').css('display' , 'block').fadeIn(100);
            console.log('click ok');
            })
            $('#more3').click(function(){
            $('#myUFOprogressbar').css('display' , 'block').fadeIn(100);
            console.log('click ok');
            })   
            $('#more4').click(function(){
            $('#myUFOprogressbar').css('display' , 'block').fadeIn(100);
            console.log('click ok');
            })
            $('#more5').click(function(){
            $('#myUFOprogressbar').css('display' , 'block').fadeIn(100);
            console.log('click ok');
            })
            $('#more6').click(function(){
            $('#myUFOprogressbar').css('display' , 'block').fadeIn(100);
            console.log('click ok');
            })

