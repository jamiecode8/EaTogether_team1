<?php
   include("../../Lib/Util.php");
   include("../../Lib/Member.php");

   //建立SQL
   $sql = "SELECT *
   FROM store r join station t on r.station_id = t.station_id
   where store_status = 2";

   //執行
   $statement = getPDO()->prepare($sql);
//    $statement->bindValue(1 , getStoreMemberID()); 
   $statement->execute();
   $data = $statement->fetchAll();


   //回傳json
   echo json_encode($data);
?>