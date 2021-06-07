//載入商家資訊------------------------------------
new Vue({
    el: '#store_wrap',
    data: {
      memberData: null,
      storePrice: [0,"<150","151~500","501~1000"],
      storeStatus: [0,"審核通過","審核中"],
      bottomArea: 1,
    },
    mounted: function mounted() {
      var self = this;
      init(); //登入檢查
  
      function init() {
        $.ajax({
          method: "POST",
          url: "./php/Frontend/API/StoreLoginCheck.php",
          data: {},
          dataType: "text",
          success: function success(response) {
            if (response == "") {
              //尚未登入->前往Login.php
              alert('請先登入，將前往登入頁');
              location.href = 'login_store.html';
            } else {
              getStoreMember();
            }
          },
          error: function error(exception) {
            alert("數據載入失敗1: " + exception.status);
          }
        });
      } // 撈商家資料
  
  
      function getStoreMember() {
        $.ajax({
          method: "POST",
          url: "./php/Frontend/API/storeMember.php",
          data: {},
          dataType: "json",
          success: function success(response) {
            displayStore(response);
          },
          error: function error(exception) {
            alert(exception.responseText);
            alert("數據載入失敗2: " + exception.status);
          }
        });
      } //顯示商家資料
  
  
      function displayStore(response) {
        self.memberData = response[0];
        console.log(self.memberData);
       
        // showMember();
  
      } //不同等級出現不同內容
  
    },
    methods: {}
  });
