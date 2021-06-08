// 選擇方案頁----------------------------
// 升級方案
// new Vue({
//     el: '.upgradeOption_btnArea_option',
//     data: {     //變數放這裡!
//         // option: '月繳$399',
//     },
// });

// 資料確認頁----------------------------
// 企業
// new Vue({
//     el: '#upgradeInfo_co',
//     data: {  
//         companyName: '',
//         companyId: '',
//         companyAdd: '',
//         contactName: '',
//         contactTel: '',
//     },
//     methods: {},
//     computed: {},
// });

// 個人
// new Vue({
//     el: '#upgradeInfo_personal',
//     data: {  
//         contactName: '',
//         contactAdd: '',
//         contactTel: '',
//     },
//     methods: {},
//     computed: {},
// });

// 付款方式
// new Vue({
//     el: '#upgradeInfo_personal',
//     data: {  
//         contactName: '',
//         contactAdd: '',
//         contactTel: '',
//     },
//     methods: {},
//     computed: {},
// });

// 信用卡
// document.addEventListener("DOMContentLoaded", function(){
//     var cards = document.getElementsByClassName("input-cart-number");
//     for(let i = 0; i < cards.length; i++){
//       cards[i].addEventListener("keydown", function(e){

//         //只能輸入數字或delete(8)
//         if((e.which >= 48 && e.which <= 57) || e.which == 8){
//           //刪除時可以往前跳一格
//           //該欄位沒有值，並且按下delet時
//           if(e.target.value.length == 0 && e.which == 8){
//             let previous_el = this.previousElementSibling;
//             previous_el.focus();
//           }
//         }else{
//           //如果不是輸入數字，就不出現
//           e.preventDefault();
//         }
//       });

//       //過濾數字以外的內容
//       cards[i].addEventListener("keyup", function(e){

//         //使用者輸入的值，用取正規式取代: 全部(g)找到的字串，只要非數字，就改成空字串
//         let str = (e.target.value).replace(/\D/g,"");
//         e.target.value = str;

//         //輸入4個字後跳同一層的下個欄位
//         //console.log(str.length);
//         if(str.length == 4){ 
//           let next_el = this.nextElementSibling;
//           //console.log(next_el);
//           if(next_el != null){
//             next_el.focus();
//           }
//         }
//       });
//     }

//     let the_form_el = document.getElementById("upgradeInfo_card_form");
//     //資料送出: 資料不符合格式，按下送出時，欄位變紅色(class),停止送出行為
//     the_form_el.addEventListener("submit",function(e){
      
//       let validDate_el = document.getElementById("validDate");
//       let ccv_el = document.getElementById("ccv");
      
//       let card_str = ""; //之後放卡號資料
//       let cards = document.getElementsByClassName("input-cart-number");
//       for(let i = 0; i < cards.length; i++){
//         card_str += cards[i].value;
//       }

//       let send_data = true;
      
//       //資料沒寫，不會送出，加紅框
//       if(validDate_el.value == ""){
//         send_data = false;
//         validDate_el.classList.add("-error");
//       }else{
//         validDate_el.classList.remove("-error");
//       }

//       if(ccv_el.value == ""){
//         send_data = false;
//         ccv_el.classList.add("-error");
//       }else{
//         ccv_el.classList.remove("-error");
//       }
     

//       if(is.creditCard(card_str) ){
//         for(let i = 0; i < cards.length; i++){
//           cards[i].classList.remove("-error");
//         }

//       }else{
//         send_data = false;
//         for(let i = 0; i < cards.length; i++){
//           cards[i].classList.add("-error");
//         }
//       }

//       if(!send_data){
//         e.preventDefault();
//       }
      
//     })
//   });

  // 資料送出時(submit)，資料驗證：
  // 帳號必填
  // email：符合格式


// vue 個人企業切換
// Vue.component('company',{
//   template: `
//   <div class="upgradeInfoConfirm_basic_co" id="upgradeInfo_co">
//     <form action="" method="" class="form upgradeInfoConfirm_formC" id="upgradeInfo_company_form">
//         <input type="text" placeholder="公司抬頭"/>
//         <input type="number" placeholder="統一編號" oninput="if(value.length>8)value=value.slice(0,8)"/>
//         <input type="text" placeholder="登記地址"/>
//         <input type="text" placeholder="聯絡人"/>
//         <input type="number" placeholder="聯絡電話"/>
//         <div class="upgradeOption_btnArea_option priceChoice ">
//               <p>月繳$399</p>
//               <!-- <p>{{option}}</p> -->
//         </div>
        
