<?php 
@extract($_GET);
@extract($_POST); 

ini_set('display_errors', TRUE); 
error_reporting(E_ERROR); //변수지정 오류문구 표시하지 않음
//error_reporting(E_ERROR | E_WARNING | E_PARSE | E_NOTICE);; //변수지정 오류문구 표시하지 않음

header("Content-Type: text/html; charset=UTF-8"); 
header("Cache-Control: no-cache, must-revalidate"); //no-store, 응답된 정보를 저장하지 말라는 의미이다.
header("Cache-Control: post-check=0, pre-check=0", false); 
header("Pragma: no-cache");

session_cache_limiter('no-cache, must-revalidate'); //뒤로가기 만료확인 없애기

//----세션 확인
session_start();

if($_COOKIE["login_ok"]) {
	setcookie("login_ok", "on", time() + (60 * 30), "/"); 
}else{
	unset($_SESSION['AdminSeq']);
	unset($_SESSION['AdminId']);
	unset($_SESSION['AdminName']);
	unset($_SESSION['AdminKind']);
	session_unset(); //세션의 모든변수 값 삭제
	session_destroy(); //세션종료

	$CookieAdminSeq ="";
	$CookieAdminId ="";
	$CookieAdminName ="";
	$CookieAdminKind ="";
}

$CookieAdminSeq = base64_decode($_SESSION['AdminSeq']);
$CookieAdminId = base64_decode($_SESSION['AdminId']);
$CookieAdminName = $_SESSION['AdminName'];
$CookieAdminKind = base64_decode($_SESSION['AdminKind']);

if($CookieAdminSeq=="" || $CookieAdminKind=="") {
	echo "
		<script language='javascript' type='text/javascript'>
			alert('관리자 전용공간입니다.\\n로그인 하시기 바랍니다.');
			location.href='../admaster/login.php';
		</script>
	";
	exit;
}
?>
