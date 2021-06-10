<?php
    
    include("../../Lib/Util.php");

    //建立SQL
    $sql = "SELECT * FROM member";
    // $sql = "SELECT * FROM member WHERE member_status = 1";
    
   

    //執行
    $statement = getPDO()->prepare($sql);
    $statement->execute();
    $data = $statement->fetchAll();

    //回傳json
    echo json_encode($data);
?>