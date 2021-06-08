<?php
    include("../../Lib/Util.php");

    //建立SQL
    $sql = "SELECT * FROM member WHERE  member_id = ?";
 
   

    //執行
    $statement = getPDO()->prepare($sql);
    $statement->bindValue(1,$_POST["member_id"]);
    $statement->execute();
    $data = $statement->fetchAll();

    //回傳json
    echo json_encode($data);
?>