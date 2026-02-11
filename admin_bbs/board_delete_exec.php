<?php  header("Content-Type: text/html; charset=UTF-8"); ?>
<?php 
require_once("../admaster_class/loginAdminChk.php"); //관리자확인
require_once("../admaster_class/class_exec_top.php"); //전체함수
$gDBExec = new ExecSql("board");
$gDBSelect = new SelectSql("board");

$pErrorMsg="";
if($seq=="") $pErrorMsg.="Key값이 존재하지 않습니다.\\n";
if($pErrorMsg!="") AlertBack($pErrorMsg);

//======================== DB Module Start ============================
$gConn = new DBConn();
$Result = $gDBSelect->SelectWithSeq ( $seq, $gConn->mConn );
if($Result[0]["filename"]) fileDelete($Result[0]["filename"]);
if($Result[0]["filename2"]) fileDelete($Result[0]["filename2"]);
if($Result[0]["filename3"]) fileDelete($Result[0]["filename3"]);
if($Result[0]["filename9"]) fileDelete($Result[0]["filename9"]);
$gDBExec->Delete( $seq, $gConn->mConn ) ;
$gConn->DisConnect();
//======================== DB Module End ===============================

echo "<meta http-equiv='Refresh' content='0;URL=".$pCommLink."'>";
?>
