<?php    
    include("../../Lib/Util.php");

    //取得POST過來的值
    $memberNameEdited = $_POST["memberNameEdited"];   //商家名稱
    $memberPasswordEdited = $_POST["memberPasswordEdited"];   //商家電話
    $memberNicknameEdited = $_POST["memberNicknameEdited"];   //商家地址
    $memberBirthdayEdited = $_POST["memberBirthdayEdited"];   //聯絡人姓名
    $memberTelEdited = $_POST["memberTelEdited"];   //聯絡人電話
    $SID = $_POST["memberId"]; //PK
    
    // exit();
    //返回訊息文字
    $message = "修改成功!";   

    // //建立SQL
    $sql = "UPDATE member set 
    member_email = ?,
    member_password = ?, 
    member_name = ?,
    member_birthday = ?,
    member_phone = ?
    WHERE member_id = ?";

    // echo("store_name");
    // exit();
    
    // //執行
    $statement = getPDO()->prepare($sql);
    $statement->bindValue(1 , $memberNameEdited);     
    $statement->bindValue(2 , $memberPasswordEdited);
    $statement->bindValue(3 , $memberNicknameEdited);
    $statement->bindValue(4 , $memberBirthdayEdited);
    $statement->bindValue(5 , $memberTelEdited);
    $statement->bindValue(6 , $SID);
    $statement->execute();
    
    echo $message;
  
    ?>
