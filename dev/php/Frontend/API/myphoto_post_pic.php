<?php
    include("../../Lib/Util.php");

    //  //Web根目錄真實路徑, ex: C:/XAMPP/htdocs
     $ServerRoot = $_SERVER["DOCUMENT_ROOT"];

    //  //取得上傳的檔案資訊(陣列型態)=============================
        $fileName = $_FILES["file"]["name"];    //檔案名稱含副檔名        
        $filePath_Temp = $_FILES["file"]["tmp_name"];   //Server上的暫存檔路徑含檔名        
        $fileType = $_FILES["file"]["type"];    //檔案種類        
        $fileSize = $_FILES["file"]["size"];    //檔案尺寸
    //  //=======================================================

    //Web根目錄真實路徑
    $ServerRoot = $_SERVER["DOCUMENT_ROOT"];
        
    //檔案最終存放位置
    //$filePath = $ServerRoot."/tfd101/project/g1/img/upload/myphoto/".$fileName;
    $filePath = $ServerRoot."/img/upload/myphoto".$fileName;

    //將暫存檔搬移到正確位置
    //move_uploaded_file($filePath_Temp, $filePath);

    //將暫存檔搬移到正確位置
    getFilePath($filePath_Temp, $filePath);

    //顯示檔案資訊
    // echo "檔案存放位置：".$filePath;
    // echo "<br/>";
    // echo "類型：".$fileType;
    // echo "<br/>";
    // echo "大小：".$fileSize;
    // echo "<br/>";
    
    include("switchdata.php");
    $data = go($pdo);
    //echo $data;


    //建立SQL
    $sql = "INSERT INTO photo
    (member_id, store_id, store_star, photo_img, photo_text, photo_like, photo_status, 
    tag1, tag2, tag3, photo_time)
    VALUES 
    (5, ?, 4, ?, ?, 30, 1, ?, ?, ?, NOW() )";

    // print_r($fileName_arr[0]);
    // exit();
    //執行
    $statement = getPDO()->prepare($sql);

    //給值, 確認宏鈞改了那些名字
    
    // $statement->bindValue(1, $_POST["photo_id"]);
    // $statement->bindValue(2, $_POST["member_id"]);
    $statement->bindValue(1, $data);
    $statement->bindValue(2, $fileName);
    $statement->bindValue(3, $_POST["photo_text"]);
    // $statement->bindValue(4, $_POST["store_star"]);

    // $statement->bindValue(7, $_POST["photo_like"]);
    // $statement->bindValue(8, $_POST["photo_status"]);

    $statement->bindValue(4, $_POST["tag1"]);
    $statement->bindValue(5, $_POST["tag2"]);
    $statement->bindValue(6, $_POST["tag3"]);
   
    

    $statement->execute();

    echo "<script>alert('發文成功!'); location.href = '../../../myphoto.html';</script>";
?>