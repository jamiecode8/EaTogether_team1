<?php
    include("../../Lib/Util.php");
    include("../../Lib/Member.php");
    $coupon=$_POST["coupon"];
    $memberID=$_POST["memberID"];

    $result = checkCoupon($memberID);
    if (count($result)> 0){
        echo "領過";
    }else{
        insertCoupon($coupon,$memberID);
    }
   
    
  
    function checkCoupon($memberID){
        $sql="SELECT * from coupon where member_id =? and coupon_date = CURRENT_DATE ";
        $statement = getPDO()->prepare($sql);
        $statement->bindValue(1, $memberID);
        $statement->execute();
        $data = $statement->fetchAll();
        return $data;

    }    


        function insertCoupon($coupon,$memberID){
        $sql="INSERT INTO coupon (coupon_content, member_id, coupon_date) VALUES (?,?, NOW())";

        $statement = getPDO()->prepare($sql);
        $statement->bindValue(1, $coupon);
        $statement->bindValue(2, $memberID);
        $statement->execute();
    }   
?>
