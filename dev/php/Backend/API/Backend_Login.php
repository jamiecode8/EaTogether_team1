<?php
    include("../../Lib/Util.php");	

    //建立SQL
    $sql = "SELECT * FROM  admin WHERE admin_account = ? and admin_password = ?";

    //給值
    $statement = getPDO()->prepare($sql);
    $statement->bindValue(1, $_POST["backend_account_input"]);
    $statement->bindValue(2, $_POST["backend_password_input"]);
    $statement->execute();
    $data = $statement->fetchAll();
    
    $adminAccount = "";
    $adminID = "";
    foreach($data as $index => $row){
        $adminAccount = $row["admin_account"];
        $adminID = $row["admin_id"];
    }

    //判斷是否有會員資料?
    if($backendID != "" && $backendAccount != ""){

        include("../../Lib/Member.php");        
    
        //將會員資訊寫入session
        setSessionA($adminAccount, $adminID);

        //導回產品頁        
        echo "<script>alert('登入成功!'); location.href = '../../../backend_member.html';</script>"; 

    }else{

        //跳出提示停留在登入頁
        echo "<script>alert('帳號或密碼錯誤!'); location.href = '../../../backend_login_member.html';</script>"; 
    }
?>