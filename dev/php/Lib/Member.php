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

    //取得商家帳號(前台專用)
    function getStoreID(){

        //先判斷session是否存在
        if(!isset($_SESSION)){
            session_start(); 
        }

        //有登入session->回傳ID，無登入session->回傳空字串""
        return isset($_SESSION["contact_email"]) ? $_SESSION["contact_email"] : ""; 

    }

    //取得會員帳號(前台專用)
    function getStoreTel(){

        //先判斷session是否存在
        if(!isset($_SESSION)){
            session_start(); 
        }

        //有登入session->回傳Name，無登入session->回傳空字串""
        return isset($_SESSION["contact_tel"]) ? $_SESSION["contact_tel"] : ""; 

    }

    //寫入Session(前台商家登入專用)
    function setStoreInfo($storeEmail, $storeTel){

        //先判斷session是否存在
        if(!isset($_SESSION)){
            session_start(); 
        }

        //Table 'store'裡contact_email的欄位值
        $_SESSION["contact_email"] = $storeEmail; 

        //Table 'store'裡的contact_tel欄位值
        $_SESSION["contact_tel"] = $storeTel; 
    }

    // 取得商家ID
    function setSessionS($storeID){
        //先判斷session是否存在
        if(!isset($_SESSION)){
            session_start(); 
        }
        //Table 'store'裡的store_id欄位值
        $_SESSION["store_id"] = $storeID; 
    }
    
?>