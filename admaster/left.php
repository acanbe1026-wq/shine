<?php 
if($pTopCode=="s9") {
	if($CookieAdminKind!="9") AlertHref("해당 메뉴에 대한 권한이 없습니다.","login.php"); 
}

$pTit1["s1"]="게시판관리";
$pTit2["s1101"]="공지사항";
$pTit2["s1201"]="자주 묻는 질문";

$pTit1["s8"]="기타관리";
$pTit2["s8101"]="팝업관리";

$pTit1["s9"]="관리페이지";
$pTit2["s9101"]="관리자관리";

?>

		<!-- aside -->
        <div class="aside">
            <div class="tit">
                <h1>
                    <?=$siteName?><br>
                    <span>관리시스템</span>
                </h1>
            </div>
            <div class="user">
                <p><strong><?=($CookieAdminName)?></strong>님</p>
                <a href="logout_exec.php" class="btn_logout">로그아웃</a>
            </div>
            <div class="nav_wrap">
                <ul class="nav">
                    <li>
                        <a href="#" class="nav_02<?php if($pTopCode=="s1") echo" selected"?>">게시판 관리</a>
                        <ul class="nav_sub<?php if($pTopCode=="s1") echo" selected"?>">
                            <li><a href="s1101.php" class="<?php if($pFileName=="s1101.php") echo" selected"?>">- <?=$pTit2["s1101"]?></a></li>
							<li><a href="s1201.php" class="<?php if($pFileName=="s1201.php") echo" selected"?>">- <?=$pTit2["s1201"]?></a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" class="nav_08<?php if($pTopCode=="s8") echo" selected"?>">기타 관리</a>
                        <ul class="nav_sub<?php if($pTopCode=="s8") echo" selected"?>">
                            <li><a href="s8101.php" class="<?php if($pFileName=="s8101.php") echo" selected"?>">- <?=$pTit2["s8101"]?></a></li>
                        </ul>
                    </li>
<?php if($CookieAdminKind=="9") {?>
                    <li>
                        <a href="#" class="nav_09<?php if($pTopCode=="s9") echo" selected"?>">관리페이지</a>
                        <ul class="nav_sub<?php if($pTopCode=="s9") echo" selected"?>">
                            <li><a href="s9101.php" class="<?php if($pFileName=="s9101.php") echo" selected"?>">- <?=$pTit2["s9101"]?></a></li>
                        </ul>
                    </li>
<?php }?>
                </ul>
            </div>
            <div class="aside_footer">
                <p class="copy">Copyrights@2022 <?=$siteName?> all rights reserved.</p>
            </div>
        </div>
        <!-- //aside -->