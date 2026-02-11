<?php 
require_once("../admaster_class/loginUtfChk.php"); //전체함수
require_once("../admaster_class/function.php"); //전체함수

$termVal = $term;
$termVal= str_replace("d"," days",$termVal);
$termVal= str_replace("m"," months",$termVal);

if($term=="all")  echo "/";
elseif($term=="close")  {
	if($sdate=="") $sdate = date("Y-m-d", strtotime("-1 day"));
	echo $sdate."/".date("Y-m-d", strtotime("-1 day"));
}else{
	if($item=="cal2") { //검색
		if($sdate=="") $sdate = date("Y-m-d", strtotime("+0 day"));
		$termVal= "-".$termVal;
		$dataItem = date("Y-m-d", strtotime($sdate.$termVal));
		echo $sdate."/".$dataItem;	
	}else{ //등록
		if($sdate=="") $sdate = date("Y-m-d", strtotime("+0 day"));
		$termVal= "+".$termVal;
		$dataItem = date("Y-m-d", strtotime($sdate.$termVal));
		echo $sdate."/".$dataItem;	

	}
}
?>