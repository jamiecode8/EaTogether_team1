<?php
    include("../../Lib/Util.php");

    //  //Web根目錄真實路徑, ex: C:/XAMPP/htdocs
     $ServerRoot = $_SERVER["DOCUMENT_ROOT"];

     //取得上傳的檔案資訊(陣列型態)=============================
     $fileName_arr = $_FILES["file"]["name"];    //檔案名稱含副檔名    
     $fileTmpName_arr = $_FILES["file"]["tmp_name"]; //Server上的暫存檔路徑含檔名    
     $fileType_arr = $_FILES["file"]["type"];    //檔案種類        
     $fileSize_arr = $_FILES["file"]["size"];    //檔案尺寸
     $error_arr = $_FILES["file"]["error"];  //錯誤代碼
     //=======================================================

    //依上傳檔案的數量跑迴圈一一處理
    for ($i = 0; $i < count($fileName_arr); $i++) {        
        //Server上的暫存檔路徑含檔名
        $filePath_Temp = $fileTmpName_arr[$i];

        //檔案最終存放位置
        $filePath = $ServerRoot."/dist/php/Upload/food/".$fileName_arr[$i];
        
        if($error_arr[$i] > 0){
            echo "上傳失敗: 錯誤代碼".$error_arr[$i];
        }else{
    
             //將暫存檔搬移到正確位置
            move_uploaded_file($filePath_Temp, $filePath);
    
            //顯示檔案資訊
            // echo "檔案存放位置：".$filePath;
            // echo "<br/>";
            // echo "檔案名稱：".$fileName_arr[$i];
            // echo "<br/>";
            // echo "類型：".$fileType_arr[$i];
            // echo "<br/>";
            // echo "大小：".$fileSize_arr[$i];
            // echo "<br/>";
            // echo "副檔名：".getExtensionName($filePath);
            // echo "<br/>";
    
            // switch(getExtensionName($filePath)){
            //     case"jpg":
            //         break;
            //     case"png":
            //         break;
            //     case"svg":
            //         break;
            //     case"jpeg":
            //         break;
            //     default:
            //         echo "檔案格式不符!";
            //         break;
            // }
            echo "<br/>==============<br/>";

            if(copy($filePath_Temp, $filePath)){
                //取得POST過來的值

                $price = $_POST["price_id"]; 
                //建立SQL
                $sql = "INSERT INTO store
                (store_name,store_address,store_tel,contact_name,contact_tel,contact_email,
                price_id,station_id,
                image_img,store_img,menu_img,
                food1_img,food2_img,food3_img,
                store_level,store_date,store_status,store_submit,
                -- store_tag1,store_tag2,store_tag3
                )
                VALUES 
                (?,?,?,?,?,?,
                1,4,
                ?,?,?,
                ?,?,?,
                1,NOW(),1,2,
                test,test,test
                )";

               
                //執行
                $statement = getPDO()->prepare($sql);
            
                //給值, 確認宏鈞改了那些名字
                $statement->bindValue(1, $_POST["store_name"]);
                $statement->bindValue(2, $_POST["store_address"]);
                $statement->bindValue(3, $_POST["store_tel"]);
                $statement->bindValue(4, $_POST["contact_name"]);
                $statement->bindValue(5, $_POST["contact_tel"]);
                $statement->bindValue(6, $_POST["contact_email"]);
                $statement->bindValue(7, $fileName_arr[0]);
                $statement->bindValue(8, $fileName_arr[1]);
                $statement->bindValue(9, $fileName_arr[2]);
                $statement->bindValue(10, $fileName_arr[3]);
                $statement->bindValue(11, $fileName_arr[4]);
                $statement->bindValue(12, $fileName_arr[5]["name"]);
                
                //$statement->bindParam("s", $t);
                // $statement->bindValue(7, $_POST["price_id"]);
                // $statement->bindValue(8, $_POST["station_id"]);
                $statement->execute();
            } else{
                // echo $price;
            echo "<script>alert('註冊成功，請重新登入! 密碼 : 手機號碼'); location.href = '../../../login_store.html';</script>"; 
            }
    }
    }

    //取得檔案副檔名
    function getExtensionName($filePath){
        $path_parts = pathinfo($filePath);
        return $path_parts["extension"];
    }

?>