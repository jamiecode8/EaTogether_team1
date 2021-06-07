<?php
    include("../../Lib/Util.php");
    include("../../Lib/Member.php");
    $memberID=$_POST["memberID"];

    $result = checkCoupon($memberID);
    if (count($result)>0){
        echo "領過";
    }
   
    function checkCoupon($memberID){
        $sql="SELECT * from coupon where member_id =? and coupon_date = CURRENT_DATE ";
        $statement = getPDO()->prepare($sql);
        $statement->bindValue(1, $memberID);
        $statement->execute();
        $data = $statement->fetchAll();
        return $data;

    }    
?>
