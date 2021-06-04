<?php
   include("../../Lib/Util.php");
   include("../../Lib/Member.php");

   //建立SQL
   $sql = "SELECT 
   r.store_name, r.store_address, r.store_tel,
   r.price_id, t.station_name, r.store_submit,  r.store_level,
   r.store_tag1, r.store_tag2, r.store_tag3,
   r.image_img, r.store_img, r.menu_img, r.food1_img, r.food2_img, r.food3_img
   FROM store r natural join station t
   where contact_tel = ?";

   //執行
   $statement = getPDO()->prepare($sql);
   $statement->bindValue(1 , getStoreMemberID()); 
   $statement->execute();
   $data = $statement->fetchAll();


   //回傳json
   echo json_encode($data);
?>