<?php 
//세션 삭제
session_start();
unset($_SESSION['AdminSeq']);
unset($_SESSION['AdminId']);
unset($_SESSION['AdminName']);
unset($_SESSION['AdminKind']);
//session_unset(); //세션의 모든변수 값 삭제
//session_destroy(); //세션종료

$CookieAdminSeq ="";
$CookieAdminId ="";
$CookieAdminName ="";
$CookieAdminKind ="";

unset($_COOKIE['login_ok']);
setcookie("login_ok", "", time()-3600, "/"); 

$pUrl="login.php";
echo "<meta http-equiv='Refresh' content='0;URL=".$pUrl."'>";
?>
