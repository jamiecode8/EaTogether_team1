<?php    
    include("../../Lib/Util.php");

    //取得POST過來的值
    $storeNameEdited = $_POST["storeNameEdited"];   //商家名稱
    $storeTelEdited = $_POST["storeTelEdited"];   //商家電話
    $storeAddressEdited = $_POST["storeAddressEdited"];   //商家地址
    $storeConNameEdited = $_POST["storeConNameEdited"];   //聯絡人姓名
    $storeConTelEdited = $_POST["storeConTelEdited"];   //聯絡人電話
    $storeConMailEdited = $_POST["storeConMailEdited"];   //聯絡人信箱
    $SID = $_POST["storeId"]; //PK
    
    // exit();
    //返回訊息文字
    $message = "修改成功!";   

    // //建立SQL
    $sql = "UPDATE store set 
    store_name = ?,
    store_tel = ?, 
    store_address = ?,
    contact_name = ?,
    contact_tel = ?,
    contact_email = ?
    WHERE store_id = ?";

    // echo("store_name");
    // exit();
    
    // //執行
    $statement = getPDO()->prepare($sql);
    $statement->bindValue(1 , $storeNameEdited);     
    $statement->bindValue(2 , $storeTelEdited);
    $statement->bindValue(3 , $storeAddressEdited);
    $statement->bindValue(4 , $storeConNameEdited);
    $statement->bindValue(5 , $storeConTelEdited);
    $statement->bindValue(6 , $storeConMailEdited);
    $statement->bindValue(7 , $SID);
    $statement->execute();
    
    echo $message;
  
    ?>
