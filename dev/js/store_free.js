// store_free.html chart.js //紅黃綜綠藍
// 收藏次數
var ctx = document.getElementById('myChart_like');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['1-3', '4-6','7-9', '10-12', '13-15', '16-18', '19-21', '22-24', '25-27', '28-31'],
        datasets: [{
            label: '2021年5月份收藏次數',
            data: [537, 739, 876, 971, 1156, 1256, 1456, 1556, 1956, 2045],  
            backgroundColor: [
                'rgba(249,128,114,.3)',
                'rgba(165,141,100,.3)',
                'rgba(255,195,62,.3)',
                'rgba(123,170,133,.3)',
                'rgba(112,131,226,.3)',
                
            ],
            borderColor: [
                'rgba(249,128,114,1)',
                'rgba(165,141,100,1)',
                'rgba(255,195,62,1)',
                'rgba(123,170,133,1)',
                'rgba(112,131,226,1)', 
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// 點擊次數
var ctx = document.getElementById('myChart_click');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['1-3', '4-6','7-9', '10-12', '13-15', '16-18', '19-21', '22-24', '25-27', '28-31'],
        datasets: [{
            label: '2021年5月份點擊次數',
            data: [2537, 3739, 5476, 2971, 4156, 1956, 1456, 3556, 1956, 2045],  
            backgroundColor: [
                'rgba(249,128,114,.3)',
                'rgba(165,141,100,.3)',
                'rgba(255,195,62,.3)',
                'rgba(123,170,133,.3)',
                'rgba(112,131,226,.3)',
                
            ],
            borderColor: [
                'rgba(249,128,114,1)',
                'rgba(165,141,100,1)',
                'rgba(255,195,62,1)',
                'rgba(123,170,133,1)',
                'rgba(112,131,226,1)', 
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// 商家資訊
    new Vue({
        el: '#store_storeInfo',
        data: {    
            storeName: '吳留手串燒居酒屋-麗水店',
            storeTel: '0900-000-000',
            storeAdd: '南京東路三段2號5樓',
            storePrice: '500~1000',
            storeStation: '東門站',
            storeTag: '#日式料理 #居酒屋',
            storeState: '資料審核中',
        },
    });



// 輪播swiper 商家照片
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 6,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 6,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

  // ajax部分------------------------------
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
                getStoreMember();
            }              
        },
        error: function(exception) {
            alert("數據載入失敗: " + exception.status);
        }
    });
  }
  
  function getStoreMember(){    
    $.ajax({            
        method: "POST",
        url: "./php/Frontend/API/storeMember.php",
        data:{},            
        dataType: "json",
        success: function (response) {                
            showStoreMember(response);                       
        },
        error: function(exception) {
            alert("數據載入失敗: " + exception.status);
        }
    });
  }
  
  //顯示商家資料
  function showStoreMember(response){
    var price;
        switch(row.price_id){
            case "1":
                status = "<150";
                break;
            case "2": 
                status = "151~500";
                break;
            case "3": 
                status = "501~1000";
                break;                
        }
    $('#store_storeInfo').append(
        `<div class="store_storeInfo_Name">
            +<h1>`
              +  row.store_name +
            `</h1> 
            <a href="./login_store.html">+
                <button> +
                    <img src="./img/icon/icon_edit.png" alt=""> +
                </button>
            </a>
        </div>
        <div class="store_storeInfo_Detail">
            <ul>
                <li class="store_infoList store_infoTel">`
              +  row.store_tel +
                `</li>
                <li class="store_infoList store_infoMail">`
              +  row.store_address +
                `</li >
                <li class="store_infoList store_infoPrice">`
              +  price +
                `</li >
                <li  class="store_infoList store_infomrt">`
              +  row.station_id +
                `</li>
                <li  class="store_infoList store_infoTag">`
              +  row.station_id +
                `</li>
                <li class="store_infoList store_infoWarn">`
              +  store_submit +
                `</li>
            </ul>
        </div>`
    );
  
    //顯示會員資訊
    // showMember();
  }