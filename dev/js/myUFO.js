//----------創建角色彈窗----------
//打開角色彈窗
$('.character').click(function () {
  $('.MyCharacter').fadeIn(50);
});
//關閉角色彈窗
$('.btn_close').click(function () {
  $(this.parentNode.parentNode).fadeOut(200);
});
//點選其他部位
//眼睛
$('.choiceList_eye').click(function () {
  $('.choiceList_eye').addClass('on');
  $('.choiceList_body').addClass('off');
  $('.choiceList_mouth').removeClass('on');
  $('.choiceOrgan').fadeOut(100);
  $('.myEye').fadeIn(50);
});
//嘴巴
$('.choiceList_mouth').click(function () {
  $('.choiceList_mouth').addClass('on');
  $('.choiceList_eye').removeClass('on');
  $('.choiceList_body').addClass('off');
  $('.choiceOrgan').fadeOut(100);
  $('.myMouth').fadeIn(50);
});
//身體
$('.choiceList_body').click(function () {
  $('.choiceList_mouth').removeClass('on');
  $('.choiceList_eye').removeClass('on');
  $('.choiceList_body').removeClass('off');
  $('.choiceOrgan').fadeOut(100);
  $('.myBody').fadeIn(50);
});

// ---- 優惠卷 --------------------------
$('#coupon_wardrobe').click(function () {
  $('#wardrobe_coupon').css('display', 'block').fadeIn(100);
  console.log('click ok');
})

$('.btn_close').click(function () {
  $('#wardrobe_coupon').fadeOut(200);
});

$(".buybtn").click(
  function () {
    $(this).text("已兌換");
    $(this).addClass("buyed");
  }
);

$('#couponbut2').click(function () {
  $('#wardrobe_coupon2').css('display', 'block').fadeIn(100);
  console.log('click ok');
})

$('.btn_close').click(function () {
  $('#wardrobe_coupon2').fadeOut(200);
});

$(".buybtn22").click(
  function () {
    $(this).text("兌換成功");
    $(this).addClass("buyed22");
  }
);

// -------------收藏店家--------------
// $('#Favoritesbox').click(function () {
//   $('#myUFO_Favorites').css('display', 'block').fadeIn(100);
//   console.log('click ok');
// })

// // 關閉彈窗
// $('.btn_close').click(function () {
//   $('#myUFO_Favorites').fadeOut(200);
// });

//    -------------總分類-------------------
$('#category').click(function () {
  $('#myUFO_category').css('display', 'block').fadeIn(100);
  console.log('click ok');
})

// 關閉彈窗
$('.btn_close').click(function () {
  $('#myUFO_category').fadeOut(200);
});


//   ---------------每日任務的進度條-----------------------
$('#more1').on('click', function () {
  $('.more1').val($('.more1').val() + 100);
  return false;
});

$('#more2').on('click', function () {
  $('.more2').val($('.more2').val() + 100);
  return false;
});

$('#more3').on('click', function () {
  $('.more3').val($('.more3').val() + 100);
  return false;
});

$('#more4').on('click', function () {
  $('.more4').val($('.more4').val() + 100);
  return false;
});

$('#more5').on('click', function () {
  $('.more5').val($('.more5').val() + 100);
  return false;
});

$('#more6').on('click', function () {
  $('.more6').val($('.more6').val() + 100);
  return false;
});

$(".buybtn1").click(
  function () {
    $(this).text("兌換");
    $(this).addClass("buyed1");
  }
);
$(".buybtn2").click(
  function () {
    $(this).text("兌換");
    $(this).addClass("buyed2");
  }
);
$(".buybtn3").click(
  function () {
    $(this).text("兌換");
    $(this).addClass("buyed3");
  }
);
$(".buybtn4").click(
  function () {
    $(this).text("兌換");
    $(this).addClass("buyed4");
  }
);
$(".buybtn5").click(
  function () {
    $(this).text("兌換");
    $(this).addClass("buyed5");
  }
);
$(".buybtn6").click(
  function () {
    $(this).text("兌換");
    $(this).addClass("buyed6");
  }
);

$('#more1').click(function () {
  $('#myUFOprogressbar').css('display', 'block').fadeIn(100);
  console.log('click ok');
})

