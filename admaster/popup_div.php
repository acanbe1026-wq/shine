<?php
if(count($PopLs->mData)) {
    for($i=0; $i<count($PopLs->mData); $i++) {
		$popNum = $i +1;		//번호 desc

		$position="absolute";
		if($PopLs->mData[$i]["move"]==1) $position="fixed";
?>
	<div class="divPopup" id="ex0<?=$popNum?>" style="left:<?=$PopLs->mData[$i]["loc_x"]?>px;top:<?=$PopLs->mData[$i]["loc_y"]?>px;position:<?=$position?>;">
	<?php If($PopLs->mData[$i]["url"]==""){?>
		<div><?=$PopLs->mData[$i]["content"]?></div>
	<?php }else{?>
		<div><a href="http://<?=$PopLs->mData[$i]["url"]?>"<?php if($PopLs->mData[$i]["url_target"]=="1") echo " target='_blank'";?>><?=$PopLs->mData[$i]["content"]?></a></div>
	<?php }?>

		<p class="chk">
			<input type="checkbox" style="display:inline-block" id="chk_ex0<?=$popNum?>" onClick="javascript:closeWinDate('ex0<?=$popNum?>')"><span>하루동안 이창을 열지 않음</span>
			<a href="javascript:closeWin('ex0<?=$popNum?>')"><img src="/admaster/images/btn_01.gif" alt="닫기" title="닫기" /></a>
		</p>
	</div>
<?php
    }
}
?>

<script type="text/javascript">
$(function() {
	$('.divPopup').click(function(e) {
		$('.divPopup').css('z-index', 99998);
		$(this).css('z-index', 99999);
	});
});
</script>
<script language="javascript" type="text/javascript">
function getCookie(name) {
	var Found = false
	var start, end
	var i = 0
	while(i <= document.cookie.length) {
		 start = i
		 end = start + name.length
		 if(document.cookie.substring(start, end) == name) {
			 Found = true
			 break
		 }
		 i++
	}
	if(Found == true) {
		start = end + 1
		end = document.cookie.indexOf(";", start)
		if(end < start)
			end = document.cookie.length
		return document.cookie.substring(start, end)
	}
  return ""
}
function setCookie( name, value, expiredays )
{
	var todayDate = new Date();
	todayDate.setDate( todayDate.getDate() + expiredays );
	document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}
function closeWinDate(ele)
{
	//setCookie(ele, "ok", 1);
    //document.getElementById(ele).style.display="none"
}
function closeWin(ele)
{
	if($("#chk_"+ele).is(":checked"))  setCookie(ele, "ok", 1);
    document.getElementById(ele).style.display="none"
}

var eventCookie=getCookie("ex01");
if (eventCookie == "ok") closeWin("ex01");

var eventCookie=getCookie("ex02");
if (eventCookie == "ok") closeWin("ex02");

var eventCookie=getCookie("ex03");
if (eventCookie == "ok") closeWin("ex03");
</script>
<style type="text/css">
/* 레이어 팝업 */
.divPopup {position:absolute;z-index:99998;background:#fff;border:2px solid #a6a69e; font-size:12px;}
.divPopup > div  {padding:15px; border-bottom:2px solid #bbbbbb; line-height:18px;}
.divPopup .chk  {padding:10px 10px;}
.divPopup .chk span {display:inline-block; margin-left:5px;}
.divPopup .chk a img {float:right;}
</style>