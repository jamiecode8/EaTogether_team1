<?php

        //先判斷session是否存在
        if(!isset($_SESSION)){
            session_start(); 
        }
        //$_SESSION["memberID"] = $account; 

        echo isset($_SESSION["MemberEmail"])  ?  json_encode($_SESSION["MemberEmail"]) : json_encode("N");

        // session_unset();
        // session_destroy();

?>