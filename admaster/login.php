<!DOCTYPE html>
<html lang="ko">
<head>
<?php  include "../admaster_class/header_admin.php"; ?>

</head>
<body>

    <div class="body_wrap login_wrap">
        <div class="login_conts">
            <div class="tit">
                <h1><?=$siteName?><br /><span>관리 시스템</span></h1>
                <p><?=$siteName?> Management System</p>
            </div>
            <div class="login_box">
<form name="formWrite" id="formWrite" method="post" action="login_exec.php">
                <h3>LOGIN</h3>
                <div class="input_wrap">
                    <span class="item"><img src="./images/icon_people.png">ID</span>
                    <input type="text" name="id" title="아이디" value="" placeholder="아이디">
                </div>
                <div class="input_wrap">
                    <span class="item"><img src="./images/icon_lock.png">PW</span>
                    <input type="password" name="passwd" title="비밀번호" value="" placeholder="비밀번호" onkeyup="onKeyUp('login')">
                </div>
                <a href="javascript:formInputComm('');" class="btn_login">로그인</a>
</form>
			</div>
        </div>
    </div>


<?php  include "footer.php"; ?>

</body>
</html>