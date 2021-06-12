<?php    
    include("../../Lib/Util.php");

    //建立SQL

    $sql = "SELECT * FROM photo WHERE photo_id = ?";
    
    //執行
    $statement = getPDO()->prepare($sql);
    $statement->bindValue(1,$_POST["photo_id"]);
    $statement->execute();
    $data = $statement->fetchAll();

    //回傳json
    echo json_encode($data);
?>