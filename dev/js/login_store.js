 // 登入註冊切換
// 商家登入彈窗-----------------------------

 // 切換註冊時，商家登入隱藏、商家註冊出現
 $('#btn_signupStore').click(function(){
    $('#store_signUp').removeClass('blockNone').addClass('blockBlock');
    $('#storeLogin_popups').removeClass('blockBlock').addClass('blockNone');
});

// 按忘記密碼，出現忘記密碼的彈窗，覆蓋住登入彈窗

// 商家註冊(商家資訊)彈窗----------------------
// 商家註冊頁面，按右上角XX, 回商家登入彈窗
$('#store_signUp_close').click(function(){
    $('#store_signUp').removeClass('blockBlock').addClass('blockNone');
    $('#storeLogin_popups').removeClass('blockNone').addClass('blockBlock');
});
// 商家註冊頁面，按取消，都回商家登入彈窗
$('#store_signUp_back').click(function(){
    $('#store_signUp').removeClass('blockBlock').addClass('blockNone');
    $('#storeLogin_popups').removeClass('blockNone').addClass('blockBlock');
});

// 下拉選單-客單價
$('.login_station_arrow').click(function (e) {
    $('.login_station_select').toggleClass('on');
});


$('#login_station_options li').click(function(){
    let inputColor=document.getElementById('login_station_choice');
    inputColor.value=$(this).text();
    $('.login_station_select').toggleClass('on');

})

// 下拉選單-鄰近站點
$('.login_store_station_arrow').click(function (e) {
$('.login_store_station_select').toggleClass('on');
});


$('#login_station_options_store li').click(function(){
    let inputColor=document.getElementById('login_station_choice_store');
    inputColor.value=$(this).text();
    $('.login_store_station_select').toggleClass('on');

})

// 那顆眼睛按下去，密碼會出現
$('.showPassword').click(function(){
    let myPassword = document.getElementById('myPassword')
    if( myPassword.type === "password"){
        myPassword.type = "text";
    }else{
        myPassword.type = "password";
    }
})


// 上傳照片
function doFirst(){
    document.getElementById('theFile1').onchange = fileChange;
    document.getElementById('theFile1').ondragover = dragOver;
    document.getElementById('theFile1').ondrop = dropped;
    document.getElementById('theFile2').onchange = fileChange2;
    // document.getElementById('theFile2').ondragover = dragOver2;
    // document.getElementById('theFile2').ondrop = dropped2;
    document.getElementById('theFile3').onchange = fileChange3;
    // document.getElementById('theFile3').ondragover = dragOver3;
    // document.getElementById('theFile3').ondrop = dropped3;
    document.getElementById('theFile4').onchange = fileChange4;
    // document.getElementById('theFile4').ondragover = dragOver4;
    // document.getElementById('theFile4').ondrop = dropped4;
    document.getElementById('theFile5').onchange = fileChange5;
    // document.getElementById('theFile5').ondragover = dragOver5;
    // document.getElementById('theFile5').ondrop = dropped5;
    document.getElementById('theFile6').onchange = fileChange6;
    // document.getElementById('theFile6').ondragover = dragOver6;
    // document.getElementById('theFile6').ondrop = dropped6;
  }
  //按鈕上傳照片功能   
  function fileChange(){
    let file = document.getElementById('theFile1').files[0];
    // let file = document.querySelectorAll('.btn_upload').files[0];
    let readFile = new FileReader();
    readFile.readAsDataURL(file);
    readFile.addEventListener('load',function(){
      let image = document.getElementById('store_image1');
      image.src = readFile.result;
      if( image.src != ""){          
          let btn_Upload = document.getElementsByClassName('picUpload')[0];
          image.style.maxWidth = '300px';
          image.style.maxHeight = '300px';
          btn_Upload.style.left = '240px';
          btn_Upload.style.top = '250px';
      }
    });
  }
 //拖曳上傳照片功能  
  function dragOver(e){
    e.preventDefault();
  }
  
  function dropped(e){
    e.preventDefault();
    let file = e.dataTransfer.files[0];
  
    let readFile = new FileReader();
    readFile.readAsDataURL(file);
    readFile.addEventListener('load',function(){
      let image = document.getElementById('store_image1');
      image.src = readFile.result;
      if( image.src != ""){          
        let btn_Upload = document.getElementById('picUpload1');
        image.style.maxWidth = '300px';
        image.style.maxHeight = '300px';
        btn_Upload.style.left = '240px';
        btn_Upload.style.top = '250px';
    }
    });
  }

//   以下有時間來研究怎麼改成迴圈------------------------------------------
function fileChange2(){
    let file = document.getElementById('theFile2').files[0];
    // let file = document.querySelectorAll('.btn_upload').files[0];
    let readFile = new FileReader();
    readFile.readAsDataURL(file);
    readFile.addEventListener('load',function(){
      let image = document.getElementById('store_image2');
      image.src = readFile.result;
      if( image.src != ""){          
        let btn_Upload = document.getElementById('picUpload2');;
          image.style.maxWidth = '300px';
          image.style.maxHeight = '300px';
          btn_Upload.style.left = '240px';
          btn_Upload.style.top = '250px';
      }
    });
  }
//  //拖曳上傳照片功能  
//   function dragOver2(e){
//     e.preventDefault();
//   }
  
//   function dropped2(e){
//     e.preventDefault();
//     let file = e.dataTransfer.files[0];
  
