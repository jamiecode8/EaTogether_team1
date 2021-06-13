<?php
	include("../../Lib/Member.php");

	// 顯示會員資訊   str 為回傳值，有登入回傳暱稱，沒登入回傳空字串
    // $str = getMemberEmail();
	// 回傳空值 執行 ：  前面，回傳不是空值 執行 ： 後面
	// echo $str == "" ? "" : $str;

	//回傳陣列的寫法
	
	// $array = array(
	// 	'name'=> getMemberName(),
	// 	'email'=> getMemberEmail(),
	// 	'id'=> getMemberID(), 
	// );
	// echo json_encode($array);

	echo getMemberID();
?>