new Vue({
    el: '#store_wrap',
    data: {
        memberData: null,
        content: 'card', 
    },
    mounted() {
        const self = this
            init()
        //登入檢查
        function init(){    
            $.ajax({            
                method: "POST",
                url: "./php/Frontend/API/StoreLoginCheck.php",
                data:{},            
                dataType: "text",
                success: function (response) {
                    if(response == ""){
                        //尚未登入->前往Login.php
                        alert('請先登入，將前往登入頁'); 
                        location.href = 'login_store.html';
                    }else{
                        // alert('init() success');
                        getStoreMember();
                    }              
                },
                error: function(exception) {
                    alert("數據載入失敗1: " + exception.status);
                }
            });
        }
    
        // 撈商家資料
        function getStoreMember(){    
            $.ajax({            
                method: "POST",
                url: "./php/Frontend/API/storeMember.php",     
                data:{},        
                dataType: "json",
                success: function (response) {          
                    displayStore(response);                       
                },
                error: function(exception) {
                    alert(exception.responseText);
                    alert("數據載入失敗2: " + exception.status);
                }
            });
        }
    
        //顯示商家資料
        function displayStore(response){
            self.memberData = response[0]
            console.log(self.memberData);
            var price;
                switch(memberData.price_id){
                    case "1":
                        price = "<150";
                        break;
                    case "2": 
                        price = "151~500";
                        break;
                    case "3": 
                        price = "501~1000";
                        break;                
                }
                var submit;
                switch(memberData.store_submit){
                    case "1":
                    submit = "審核通過";
                        break;
                    case "2": 
                    submit = "審核中";
                        break;             
                }
            //顯示會員資訊
            // showMember();
        }
    
        //不同等級出現不同內容
        
    },
    methods:{

    }
    });
