<?php
    include("../../Lib/Util.php");
    $lineColor = $_POST["whatToEatColor"];
    $tag1 = $_POST["whatToEatCountry"];
    $tag2 = $_POST["whatToEat"];
    

    //建立SQL       找捷運線跟標籤子查詢 join
    $sql="SELECT store.store_tag1,store.store_tag2,store.store_tag3,price.price_interval,MRT_line.line_name,store.store_id,
     store.store_name,station.station_name,station.MRT_line_line_id,MRT_line.line_color,
     store.price_id,store.store_tel,store.store_address,
     store.store_img,store.menu_img,store.food1_img,store.food2_img,store.food3_img 
     FROM store 
     join station on store.station_id = station.station_id
     join MRT_line on MRT_line.line_id = station.MRT_line_line_id
     join price on price.price_id = store.price_id
     WHERE  (store_tag1 = ? or store_tag2 = ? or store_tag3 = ?) and (store_tag1 = ? or store_tag2 = ? or store_tag3 = ?) and line_color =  ?
     GROUP BY store_name" ;

    // 全部需要的欄位


    //給值
    $statement = getPDO()->prepare($sql);
    $statement->bindValue(1, $tag1 );
    $statement->bindValue(2, $tag1);
    $statement->bindValue(3, $tag1);
    $statement->bindValue(4, $tag2 );
    $statement->bindValue(5, $tag2);
    $statement->bindValue(6, $tag2);
    $statement->bindValue(7, $lineColor);
    $statement->execute();
    $data = $statement->fetchAll();
    echo json_encode($data);
    
?>
