<?php
    include("../../Lib/Util.php");
    include("../../Lib/Member.php");

    //建立SQL
    $sql = "SELECT 
    r.store_name, r.store_address, r.store_tel,
    r.price_id, t.station_name, r.store_submit
    FROM store r natural join station t
    where contact_tel = ?";

    //執行
    $statement = getPDO()->prepare($sql);
    $statement->bindValue(1 , getStoreMemberID()); 
    // $statement->bindValue(2 , getStoreMemberID()); 
    $statement->execute();
    $data = $statement->fetchAll();

 
    //回傳json
    // echo 123;
    echo json_encode($data);
?>