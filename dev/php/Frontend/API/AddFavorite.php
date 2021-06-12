<?php
    include("../../Lib/Util.php");
    include("../../Lib/Member.php");

    
    $collectedStore = $_POST["favorite"];
    

    $MemberID = getMemberID();
    echo  $collectedStore;
    echo  $MemberID;
    
    insertFavorite($collectedStore,$MemberID);

    function insertFavorite($collectedStore,$MemberID){
        $sql="INSERT INTO Favorites (store_id, member_id, favorites_date) VALUES (?,?, NOW())";

        $statement = getPDO()->prepare($sql);
        $statement->bindValue(1, $collectedStore);
        $statement->bindValue(2, $MemberID);
        $statement->execute();
    }

?>
