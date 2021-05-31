<?php
    include("../../Lib/Util.php");
    include("../../Lib/Member.php");

    //取得POST過來的值
    // $CateName = $_POST["CateName"]; //分類名稱
    // $Status = $_POST["Status"];   //狀態 0:刪除, 1:下架, 2:上架

    //建立SQL
    $sql = "SELECT 
    store_name, store_name,store_tel,
    price_id, station_id, 
    FROM store where store_id = $storeID"; 

    //執行
    $statement = getPDO()->prepare($sql);
    $statement->execute();
    $data = $statement->fetchAll();

    //回傳json
    echo json_encode($data);
?>