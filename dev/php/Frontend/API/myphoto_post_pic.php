<?php
    include("../../Lib/Util.php");

    //  //Web根目錄真實路徑, ex: C:/XAMPP/htdocs
     $ServerRoot = $_SERVER["DOCUMENT_ROOT"];

    //  //取得上傳的檔案資訊(陣列型態)=============================
     $fileName_arr = $_FILES["file"]["name"];    //檔案名稱含副檔名    
     $fileTmpName_arr = $_FILES["file"]["tmp_name"]; //Server上的暫存檔路徑含檔名    
     $fileType_arr = $_FILES["file"]["type"];    //檔案種類        
     $fileSize_arr = $_FILES["file"]["size"];    //檔案尺寸
     $error_arr = $_FILES["file"]["error"];  //錯誤代碼
    //  //=======================================================

    // //依上傳檔案的數量跑迴圈一一處理
    for ($i = 0; $i < count($fileName_arr); $i++) {        
        //Server上的暫存檔路徑含檔名
        $filePath_Temp = $fileTmpName_arr[$i];

        //檔案最終存放位置
        $filePath = $ServerRoot."/dist/img/upload/food/".$fileName_arr[$i];
        
        if($error_arr[$i] > 0){
            echo "上傳失敗: 錯誤代碼".$error_arr[$i];
        }else{
    
             //將暫存檔搬移到正確位置
            move_uploaded_file($filePath_Temp, $filePath);
    
            echo "<br/>==============<br/>";

            copy($filePath_Temp, $filePath);
                //取得POST過來的值
    
        }
    }

    //建立SQL
    $sql = "INSERT INTO photo
    (photo_id, member_id, store_id, store_star, 
    photo_img, photo_text, photo_like, photo_status, 
    tag1, tag2, tag3, photo_time
    )
    VALUES 
    (?,?,?,4,
    ?,?,?,?,
    ?,?,?,?,NOW(),?
    )";

    // print_r($fileName_arr[0]);
    // exit();
    //執行
    $statement = getPDO()->prepare($sql);

    //給值, 確認宏鈞改了那些名字
    
    $statement->bindValue(1, $_POST["photo_id"]);

    $statement->bindValue(2, $_POST["member_id"]);
    $statement->bindValue(3, $_POST["store_id"]);
    $statement->bindValue(4, $_POST["store_star"]);
    $statement->bindValue(5, $fileName_arr[0]);
    $statement->bindValue(6, $_POST["photo_text"]);

    $statement->bindValue(7, $_POST["photo_like"]);
    $statement->bindValue(8, $_POST["photo_status"]);

    $statement->bindValue(9, $_POST["tag1"]);
    $statement->bindValue(10, $_POST["tag2"]);
    $statement->bindValue(11, $_POST["tag3"]);
    $statement->bindValue(12, $_POST["photo_time"]);
    

    $statement->execute();

    echo "<script>alert('加入成功，請重新登入!'); location.href = '../../../login_store.html';</script>";
?>