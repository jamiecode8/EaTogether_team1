<?php
    include("../../Lib/Util.php");	

    //建立SQL
    $sql = "SELECT * FROM store 
    WHERE store_status = 1 and contact_email = ? and contact_tel = ? " ;

    //給值
    $statement = getPDO()->prepare($sql);
    $statement->bindValue(1, $_POST["storeEmail"]); //input 的 name 的值
    $statement->bindValue(2, $_POST["storeTel"]); //input 的 name 的值
    $statement->execute();
    $data = $statement->fetchAll();
    
    $storeEmail = "";
    $storeTel = "";
    $StoreId = "";
    foreach($data as $index => $row){
        $storeEmail = $row["contact_email"];  //資料表裡的欄位名稱
        $storeTel = $row["contact_tel"];  //資料表裡的欄位名稱
        $StoreId = $row["store_id"];
    }

    //判斷是否有會員資料?
    if($storeEmail != "" && $storeTel != ""){      //如果都不是，就空值
   
        include("../../Lib/Member.php");        
    
        //將會員資訊寫入session
        setStoreMemberInfo($storeEmail, $storeTel, $StoreId);

        //導回商家首頁       
        echo "<script>alert('登入成功!'); 
        location.href = '../../../store_free.html';</script>"; 

    }else{

        //跳出提示停留在登入頁
        echo "<script>alert('帳號或密碼錯誤!'); location.href = '../../../login_store.html';</script>"; 
        
    }
?>