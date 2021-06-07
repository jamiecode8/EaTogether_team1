<?php

        //取得PDO物件

        $db_host = "127.0.0.1";
        $db_user = "root";
        $db_pass = "password";
        $db_select = "EaTogether";

        //建立資料庫連線物件
        $dsn = "mysql:host=".$db_host.";dbname=".$db_select;

        //建立PDO物件，並放入指定的相關資料
        $pdo = new PDO($dsn, $db_user, $db_pass);



        function go($p){
            //建立SQL語法
            $sql = "SELECT * FROM eatogether.store where store_name = ? ;";
            
            //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
            $statement = $p->prepare($sql);
        
            $statement->bindValue(1, $_POST["photo_store_name"]);
            // $statement->bindValue(1,'永康牛肉麵');
            $statement->execute();
            
            //抓出全部且依照順序封裝成一個二維陣列
            $data = $statement->fetchAll(PDO::FETCH_ASSOC); 
            // PDO::FETCH_ASSOC 返回以欄位名稱作為索引鍵
            // PDO::FETCH_NUM 返回以數字作為索引鍵(KEY)的陣列(ARRAY)，由0開始編號
        
            //echo json_encode($data);
            // print_r($data);
            // echo '</br><hr>';
            // echo $data[0]['store_id'];
             return $data[0]['store_id'];
        
            }
        
            go($pdo);

  

?>