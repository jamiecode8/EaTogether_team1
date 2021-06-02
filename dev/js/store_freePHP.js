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
            // alert('getStoreMember() success');
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
    $.each(response, function(index, row) {
        var price;
            switch(row.price_id){
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
        switch(row.store_submit){
            case "1":
            submit = "審核通過";
                break;
            case "2": 
            submit = "審核中";
                break;             
        }
        $('#store_storeInfo').append(
            `<div class="store_storeInfo_Name">
                <h1> ${row.store_name}</h1> 
                <a href="./login_store.html">
                    <button> 
                        <img src="./img/icon/icon_edit.png" alt="">
                    </button>
                </a>
            </div>
            <div class="store_storeInfo_Detail">
                <ul>
                    <li class="store_infoList store_infoTel">
                    ${row.store_tel}
                    </li>
                    <li class="store_infoList store_infoMail">
                    ${row.store_address}
                    </li >
                    <li class="store_infoList store_infoPrice">
                    ${price}
                    </li >
                    <li  class="store_infoList store_infomrt">
                    ${row.station_name}
                    </li>
                    <li  class="store_infoList store_infoTag">
                    ${row.station_id}
                    </li>
                    <li class="store_infoList store_infoWarn">
                    ${submit}
                    </li>
                </ul>
            </div>`
        );
    });

    //顯示會員資訊
    // showMember();
}

//不同等級出現不同內容