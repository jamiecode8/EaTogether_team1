<?php    
	include("../../Lib/Member.php");
    include("../../Lib/Util.php");

    //登入檢查
    $isLogin=getMemberID();
    if($isLogin!=null)
    {
        $store_id = $_POST["store_id"];
        $member_id = $_POST["member_id"];

        $sql="SELECT * from Favorites where store_id = ? and member_id =? ";
        $statement = getPDO()->prepare($sql);
        $statement->bindValue(1, $store_id);
        $statement->bindValue(2, $member_id);
        $statement->execute();
        $data = $statement->fetchAll();
        
        if($data!=null){
        echo json_encode($data);
        }
    }
    
?>