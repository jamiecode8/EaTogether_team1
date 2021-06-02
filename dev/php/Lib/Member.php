<?php

    //清除Session
    function clearSession(){

        //先判斷session是否存在
        if(!isset($_SESSION)){
            session_start(); 
        }

        session_unset();
        session_destroy();

    }

    //--------------------------------------後台專用--------------------------------------

    //取得Session(後台專用)
    function getSessionB(){

        //先判斷session是否存在
        if(!isset($_SESSION)){
            session_start(); 
        }

        //有登入session->回傳ID，無登入session->回傳空字串""
        return isset($_SESSION["BackendUserID"]) ? $_SESSION["BackendUserID"] : "";             

    }

    //寫入Session(後台專用)
    function setSessionB($UserID){

        //先判斷session是否存在
        if(!isset($_SESSION)){
            session_start(); 
        }

        $_SESSION["BackendUserID"] = $UserID;

    }

    //--------------------------------------前台專用--------------------------------------

    //取得會員ID(前台專用)
    function getMemberID(){

        //先判斷session是否存在
        if(!isset($_SESSION)){
            session_start(); 
        }

        //有登入session->回傳ID，無登入session->回傳空字串""
        return isset($_SESSION["member_email_input"]) ? $_SESSION["member_email_input"] : ""; 

    }

    //取得會員帳號(前台專用)
    function getMemberName(){

        //先判斷session是否存在
        if(!isset($_SESSION)){
            session_start(); 
        }

        //有登入session->回傳Name，無登入session->回傳空字串""
        return isset($_SESSION["member_password_input"]) ? $_SESSION["member_password_input"] : ""; 

    }

    //寫入Session(前台專用)
    function setMemberInfo($MemberID, $MemberName){

        //先判斷session是否存在
        if(!isset($_SESSION)){
            session_start(); 
        }

        //Table 'ec_member'裡的ID欄位值
        $_SESSION["member_email_input"] = $MemberID; 

        //Table 'ec_member'裡的Account欄位值
        $_SESSION["member_password_input"] = $MemberName; 
        
    }
    
    //--------------------------------------商家專用--------------------------------------

    //寫入Session(LoginStore.php)
    function setStoreMemberInfo($storeEmail, $storeTel, $StoreId){

        //先判斷session是否存在
        if(!isset($_SESSION)){
            session_start(); 
        }

        //Table 'ec_member'裡的ID欄位值
        $_SESSION["contact_email"] = $storeEmail; 

        //Table 'ec_member'裡的Account欄位值
        $_SESSION["contact_tel"] = $storeTel; 
        $_SESSION["store_id"] = $StoreId; 
        
    }

    //取得商家ID(StoreLoginCheck.php) 
    function getStoreMemberID(){

        //先判斷session是否存在
        if(!isset($_SESSION)){
            session_start(); 
        }

        //有登入session->回傳ID，無登入session->回傳空字串""
        // return isset($_SESSION["store_id"]) ? $_SESSION["store_id"] : ""; 
        return isset($_SESSION["contact_email"]) ? $_SESSION["contact_tel"] : ""; 

    }

    //取得商家會員帳號(前台專用)
    // function getStoreMemberName(){

    //     //先判斷session是否存在
    //     if(!isset($_SESSION)){
    //         session_start(); 
    //     }

    //     //有登入session->回傳Name，無登入session->回傳空字串""
    //     return isset($_SESSION["contact_tel"]) ? $_SESSION["contact_tel"] : ""; 
    // }
    
?>