<?php    
    include("../../Lib/Util.php");

    //取得GET過來的值
    $PID = $_GET["PID"]; //PK

    // echo $PID;
    // exit();

    //建立SQL
    $sql = "delete from photo_report where photo_report_id =?";
    //執行
    $statement = getPDO()->prepare($sql);
    $statement->bindValue(1 , $PID); 
    $statement->execute();

    //導頁    
    echo "<script>alert('檢舉已刪除!'); location.href = '../../../backend_my_photo.html';</script>";  
?>