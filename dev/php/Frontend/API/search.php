<?php
    include("../../Lib/Util.php");

    $searchItem = $_POST["searchItem"]==''?'':"%".$_POST["searchItem"]."%";
    $line_name = $_POST["line_name"];
    $tag_name = $_POST["tag_name"];
    $str = $searchItem ==''|| $line_name=='' ?'or':'and';
    $str1= $line_name ==''||  $tag_name=='' ?'or':'and';

    //建立SQL       找捷運線跟標籤子查詢 join
    $sql="SELECT store.store_tag1,store.store_tag2,store.store_tag3,price.price_interval,MRT_line.line_name,store.store_id,
     store.store_name,station.station_name,station.MRT_line_line_id,
     store.price_id,store.store_tel,store.store_address,
     store.store_img,store.menu_img,store.food1_img,store.food2_img,store.food3_img 
     FROM store 
     join station on store.station_id = station.station_id
     join MRT_line on MRT_line.line_id = station.MRT_line_line_id
     join price on price.price_id = store.price_id
     join tag_associte on tag_associte.store_id = store.store_id
     WHERE  station_name like ? or 
     (store_name like ? {$str} line_name like ? {$str1} (store_tag1 = ? or store_tag2 = ? or store_tag3 = ?))
     GROUP BY store_name" ;

    // 全部需要的欄位
    // SELECT tag.tag_name,member.member_name,photo.member_id,photo.photo_text,
    // photo.store_star,price.price_interval,MRT_line.line_name,store.store_id,
    // store.store_name,station.station_name,station.MRT_line_line_id,
    // store.price_id,store.store_tel,store.store_address,
    // store.store_img,store.menu_img,store.food1_img,store.food2_img,store.food3_img 
    // FROM store 
    // join station on store.station_id = station.station_id
    // join MRT_line on MRT_line.line_id = station.MRT_line_line_id
    // join price on price.price_id = store.price_id
    // join photo on photo.store_id = store.store_id
    // join member on member.member_id = photo.member_id
    // join tag_associte on tag_associte.store_id = store.store_id
    // join tag on tag.tag_id = tag_associte.tag_id

    //給值
    $statement = getPDO()->prepare($sql);
    $statement->bindValue(1, $searchItem);
    $statement->bindValue(2, $searchItem);
    $statement->bindValue(3,$line_name);
    $statement->bindValue(4,$tag_name);
    $statement->bindValue(5,$tag_name);
    $statement->bindValue(6,$tag_name);
    $statement->execute();
    $data = $statement->fetchAll();
    echo json_encode($data);
    
?>