//     let readFile = new FileReader();
//     readFile.readAsDataURL(file);
//     readFile.addEventListener('load',function(){
//       let image = document.getElementById('store_image2');
//       image.src = readFile.result;
//       if( image.src != ""){          
//         let btn_Upload = document.getElementsByClassName('picUpload')[0];
//         image.style.maxWidth = '300px';
//         image.style.maxHeight = '300px';
//         btn_Upload.style.left = '240px';
//         btn_Upload.style.top = '210px';
//     }
//     });
//   }

  function fileChange3(){
    let file = document.getElementById('theFile3').files[0];
    // let file = document.querySelectorAll('.btn_upload').files[0];
    let readFile = new FileReader();
    readFile.readAsDataURL(file);
    readFile.addEventListener('load',function(){
      let image = document.getElementById('store_image3');
      image.src = readFile.result;
      if( image.src != ""){          
        let btn_Upload = document.getElementById('picUpload3');
          image.style.maxWidth = '300px';
          image.style.maxHeight = '300px';
          btn_Upload.style.left = '240px';
          btn_Upload.style.top = '250px';
      }
    });
  }
//  //拖曳上傳照片功能  
//   function dragOver3(e){
//     e.preventDefault();
//   }
  
//   function dropped3(e){
//     e.preventDefault();
//     let file = e.dataTransfer.files[0];
  
//     let readFile = new FileReader();
//     readFile.readAsDataURL(file);
//     readFile.addEventListener('load',function(){
//       let image = document.getElementById('store_image3');
//       image.src = readFile.result;
//       if( image.src != ""){          
//         let btn_Upload = document.getElementsByClassName('picUpload')[0];
//         image.style.maxWidth = '300px';
//         image.style.maxHeight = '300px';
//         btn_Upload.style.left = '240px';
//         btn_Upload.style.top = '210px';
//     }
//     });
//   }

  function fileChange4(){
    let file = document.getElementById('theFile4').files[0];
    // let file = document.querySelectorAll('.btn_upload').files[0];
    let readFile = new FileReader();
    readFile.readAsDataURL(file);
    readFile.addEventListener('load',function(){
      let image = document.getElementById('store_image4');
      image.src = readFile.result;
      if( image.src != ""){          
        let btn_Upload = document.getElementById('picUpload4');
          image.style.maxWidth = '300px';
          image.style.maxHeight = '300px';
          btn_Upload.style.left = '240px';
          btn_Upload.style.top = '250px';
      }
    });
  }
//  //拖曳上傳照片功能  
//   function dragOver4(e){
//     e.preventDefault();
//   }
  
//   function dropped4(e){
//     e.preventDefault();
//     let file = e.dataTransfer.files[0];
  
//     let readFile = new FileReader();
//     readFile.readAsDataURL(file);
//     readFile.addEventListener('load',function(){
//       let image = document.getElementById('store_image4');
//       image.src = readFile.result;
//       if( image.src != ""){          
//         let btn_Upload = document.getElementsByClassName('picUpload')[0];
//         image.style.maxWidth = '300px';
//         image.style.maxHeight = '300px';
//         btn_Upload.style.left = '240px';
//         btn_Upload.style.top = '210px';
//     }
//     });
//   }

  function fileChange5(){
    let file = document.getElementById('theFile5').files[0];
    // let file = document.querySelectorAll('.btn_upload').files[0];
    let readFile = new FileReader();
    readFile.readAsDataURL(file);
    readFile.addEventListener('load',function(){
      let image = document.getElementById('store_image5');
      image.src = readFile.result;
      if( image.src != ""){          
        let btn_Upload = document.getElementById('picUpload5');
          image.style.maxWidth = '300px';
          image.style.maxHeight = '300px';
          btn_Upload.style.left = '240px';
          btn_Upload.style.top = '250px';
      }
    });
  }
//  //拖曳上傳照片功能  
//   function dragOver5(e){
//     e.preventDefault();
//   }
  
//   function dropped5(e){
//     e.preventDefault();
//     let file = e.dataTransfer.files[0];
  
//     let readFile = new FileReader();
//     readFile.readAsDataURL(file);
//     readFile.addEventListener('load',function(){
//       let image = document.getElementById('store_image5');
//       image.src = readFile.result;
//       if( image.src != ""){          
//         let btn_Upload = document.getElementsByClassName('picUpload')[0];
//         image.style.maxWidth = '300px';
//         image.style.maxHeight = '300px';
//         btn_Upload.style.left = '240px';
//         btn_Upload.style.top = '210px';
//     }
//     });
//   }

  function fileChange6(){
    let file = document.getElementById('theFile6').files[0];
    // let file = document.querySelectorAll('.btn_upload').files[0];
    let readFile = new FileReader();
    readFile.readAsDataURL(file);
    readFile.addEventListener('load',function(){
      let image = document.getElementById('store_image6');
      image.src = readFile.result;
      if( image.src != ""){          
        let btn_Upload = document.getElementById('picUpload6');
          image.style.maxWidth = '300px';
          image.style.maxHeight = '300px';
          btn_Upload.style.left = '240px';
          btn_Upload.style.top = '250px';
        // btn_Upload.addClass("moveButton");
      }
    });
  }
//  //拖曳上傳照片功能  
//   function dragOver6(e){
//     e.preventDefault();
//   }
  
//   function dropped6(e){
//     e.preventDefault();
//     let file = e.dataTransfer.files[0];
  
//     let readFile = new FileReader();
//     readFile.readAsDataURL(file);
//     readFile.addEventListener('load',function(){
//       let image = document.getElementById('store_image6');
//       image.src = readFile.result;
//       if( image.src != ""){          
//         let btn_Upload = document.getElementsByClassName('picUpload')[0];
//         image.style.maxWidth = '300px';
//         image.style.maxHeight = '300px';
//         btn_Upload.style.left = '240px';
//         btn_Upload.style.top = '210px';
//     }
//     });
//   }
window.addEventListener('load',doFirst);