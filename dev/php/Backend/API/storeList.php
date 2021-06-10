<?php
   include("../../Lib/Util.php");
   include("../../Lib/Member.php");

    //建立SQL
    $sql = "SELECT *
    FROM store 
    join station on store.station_id = station.station_id
    join MRT_line on MRT_line.line_id = station.MRT_line_line_id
    join price on price.price_id = store.price_id
    WHERE store_status = 1";
 
    //執行
    $statement = getPDO()->prepare($sql);
    $statement->execute();
    $data = $statement->fetchAll();


   //回傳json
   echo json_encode($data);
?>