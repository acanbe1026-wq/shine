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

//------ 세션 확인
session_start();

if($_COOKIE["login_ok_member"]) {
	if($_COOKIE["login_ok"]) { //아이디 저장, 로그인 유지
		setcookie("login_ok", "on", time() + (60 * 60 * 24 * 30), "/");  //아이디 저장, 로그인 유지
		setcookie("login_ok_member", "on", time() + (60 * 60 * 3), "/");  //로그인 3시간
	}else{
		setcookie("login_ok_member", "on", time() + (60 * 60 * 3), "/");  //3시간
	}
}else{
	unset($_SESSION['MemberSeq']);
	unset($_SESSION['MemberName']);
	unset($_SESSION['MemberId']);
	unset($_SESSION['MemberKind']);

	//session_unset(); //세션의 모든변수 값 삭제
	//session_destroy(); //세션종료

	$CookieMemberSeq ="";
	$CookieMemberName ="";
	$CookieMemberId ="";
	$CookieMemberKind ="";
}

$CookieMemberSeq = base64_decode($_SESSION['MemberSeq']);
$CookieMemberName = $_SESSION['MemberName'];
//$CookieMemberId = base64_decode($_SESSION['MemberId']);
//$CookieMemberKind = base64_decode($_SESSION['MemberKind']);

//$CookieMemberSeq="1";
//$CookieMemberName="업체명 test";
?>
