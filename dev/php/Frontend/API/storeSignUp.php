<!-- jamie已編輯 -->
<?php
    include("../../Lib/Util.php"); 
    $t = date('Y-m-d', time());
    // echo $t;

    //建立SQL
    $sql = "INSERT INTO store
    (store_name,store_address,store_tel,
    contact_name,contact_tel,contact_email,
    price_id,station_id,image_img,
    store_img,menu_img,food1_img,
    food2_img,food3_img,store_level,
    -- store_date,
    store_status,store_submit)
    VALUES 
    (?,?,?,
    ?,?,?,
    1,4,?,
    9,9,9,
    9,9,1,
    -- STR_TO_DATE('$t', '%y-%m-%d'),
    1,2)";
    echo $sql;


    //執行
    $statement = getPDO()->prepare($sql);

    //給值, 確認宏鈞改了那些名字
    $statement->bindValue(1, $_POST["store_name"]);
    $statement->bindValue(2, $_POST["store_address"]);
    $statement->bindValue(3, $_POST["store_tel"]);
    $statement->bindValue(4, $_POST["contact_name"]);
    $statement->bindValue(5, $_POST["contact_tel"]);
    $statement->bindValue(6, $_POST["contact_email"]);
    $statement->bindValue(7, $_POST["image_img"]);
    //$statement->bindParam("s", $t);
    // $statement->bindValue(7, $_POST["price_id"]);
    // $statement->bindValue(8, $_POST["station_id"]);
    // $statement->bindValue(9, $_POST["image_img"]);
    // $statement->bindValue(10, $_POST["menu_img"]);
    // $statement->bindValue(11, $_POST["look_img"]);
    // $statement->bindValue(12, $_POST["food1_img"]);
    // $statement->bindValue(13, $_POST["food2_img"]);
    // $statement->bindValue(14, $_POST["food3_img"]);
    
    $statement->execute();

    echo "<script>alert('註冊成功，請重新登入! 密碼 : 手機號碼'); location.href = '../../../login_store.html';</script>"; 
?>