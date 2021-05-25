// 選擇方案頁----------------------------
// 升級方案
new Vue({
    el: '.upgradeOption_btnArea_option',
    data: {     //變數放這裡!
        // option: '月繳$399', 

    },
    methods: {  //函數大部分放這裡!
        // console.log(option);
    },
    computed: { //函數也可以放這裡!但是放在這裡的函數，不能傳參數，一定要有傳回值(return)
        
    },
});

// 資料確認頁----------------------------

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

// 企業
new Vue({
    el: '#upgradeInfo_co',
    data: {  
        companyName: '',
        companyId: '',
        companyAdd: '',
        contactName: '',
        contactTel: '',
    },
    methods: {},
    computed: {},
});

// 個人
new Vue({
    el: '#upgradeInfo_personal',
    data: {  
        contactName: '',
        contactAdd: '',
        contactTel: '',
    },
    methods: {},
    computed: {},
});

// 付款方式
new Vue({
    el: '#upgradeInfo_personal',
    data: {  
        contactName: '',
        contactAdd: '',
        contactTel: '',
    },
    methods: {},
    computed: {},
});

// 信用卡
document.addEventListener("DOMContentLoaded", function(){
    var cards = document.getElementsByClassName("input-cart-number");
    for(let i = 0; i < cards.length; i++){
      cards[i].addEventListener("keydown", function(e){

        //只能輸入數字或delete(8)
        if((e.which >= 48 && e.which <= 57) || e.which == 8){
          //刪除時可以往前跳一格
          //該欄位沒有值，並且按下delet時
          if(e.target.value.length == 0 && e.which == 8){
            let previous_el = this.previousElementSibling;
            previous_el.focus();
          }
        }else{
          //如果不是輸入數字，就不出現
          e.preventDefault();
        }
      });

      //過濾數字以外的內容
      cards[i].addEventListener("keyup", function(e){

        //使用者輸入的值，用取正規式取代: 全部(g)找到的字串，只要非數字，就改成空字串
        let str = (e.target.value).replace(/\D/g,"");
        e.target.value = str;

        //輸入4個字後跳同一層的下個欄位
        //console.log(str.length);
        if(str.length == 4){ 
          let next_el = this.nextElementSibling;
          //console.log(next_el);
          if(next_el != null){
            next_el.focus();
          }
        }
      });
    }

    let the_form_el = document.getElementById("upgradeInfo_card_form");
    //資料送出: 資料不符合格式，按下送出時，欄位變紅色(class),停止送出行為
    the_form_el.addEventListener("submit",function(e){
      
      let validDate_el = document.getElementById("validDate");
      let ccv_el = document.getElementById("ccv");
      
      let card_str = ""; //之後放卡號資料
      let cards = document.getElementsByClassName("input-cart-number");
      for(let i = 0; i < cards.length; i++){
        card_str += cards[i].value;
      }

      let send_data = true;
      
      //資料沒寫，不會送出，加紅框
      if(validDate_el.value == ""){
        send_data = false;
        validDate_el.classList.add("-error");
      }else{
        validDate_el.classList.remove("-error");
      }

      if(ccv_el.value == ""){
        send_data = false;
        ccv_el.classList.add("-error");
      }else{
        ccv_el.classList.remove("-error");
      }
     

      if(is.creditCard(card_str) ){
        for(let i = 0; i < cards.length; i++){
          cards[i].classList.remove("-error");
        }

      }else{
        send_data = false;
        for(let i = 0; i < cards.length; i++){
          cards[i].classList.add("-error");
        }
      }

      if(!send_data){
        e.preventDefault();
      }
      
    })
  });

  // 資料送出時(submit)，資料驗證：
  // 帳號必填
  // email：符合格式