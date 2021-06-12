<?php    
    include("../../Lib/Util.php");
    include("../../Lib/Member.php");    
    
    //回傳session檢查結果
    // $photo_id = 1;  // getSessionB();
    // exit();
    //取得POST過來的值
    // $CID = $_POST["CID"]; //PK
    $photo_id =  $_POST["id"];
    $Status = $_POST["Status"]; 

    //建立SQL
    $sql = "UPDATE photo set photo_status = ? WHERE photo_id = ?";  //狀態 2:停權, 1:啟用  
    
    //執行
    $statement = getPDO()->prepare($sql);     
    $statement->bindValue(1 , $Status);
    $statement->bindValue(2 , $photo_id);
    $statement->execute();
    
    //導頁    
    echo "Y";
?>