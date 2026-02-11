<?php 
$pRefUrl = $_SERVER["HTTP_REFERER"];
if($pRefUrl!="") {
	$pRefUrlArr= explode("/",$pRefUrl);		
	if(count($pRefUrlArr) >= 2) {
		if($pRefUrlArr[2] != $_SERVER["HTTP_HOST"]) AlertBack("잘못된 접근입니다.1");
	}else{
		AlertBack("잘못된 접근입니다.2");
	}
	
}else{
	AlertBack("잘못된 접근입니다.3");
}
?>
