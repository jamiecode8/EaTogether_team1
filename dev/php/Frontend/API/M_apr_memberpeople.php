<?php

 //$input_account = $_POST["MID"];
//$input_account = 1;

// ========= 取得與資料庫連線 ========== //
        //取得PDO物件

        // $db_host = "127.0.0.1";
        // $db_user = "root";
        // $db_pass = "password";
        // $db_select = "EaTogether";

        $db_host = "127.0.0.1";
        $db_user = "tibamefe_since2021";
        $db_pass =  "vwRBSb.j&K#E";
        $db_select = "tibamefe_tfd101g1";

        //建立資料庫連線物件
        $dsn = "mysql:host=".$db_host.";dbname=".$db_select;

        //建立PDO物件，並放入指定的相關資料
        $pdo = new PDO($dsn, $db_user, $db_pass);


//============================= 引入資料 =====================================//

$sql = "SELECT food1_img, store_name, store_tag1, store_tag2, store_tag3, member_img, member_name, date(photo_time) as mdate FROM
               tibamefe_tfd101g1.photo ph left join tibamefe_tfd101g1.member mb on
               ph.member_id = mb.member_id left join tibamefe_tfd101g1.store st on
               ph.store_id = st.store_id limit 6;";

// $sql = "SELECT food1_img, store_name, store_tag1, store_tag2, store_tag3, member_img, member_name, date(photo_time) as mdate FROM
//                EaTogether.photo ph left join EaTogether.member mb on
//                ph.member_id = mb.member_id left join EaTogether.store st on
//                ph.store_id = st.store_id limit 6;";
    
    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    $statement = $pdo->prepare($sql);    
    //$statement->bindValue(1, $input_account);

    $statement->execute();
    
    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll(PDO::FETCH_ASSOC); 

    //print_r($data);
    echo  json_encode($data);  
?>