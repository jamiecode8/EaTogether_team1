<?php
    include("../../Lib/Util.php");

    $keyword1 = $_POST["searchItem"]==''?'':"%".$_POST["searchItem"]."%";
    $keyword2 = $_POST["line_name"];
    $str = $keyword1 ==''|| $keyword2=='' ?'or':'and';
    // //DB 還沒有這些欄位
    // //$keyword = $_POST["tag_name"];
    

    //建立SQL       找捷運線跟標籤子查詢 join
     $sql = "SELECT A.store_name,A.station_name,A.MRT_line_line_id,B.line_name,A.store_tel,A.store_address,A.price_id  from 

     (SELECT store_name,station_name,station.MRT_line_line_id,store_tel,store_address,price_id 
      FROM store join station on store.station_id = station.station_id) as A
      
     join MRT_line as B on B.line_id = A.MRT_line_line_id

     WHERE  A.station_name like ? or (A.store_name like ? {$str} B.line_name like ?)" ;
    

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
    $statement->bindValue(1, $keyword1);
    $statement->bindValue(2, $keyword1);
    $statement->bindValue(3,$keyword2);
    $statement->execute();


        
    $data = $statement->fetchAll();
     
    echo json_encode($data);
?>
