// store_free.html chart.js //紅黃綜綠藍
// 收藏次數
function initChart(){
    var likeCount = document.getElementById('myChart_like');
    var myChart = new Chart(likeCount, {
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
    var clickCount = document.getElementById('myChart_click');
    var myChart = new Chart(clickCount, {
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
};

// 輪播swiper 商家照片
function initSwiper(){
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

};