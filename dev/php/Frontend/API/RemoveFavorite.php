<?php
    include("../../Lib/Util.php");
    include("../../Lib/Member.php");

    $keyword = $_POST["favorite"];
    $keyword2 = getMemberID();
    $sql="DELETE FROM Favorites WHERE store_id = ? and member_id = ? ";
    $statement = getPDO()->prepare($sql);
    $statement->bindValue(1, $keyword);
    $statement->bindValue(2, $keyword2);
    $statement->execute();
        
    
?>
