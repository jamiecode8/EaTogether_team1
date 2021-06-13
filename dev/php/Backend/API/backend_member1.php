<?php
    include("../../Lib/Util.php");

    //建立SQL
    $sql = "SELECT * 
    FROM member  
    -- r  JOIN station t  ON r.station = t.station_id
    JOIN station ON  member.station = station.station_id
    JOIN tag ON member.tag1 = tag.tag_id
    -- JOIN tag ON member.tag2 = tag.tag_id
    -- JOIN tag ON member.tag3 = tag.tag_id
    WHERE member_id =  ?";


    //執行
    $statement = getPDO()->prepare($sql);
    $statement->bindValue(1,$_POST["member_id"]);
    $statement->execute();
    $data = $statement->fetchAll();

    //回傳json
    echo json_encode($data);
?>