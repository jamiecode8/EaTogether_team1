<?php
    include("../../Lib/Util.php");    

    //建立SQL
    $sql = "INSERT INTO member(member_email,member_password,station,tag1) VALUES (?,?,?,?)";

    //執行
    $statement = getPDO()->prepare($sql);

    //給值
    $statement->bindValue(1, $_POST["member_email_input"]);
    $statement->bindValue(2, $_POST["member_password_input"]);
    $statement->bindValue(3, $_POST["station_input"]);
    $statement->bindValue(4, $_POST["tag_input"]);
    $statement->execute();

    echo "<script>alert('加入成功，請重新登入!'); location.href = '../../../login_member.html';</script>"; 
?>