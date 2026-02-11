<?php  header("Content-Type: text/html; charset=UTF-8"); ?>
<?php 
require_once("../admaster_class/loginAdminChk.php"); //관리자확인
require_once("../admaster_class/class_exec_top.php"); //전체함수
$gDBExec = new ExecSql("popup");

$pErrorMsg="";
if($seq=="") $pErrorMsg.="Key값이 존재하지 않습니다.\\n";
if($pErrorMsg!="") AlertBack($pErrorMsg);

//======================== DB Module Start ============================
$gConn = new DBConn();
$gDBExec->Delete( $seq, $gConn->mConn );
$gConn->DisConnect();
//======================== DB Module End ===============================

echo "<meta http-equiv='Refresh' content='0;URL=".$pCommLink."'>";
?>
