<?php  require_once($_SERVER['DOCUMENT_ROOT'] . "/admaster_class/loginUtfChk.php"); ?>
<?php $code="s1201"; ?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <!-- [s]include:Head -->
    <?php include $_SERVER['DOCUMENT_ROOT'] . "/include/inc_head.php"?>
    <!-- [e]include:Head -->
</head>
<body>
    <div class="body_wrap">
        <!-- [s]include:Top -->
        <?php include $_SERVER['DOCUMENT_ROOT'] . "/include/inc_top.php"?>
        <!-- [e]include:Top -->

        <!-- container -->
        <div class="container">
            <!-- [s]include:Sub Banner -->
            <?php include $_SERVER['DOCUMENT_ROOT'] . "/include/inc_subBanner.php"?>
            <!-- [e]include:Sub Banner -->

            <div class="sub_conts">
                <div class="sub_tit">
                    <h3>자주 묻는 질문</h3>
                </div>
		<?php  
			if($mode=="") include $_SERVER['DOCUMENT_ROOT'] . "/board/board_list_faq.php"; 
			else include $_SERVER['DOCUMENT_ROOT'] . "/board/board_".$mode.".php";
		?>
 
            </div>
            

            
            
        </div>
        <!-- //container -->

    <!-- [s]include:Footer -->
    <?php include $_SERVER['DOCUMENT_ROOT'] . "/include/inc_footer.php"?>
    <!-- [e]include:Footer -->
    </div>
    
    <script>
        $(document).ready(function(){
            $(".q").on("click", function(){
                event.preventDefault();
                if($(this).hasClass("opened")){
                    $(this).removeClass("opened");
                    $(".a").slideUp("fast");
                } else {
                    $(".q").removeClass("opened");
                    $(this).addClass("opened");
                    $(".a").slideUp("fast");
                    $(this).next(".a").slideDown("fast");
                }
            })
        })
    </script>
</body>
</html>