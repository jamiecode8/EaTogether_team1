<?php
    
    include("../../Lib/Util.php");
    
    $keyword = $_POST['keyword'];
    if($keyword == ''){
        //建立SQL
        $sql = "SELECT * FROM member";
        //執行
        $statement = getPDO()->prepare($sql);
    }else{
        $sql = "SELECT * FROM member WHERE member_name like ? " ;
        $statement = getPDO()->prepare($sql);
        $statement->bindValue(1, "%".$keyword."%");
    }
    

    
    // $sql = "SELECT * FROM member WHERE member_status = 1";
    
   

        //執行
        $statement->execute();
        $data = $statement->fetchAll();

        //回傳json
        echo json_encode($data);
?>