<?php
    include("../../Lib/Util.php");
    include("../../Lib/Member.php");

    
    $collectedStore = $_POST["favorite"];
    echo "<script> getMemberID()</script>" ;

    insertFavorite($collectedStore,getMemberID());

    function insertFavorite($collectedStore,$memberID){
        $sql="INSERT INTO Favorites (store_id, member_id, favorites_date) VALUES (?,?, NOW())";

        $statement = getPDO()->prepare($sql);
        $statement->bindValue(1, $collectedStore);
        $statement->bindValue(2, $memberID);
        $statement->execute();
    }

?>
