<?php  header("Content-Type: text/html; charset=UTF-8"); ?>
<?php 
require_once("../admaster_class/loginAdminChk.php"); //관리자확인
require_once("../admaster_class/class_exec_top.php"); //전체함수
$gDBExec = new ExecSql("");

$pErrorMsg="";
//if($_POST["seq"]=="") $pErrorMsg.="Key값이 존재하지 않습니다.\\n";
if($_POST["code"]=="") $pErrorMsg.="Code값이 존재하지 않습니다.\\n";
if($_POST["subject"]=="") $pErrorMsg.="제목을 입력하십시오.\\n";
if($_POST["content"]=="") $pErrorMsg.="내용을 입력하십시오.\\n";
if($pErrorMsg!="") AlertBack($pErrorMsg);

//============== 파일 업로드 시작 ===================
if($del1) {
	fileDelete($pFilename);
	$pFilename="";
	$pFilenm="";
}
if($del2) {
	fileDelete($pFilename2);
	$pFilename2="";
	$pFilenm2="";
}
if($del3) {
	fileDelete($pFilename3);
	$pFilename3="";
	$pFilenm3="";
}
if($del9) {
	fileDelete($pFilename9);
	$pFilename9="";
	$pFilenm9="";
}

upfileDirChk(); //월별 폴더 생성하기
if(is_uploaded_file($_FILES["upfile1"]["tmp_name"])){  
	$upfile = $_FILES["upfile1"]["tmp_name"];
	$pFilenm = $_FILES["upfile1"]["name"];  
	$pFilename=fileUp($upfile, $pFilenm, $pFilename);
}
if(is_uploaded_file($_FILES["upfile2"]["tmp_name"])){
	$upfile = $_FILES["upfile2"]["tmp_name"];
	$pFilenm2 = $_FILES["upfile2"]["name"];  
	$pFilename2=fileUp($upfile, $pFilenm2, $pFilename2);
}
if(is_uploaded_file($_FILES["upfile3"]["tmp_name"])){
	$upfile = $_FILES["upfile3"]["tmp_name"];
	$pFilenm3 = $_FILES["upfile3"]["name"];  
	$pFilename3=fileUp($upfile, $pFilenm3, $pFilename3);
}

if(is_uploaded_file($_FILES["upfile9"]["tmp_name"])){
	$upfile = $_FILES["upfile9"]["tmp_name"];
	$pFilenm9 = $_FILES["upfile9"]["name"];  
	$pFilename9=imgUpSize($upfile, $pFilenm9, $pFilename9, $code);
}
//============== 파일 업로드 종료 ===================

foreach($_POST as $key=>$value) {
	$gDBExec->data["$key"]=scriptHtml($value);
}
$gDBExec->data["reg_date"]=$reg_date." ".$reg_time;

$gDBExec->data["filename"]=$pFilename;
$gDBExec->data["filenm"]=$pFilenm;
$gDBExec->data["filename2"]=$pFilename2;
$gDBExec->data["filenm2"]=$pFilenm2;
$gDBExec->data["filename3"]=$pFilename3;
$gDBExec->data["filenm3"]=$pFilenm3;
$gDBExec->data["filename9"]=$pFilename9;

//======================== DB Module Start ============================
$gConn = new DBConn();
if($seq!="" && $seq!="0") { //수정
	$gDBExec->Board_Update( $gConn->mConn ) ;
}else{ //등록
	$gDBExec->Board_Insert( $gConn->mConn ) ;
	if($gDBExec->mSeq=="" || $gDBExec->mSeq=="0") {
		$gConn->DisConnect();
		AlertBack("Data 등록오류가 발생하였습니다.\\n다시한번 등록하여 주십시오.");
	}
	$pCommLink = $pHtmlLink;
}
$gConn->DisConnect();
//======================== DB Module End ===============================

//$pCommLink.="&mode=read&seq=".$seq;
echo "<meta http-equiv='Refresh' content='0;URL=".$pCommLink."'>";
?>
