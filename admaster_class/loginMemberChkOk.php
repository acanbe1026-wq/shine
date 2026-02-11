<?php 
if($CookieMemberSeq=="" || $CookieMemberSeq=="0") {
	echo "
		<script language='javascript' type='text/javascript'>
			alert('회원 전용공간입니다.\\n로그인 하시기 바랍니다.');
			location.href='../user/login.php?returl=".$PHP_SELF."';
		</script>
	";
	exit;
}
?>
