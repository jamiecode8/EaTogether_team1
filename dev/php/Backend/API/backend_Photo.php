<?php    
    include("../../Lib/Util.php");

    //建立SQL
    $sql = "SELECT * FROM photo";
    
    //執行
    $statement = getPDO()->prepare($sql);
    $statement->execute();
    $data = $statement->fetchAll();

    //回傳json
    echo json_encode($data);
?>