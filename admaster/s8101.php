<?php  require_once("../admaster_class/loginAdminChk.php"); ?>
<!DOCTYPE html>
<html lang="ko">
<head>
<?php  include "../admaster_class/header_admin.php"; ?>
</head>
<body>

	<div class="body_wrap">
        <!-- aside -->
		<?php  include "left.php"; ?>
        <!-- //aside -->

        <!-- container -->
        <div class="container">
            <div class="conts">
                <?php  include "left_tit.php"; ?>                

		<?php  
			if($mode=="") include "../admin_bbs/popup_list.php"; 
			else include "../admin_bbs/popup_".$mode.".php"; 
		?>

            </div>
        </div>
        <!-- //container -->
        
    </div>

<?php  include "footer.php"; ?>
</body>
</html>

