<?php
   include("../../Lib/Util.php");
   include("../../Lib/Member.php");

   //建立SQL
   $sql = "SELECT *
   FROM member 
   join station on station.station_id = member.station
   join tag on tag.tag_id = member.tag1 AND member.tag2 AND member.tag3
   where member_id = ?";

   //執行
   $statement = getPDO()->prepare($sql);
   $statement->bindValue(1 , getMemberID());
   $statement->execute();
   $data = $statement->fetchAll();


   //回傳json
   echo json_encode($data);
?>