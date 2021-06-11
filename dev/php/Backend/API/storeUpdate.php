<?php    
    include("../../Lib/Util.php");

    //取得POST過來的值
    $SID = $_POST["storeId"]; //PK
    $editStatus = $_POST["editStatus"];   //商家狀態
    $editSubmit = $_POST["editSubmit"];   //審核進度
    $editLevel = $_POST["editLevel"];   //商家等級
    

    //返回訊息文字
    $message = "修改成功!";   

    // //建立SQL
    $sql = "UPDATE store set 
    store_status = ?, 
    store_submit = ?, 
    store_level = ?
    WHERE store_id = ?";
    
    // //執行
    $statement = getPDO()->prepare($sql);
    $statement->bindValue(1 , $editStatus);     
    $statement->bindValue(2 , $editSubmit);
    $statement->bindValue(3 , $editLevel);
    $statement->bindValue(4 , $SID);
    $statement->execute();
    
    echo $message;
    ?>
