<?php
    include("../../Lib/Util.php");    

    //建立SQL
    $sql = "INSERT INTO member(member_email,member_password,member_name,station,tag1,tag2,tag3,member_signtime) VALUES (?,?,?,?,?,?,?,NOW())";

    //執行
    $statement = getPDO()->prepare($sql);

    //給值
    $statement->bindValue(1, $_POST["member_email_input"]);
    $statement->bindValue(2, $_POST["member_password_input"]);
    $statement->bindValue(3, $_POST["member_nickname_input"]);
    $statement->bindValue(4, $_POST["station_id"]);
    $statement->bindValue(5, $_POST["tag_id1"]);
    $statement->bindValue(6, $_POST["tag_id2"]);
    $statement->bindValue(7, $_POST["tag_id3"]);
    $statement->execute();
    
    echo "<script>alert('加入成功，請重新登入!'); location.href = '../../../login_member.html';</script>"; 
?>