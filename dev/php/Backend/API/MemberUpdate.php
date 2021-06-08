<?php    
    include("../../Lib/Util.php");
    include("../../Lib/Member.php");    
    
    //回傳session檢查結果
    
    $member_id = 1;  // getSessionB();
    // exit();
    //取得POST過來的值
    // $CID = $_POST["CID"]; //PK
    // $member_id =  $_POST["id"];
    $Status = $_POST["Status"]; 

    //建立SQL
    $sql = "UPDATE member set member_status = ? WHERE member_id = ?";  //狀態 2:停權, 1:啟用  
    
    //執行
    $statement = getPDO()->prepare($sql);     
    $statement->bindValue(1 , $Status);
    $statement->bindValue(2 , $member_id);
    $statement->execute();
    
    //導頁    
    echo "Y";
?>