// 關閉彈窗
$('.btn_close').click(function () {
  $('#myUFOprogressbar').fadeOut(200);
});
$('#more2').click(function () {
  $('#myUFOprogressbar').css('display', 'block').fadeIn(100);
  console.log('click ok');
})
$('#more3').click(function () {
  $('#myUFOprogressbar').css('display', 'block').fadeIn(100);
  console.log('click ok');
})
$('#more4').click(function () {
  $('#myUFOprogressbar').css('display', 'block').fadeIn(100);
  console.log('click ok');
})
$('#more5').click(function () {
  $('#myUFOprogressbar').css('display', 'block').fadeIn(100);
  console.log('click ok');
})
$('#more6').click(function () {
  $('#myUFOprogressbar').css('display', 'block').fadeIn(100);
  console.log('click ok');
})


// -----------收藏店家彈窗內容-------------------

// var app = new Vue({
//   el:'#Favorites_app',
//   data:{
//     list:[
//       {
//         id: 1,
//         img:'https://image.flaticon.com/icons/png/128/4772/4772843.png',
//         name: '梯八米咖啡廳',
//         price: '',
//         count: 1,
//         checked: true
//       },
//       {
//         id: 2,
//         name: '梯八米鹹水雞',
//         price: '',
//         count: 1,
//         checked: true
//       },
//       {
//         id: 3,
//         name: '梯八米我不知道要寫啥',
//         price: '',
//         count: 1,
//         checked: true
//       }
//     ],
//     all: []
    
//   },
//   methods:{
//     remove(idx){
//       this.list.splice(idx, 1);
//     },
//     add(idx){
//       this.list[idx].count++;
//     },
//     reduce(idx){
//       if(this.list[idx].count == 0){
//         return;
//       }
//       this.list[idx].count--;
//     },
//     toggleSelect(){
//       var select = this.selectAll;
//       this.list.forEach((item)=>{
        
//         item.checked = !select;

//       });
//     }
//   },
//   computed:{

//     selectAll(){
//       var chooseAll =  this.list.every((item)=>{
//         return item.checked;
//       });
//       console.log(chooseAll);
//       return chooseAll;
//     }
//   }
// });
     var aVue= new Vue({
      el: '#app_collection',
      data: {
        memberID:'',
        myStores:[],
        borderStore:null,
      },
      methods: {
        removFavorite(collection,key) {
          collection.show = false;
          this.$forceUpdate();
          aVue.borderStore = collection;
          var like = this;
          $.ajax({            
            method: "POST",
            url: "./php/Frontend/API/RemoveFavorite.php",
            data:{
                favorite:aVue.borderStore.store_id,
            },            
            dataType: "text",
                success: function (response) {
                        $('.heartButton').click(function () {
                        $(this.parentNode).fadeOut(500);
                });
                                
                },
                error: function(exception) {
                    alert("數據載入失敗: " + exception.status);
                }
            });
          },
        }
    });

    $('#Favoritesbox').click(function () {
        loginCheck();
    });
    
    $('.getMyCollectionClose').click(function () {
      $('.myCollection_pop').fadeOut(100);
    });
    var memberId2="";
    function loginCheck(){    
        $.ajax({            
            method: "POST",
            url: "./php/Frontend/API/LoginCheck.php",
            data:{},            
            dataType: "text",
            success: function (response) {
                if(response == ""){
                    //尚未登入->前往Login.php
                    alert('請先登入，將前往登入頁');
                    location.href = 'login_member.html';
                }else{
                    memberId2=response;
                    $('.myCollection_pop').fadeIn(100);
                    getMyCollection();
                }              
            },
            error: function(exception) {
                alert("數據載入失敗: " + exception.status);
            }
        });
    }

    function getMyCollection(){
      $.ajax({
          method: "POST",
          url: "./php/Frontend/API/getFavorite.php",
          data: {
              memberID:memberId2,
          },
          dataType: "json",
          success: function (response) {
              var myStore = response ;
              aVue.myStores=myStore;
              console.log(aVue);
          },
          error: function (exception) {
              alert("數據載入失敗: " + exception.status);
          }
      });
    }
   
