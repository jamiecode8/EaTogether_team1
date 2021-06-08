<?php    
    include("../../Lib/Util.php");

    //取得GET過來的值
    $CID = $_GET["CID"]; //PK

    //建立SQL
    $sql = "DELETE FROM  member WHERE member_id = ?";
    // $sql = "UPDATE member set member_status = 0 WHERE member_id = ?";
    
    //執行
    $statement = getPDO()->prepare($sql);    
    $statement->bindValue(1 , $CID); 
    $statement->execute();

    //導頁    
    echo "<script>alert('會員已刪除!'); location.href = '../../../backend_member.html';</script>";  
?>