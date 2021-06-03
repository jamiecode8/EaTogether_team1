<?php
    include("../../Lib/Util.php");	//與資料庫連線

    //建立SQL
    $sql = "SELECT * FROM member WHERE member_status = 1 and member_email = ? and member_password = ?";

    //給值
    $statement = getPDO()->prepare($sql);
    $statement->bindValue(1, $_POST["member_email_input"]);
    $statement->bindValue(2, $_POST["member_password_input"]);
    $statement->execute();
    $data = $statement->fetchAll();

    $memberID = "";
    $memberName = "";
    foreach($data as $index => $row){
        $memberID = $row["member_email"];
        $memberName = $row["member_password"];
    }

    //判斷是否有會員資料?
    if($memberID != "" && $memberName != ""){   //如果都不是空值

        include("../../Lib/Member.php");        
    
        //將會員資訊寫入session
        setMemberInfo($memberID, $memberName);

        //導回產品頁        
        echo "<script>alert('登入成功!'); location.href = '../../../index.html';</script>"; 

    }else{

        //跳出提示停留在登入頁
        echo "<script>alert('帳號或密碼錯誤!'); location.href = '../../../login_member.html';</script>"; 
        
    }
?>