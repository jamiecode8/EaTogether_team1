<?php
	include("../../Lib/Member.php");

	// 顯示會員資訊   str 為回傳值，有登入回傳暱稱，沒登入回傳空字串
    $str = getMemberName();
	// 回傳空值 執行 ：  前面，回傳不是空值 執行 ： 後面
	echo $str == "" ? "" : $str;
?>