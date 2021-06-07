<?php
    include("../../Lib/Util.php");

    $storeID = $_POST["storeID"];

    //建立SQL       
    $sql="SELECT
        member.member_name,
        photo.member_id,
        photo.photo_text,
        photo.store_star,
        photo.store_id,
        store.store_name
    FROM
        photo
    JOIN store ON photo.store_id = store.store_id
    JOIN member ON member.member_id = photo.member_id
    WHERE photo.store_id=?";



    //給值
    $statement = getPDO()->prepare($sql);
    $statement->bindValue(1,$storeID);
    $statement->execute();
    $data = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data);
    
?>

