<?php 
require_once("../admaster_class/loginUtfChk.php"); //함수

//세션 설정
session_start();
require_once("../admaster_class/class_exec_top.php"); //전체함수

$pErrorMsg="";
if($_POST["id"]=="") $pErrorMsg.="아이디를 입력하십시오.\\n";
if($_POST["passwd"]=="") $pErrorMsg.="비밀번호를 입력하십시오.\\n";
//if($pErrorMsg!="") AlertBack($pErrorMsg);

//$id=injecFilter($id);
//$passwd=injecFilter($passwd);

$gDBSelect = new SelectSql("master");
//======================== DB Module Start ============================
$gConn = new DBConn();
$Result = $gDBSelect->SelectWithId ( $id, $passwd, $gConn->mConn );
$gConn->DisConnect();
//======================== DB Module End ===============================

if($Result[0]["seq"]=="" || $Result[0]["seq"]=="0") {
	AlertBack('아이디가 일치하지 않습니다.\\n아이디와 비밀번호를 정확히 입력하십시요.');
}

if($Result[0]["passwd"]!=$Result[0]["passwdChk"]) {
	AlertBack('비밀번호가 일치하지 않습니다.\\n아이디와 비밀번호를 정확히 입력하십시요.');
}

$_SESSION["AdminSeq"] = base64_encode($Result[0]["seq"]);
$_SESSION["AdminId"] = base64_encode($Result[0]["id"]);
$_SESSION["AdminName"] = $Result[0]["name"];
$_SESSION["AdminKind"] = base64_encode($Result[0]["kind"]);

setcookie("login_ok", "on", time() + (60 * 30), "/"); 

$pUrl="s1101.php"; //통합
//if($Result[0][kind]=="8") $pUrl="s9101.php"; //통합

echo "<meta http-equiv='Refresh' content='0;URL=".$pUrl."'>";

?>
