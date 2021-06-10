<?php
    include("../../Lib/Util.php");
    include("../../Lib/Member.php");
    $memberID=$_POST["memberID"];

    $sql="SELECT store.store_tag1,store.store_tag2,store.store_tag3,price.price_interval,MRT_line.line_name,store.store_id,
     store.store_name,station.station_name,station.MRT_line_line_id,
     store.price_id,store.store_tel,store.store_address,
     store.store_img,store.menu_img,store.food1_img,store.food2_img,store.food3_img 
     FROM Favorites
     join store on Favorites.store_id = store.store_id
     join station on store.station_id = station.station_id
     join MRT_line on MRT_line.line_id = station.MRT_line_line_id
     join price on price.price_id = store.price_id
     WHERE member_id = ? 
     ORDER BY favorites_date DESC";

    $statement = getPDO()->prepare($sql);
    $statement->bindValue(1, $memberID);
    $statement->execute();
    $data = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data);
?>
