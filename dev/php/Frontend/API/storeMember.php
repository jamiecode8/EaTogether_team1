
<?php
   include("../../Lib/Util.php");
   include("../../Lib/Member.php");

   //建立SQL
   $sql = "SELECT *
   FROM store 
   join station on station.station_id = store.station_id
   -- join MRT_line on MRT_line.line_id = station.MRT_line_line_id
   join price on price.price_id = store.price_id
   where contact_tel = ?";

   //執行
   $statement = getPDO()->prepare($sql);
   $statement->bindValue(1 , getStoreMemberID()); 
   $statement->execute();
   $data = $statement->fetchAll();


   //回傳json
   echo json_encode($data);
?>