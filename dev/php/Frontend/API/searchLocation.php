<?php
    include("../../Lib/Util.php");

    $station = $_POST["station"];

    $sql="SELECT store.store_tag1,store.store_tag2,store.store_tag3,price.price_interval,MRT_line.line_name,store.store_id,
     store.store_name,station.station_name,station.MRT_line_line_id,
     store.price_id,store.store_tel,store.store_address,
     store.store_img,store.menu_img,store.food1_img,store.food2_img,store.food3_img 
     FROM store 
     join station on store.station_id = station.station_id
     join MRT_line on MRT_line.line_id = station.MRT_line_line_id
     join price on price.price_id = store.price_id
     WHERE  station_name like ?";



    //給值
    $statement = getPDO()->prepare($sql);
    $statement->bindValue(1, $station);
    $statement->execute();
    $data = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data);
    
?>