//         <!-- 2顆按鈕用這個 -->
//         <div class="upgradeInfoConfirm_buttonArea_outer">
//             <div class="buttonArea upgradeInfoConfirm_buttonArea">
//                 <a href="/store_upgrade_option.html">
//                     <input type="button" value="返回" class="btn_cancel" />
//                 </a>
//                 <input type="submit" value="下一步" class="btn_next btn_next_upgradeInfoConfirm_basic">
//             </div>
//         </div>
//     </form>
//   </div>
//   `,
// });
// Vue.component('personal',{
//     template: `
//         <div class="upgradeInfoConfirm_basic_personal" id="upgradeInfo_personal">
//             <form action="" method=" " class="form upgradeInfoConfirm_formP" id="upgradeInfo_personal_form">
//                 <!-- 輸入框欄位 -->
//                 <input type="text" placeholder="姓名"/>
//                 <input type="text" placeholder="地址"/>
//                 <input type="number" placeholder="聯絡電話"  maxlength="10" oninput="if(value.length>10)value=value.slice(0,10)"/>
//                 <div class="priceChoice">
//                     <p>月繳$399</p>
//                     <!-- <p>{{option}}</p> -->
//                 </div>
                
//                 <div class="upgradeInfoConfirm_buttonArea_outer">
//                     <div class="buttonArea upgradeInfoConfirm_buttonArea">
//                         <a href="/store_upgrade_option.html">
//                             <input type="button" value="返回" class="btn_cancel" />
//                         </a>
//                         <input type="submit" value="下一步" class="btn_next btn_next_upgradeInfoConfirm_basic"/>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     `,
// });

// new Vue({
//     el: '#upgradeInfoConfirm_basic',
//     data: {
//         content: 'company', 
//     },
// });


// // 信用卡轉帳切換
// Vue.component('card',{
//   template: `
//   <div class="upgradeInfoConfirm_payment_card">
//       <form action="" method=" " class="form upgradeInfoConfirm_formC" id="upgradeInfo_card_form">
//           <!-- 輸入框欄位 -->
//           <label for="card-number" class="card_label">信用卡號碼</label>
//           <input type="num" id="card-number" class="input-cart-number" maxlength="4" />
//           <input type="num" id="card-number-1" class="input-cart-number" maxlength="4" />
//           <input type="num" id="card-number-2" class="input-cart-number" maxlength="4" />
//           <input type="num" id="card-number-3" class="input-cart-number" maxlength="4" />
//           <br>

//           <label for="validDate" class="card_label">有效日期</label>
//           <input type="text" id="validDate" /><br>
//           <label for="cvv" class="card_label">安全碼</label>
//           <input type="number" maxlength="3" id="ccv" />
//           <div class="priceChoice">
//               <p>月繳$399</p>
//               <!-- <p>{{option}}</p> -->
//           </div>
          
//           <!-- 2顆按鈕 -->
//           <div class="upgradeInfoConfirm_buttonArea_outer">
//               <div class="buttonArea upgradeInfoConfirm_buttonArea">
                  
//                   <button class="btn_pre btn_btn upgradeInfoConfirm_backTodetail">返回</button>
//                   <a href="/store_upgrade_complete.html">
//                       <input type="" value="下一步" class="btn_next" />
//                   </a>
//               </div>
//           </div>
//       </form>
//     </div>
//   `,
// });
// Vue.component('acc',{
//     template: `
//     <div class="upgradeInfoConfirm_payment_acc">
//         <form action="#資料傳送送的網址" method="" class="form upgradeInfoConfirm_formP">
//             <!-- 輸入框欄位 -->
//             <label for="bank" class="card_label">銀行</label>
//             <input type="text" value="台新銀行敦南分行" id="bank" class="trans_iput trans_iput_s"/><br>
//             <label for="bankAcc" class="card_label">銀行帳戶</label>
//             <input type="text" value="1010203040405" id="bankAcc" class="trans_iput"/><br>
//             <label for="accName" class="card_label">戶名</label>
//             <input type="text" value="外食一起來有限公司"  id="accName" class="trans_iput trans_iput_s"/><br>
//             <div class="priceChoice">
//                 <p>月繳$399</p>
//                 <!-- <p>{{option}}</p> -->
//             </div>
            
//             <!-- 2顆按鈕 -->
//             <div class="upgradeInfoConfirm_buttonArea_outer">
//                 <div class="buttonArea upgradeInfoConfirm_buttonArea">
                    
//                     <button class="btn_pre btn_btn upgradeInfoConfirm_backTodetail">返回</button>
//                     <a href="/store_upgrade_complete.html">
//                         <input type="" value="下一步" class="btn_next" />
//                     </a>
//                 </div>
//             </div>
//         </form>
//     </div>
//     `,
// });

// new Vue({
//     el: '#upgradeInfoConfirm_payment',
//     data: {
//         content: 'card', 
//     },
// });