<?php  header("Content-Type: text/html; charset=UTF-8"); ?>
<?php 
require_once("../admaster_class/loginAdminChk.php"); //관리자확인
require_once("../admaster_class/class_exec_top.php"); //전체함수
require_once("../admaster_class/conf_WriteChk.php"); //경로확인
$gDBExec = new ExecSql("master");

$pErrorMsg="";
if($_POST["id"]=="") $pErrorMsg.="아이디를 입력하십시오.\\n";
if($_POST["name"]=="") $pErrorMsg.="관리자명을 입력하십시오.\\n";

if($seq!="" && $seq!="0") { //수정
}else{
	if($_POST["passwd"]=="") $pErrorMsg.="비밀번호를 입력하십시오.\\n";
}

if($pErrorMsg!="") AlertBack($pErrorMsg);

foreach($_POST as $key=>$value) {
	$gDBExec->data["$key"]=scriptHtml($value);
}
$gDBExec->data["reg_date"]=$reg_date." ".$reg_time;

//======================== DB Module Start ============================
$gConn = new DBConn();
if($seq!="" && $seq!="0") { //수정
	if($idOld!=$id) {
		$pIdChk = $gDBExec->IdChk ( $gConn->mConn );
		if($pIdChk) {
			$gConn->DisConnect();
			AlertBack("이미 등록되어 있는 아이디 입니다.\\n다른 아이디를 입력하십시요.");
		}
	}

	$gDBExec->Master_Update( $gConn->mConn ) ;
}else{ //등록
	$pIdChk = $gDBExec->IdChk ( $gConn->mConn );
	if($pIdChk) {
		$gConn->DisConnect();
		AlertBack("이미 등록되어 있는 아이디 입니다.\\n다른 아이디를 입력하십시요.");
	}

	$gDBExec->Master_Insert( $gConn->mConn ) ;
	if($gDBExec->mSeq=="" || $gDBExec->mSeq=="0") {
		$gConn->DisConnect();
		AlertBack("Data 등록오류가 발생하였습니다.\\n다시한번 등록하여 주십시오.");
	}
}
$gConn->DisConnect();
//======================== DB Module End ===============================

echo "<meta http-equiv='Refresh' content='0;URL=".$pHtmlLink."'>";
?>
