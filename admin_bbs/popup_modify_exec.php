<?php  header("Content-Type: text/html; charset=UTF-8"); ?>
<?php 
require_once("../admaster_class/loginAdminChk.php"); //관리자확인
require_once("../admaster_class/class_exec_top.php"); //전체함수
$gDBExec = new ExecSql("");

$pErrorMsg="";
//if($_POST["seq"]=="") $pErrorMsg.="Key값이 존재하지 않습니다.\\n";
if($_POST["subject"]=="") $pErrorMsg.="제목을 입력하십시오.\\n";
if($pErrorMsg!="") AlertBack($pErrorMsg);

foreach($_POST as $key=>$value) {
	$gDBExec->data["$key"]=scriptHtml($value);
}
$gDBExec->data["reg_date"]=$reg_date." ".$reg_time;

//======================== DB Module Start ============================
$gConn = new DBConn();
if($seq!="" && $seq!="0") { //수정
	$gDBExec->Popup_Update( $gConn->mConn ) ;
}else{ //등록
	$gDBExec->Popup_Insert( $gConn->mConn ) ;
	if($gDBExec->mSeq=="" || $gDBExec->mSeq=="0") {
		$gConn->DisConnect();
		AlertBack("Data 등록오류가 발생하였습니다.\\n다시한번 등록하여 주십시오.");
	}
	$pCommLink = $pHtmlLink;
}

$gConn->DisConnect();
//======================== DB Module End ===============================

echo "<meta http-equiv='Refresh' content='0;URL=".$pCommLink."'>";
?>
