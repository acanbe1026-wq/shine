<?php 
$siteName="계약의 신";
$pUrlArr=explode("/",$_SERVER["PHP_SELF"]);
$nowDir=$pUrlArr[count($pUrlArr)-2];
$pFileName=$pUrlArr[count($pUrlArr)-1];
$pTopCode=substr($pFileName,0,2);
$pHtmlLink="../".$nowDir."/".$pFileName;
$code=str_replace(".php","",$pFileName);

require_once("../admaster_class/function.php"); //함수
require_once("../admaster_class/dbconn.php"); //디비
require_once("../admaster_class/conf.php");
require_once("../admaster_class/class_select.php");
?>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title><?=$siteName?> 관리 시스템</title>
	<link rel="stylesheet" href="./css/style.css">
<link rel="stylesheet" type="text/css" href="../admaster_class/jquery.mCustomScrollbar.css" />
<script type="text/javascript" src="../admaster_class/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="../admaster_class/jquery.mCustomScrollbar.js"></script>
<script language="javascript" type="text/javascript" src="../admaster_class/jquery.alphanum.js"></script>
<script language="javascript" type="text/javascript" src="../admaster_class/jquery.ready.admin.js?v="></script>