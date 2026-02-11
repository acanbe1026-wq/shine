<?php
if($Result[0]["reg_date"]!="") {
	$reg_date_ymd=substr($Result[0]["reg_date"],0,10);
	$reg_date_time=substr($Result[0]["reg_date"],11,8);
}else{
	$reg_date_ymd=date("Y-m-d");
	$reg_date_time=date("H:i:s");
}
?>
	<input type="date" max="9999-12-31" name="reg_date" value="<?=$reg_date_ymd?>" title="등록날짜">
	<input type="time" name="reg_time" value="<?=$reg_date_time?>" title="등록시간">