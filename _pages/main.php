<?php  require_once("../admaster_class/loginUtfChk.php"); ?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <!-- [s]include:Head -->
    <?php include "../include/inc_head.php"?>
    <!-- [e]include:Head -->
<?php
$gDBSelect = new SelectSql("board");
$gDBSelectPopup = new SelectSql("popup");
//======================== DB Module Start ============================
$gConn = new DBConn();
$pWhere=" where code='s1101'"; //공지사항
$PageLs1 = $gDBSelect->AllLs ( $pWhere, "2", $gConn->mConn );

$pWhere=" where code='s1201'"; //FAQ
$PageLs2 = $gDBSelect->AllLs ( $pWhere, "2", $gConn->mConn );

$pWhere=" where '$pNowDate' between str_date and end_date";
if(is_mobile()) $pWhere.=" and place='1'"; //mobile
else $pWhere.=" and place='0'"; //pc
$mOrderByNew =" seq desc";
$PopLs = $gDBSelectPopup->AllLs ( $pWhere, "3", $gConn->mConn );

$gConn->DisConnect();
//======================== DB Module End ===============================
?>
</head>
<body>
    <div class="body_wrap">
        <!-- [s]include:Top -->
        <?php include "../include/inc_top.php"?>
        <!-- [e]include:Top -->

        <!-- container -->
        <div class="container">
            <!-- main banner -->
            <div class="main_banner">
                <div class="txt">
                    <h2><img src="../images/logo_big.png"></h2>
                    <p>공인중개사 업무혁신 통합관리시스템</p>
                    <h3>"계약의 신"</h3>
                </div>
                <span class="misc_01"><img src="../images/misc_01.png"></span>
                <span class="misc_02"><img src="../images/misc_02.png"></span>
                <span class="misc_03"><img src="../images/misc_03.png"></span>
            </div>
            <!-- //main banner -->

            <!-- section1 -->
            <div class="main_section_01">
                <div class="intro">
                    <div class="img aniToRight1">
                        <img src="../images/prd_01.jpg" class="intro_01">
                    </div>
                    <div class="conts aniToTop1">
                        <h3>
                            계약의 신
                            <span>ERP FOR REAL ESTATE</span>
                            <strong>E R P</strong>
                        </h3>
                        <div class="expl">
                            <h4>공인중개사를 위한 <span>업무혁신플랫폼</span></h4>
                            <p>
                                "계약의 신" ERP는 국내 유일 반응형 웹기반 플랫폼으로<br>
                                공인중개사 실무경력진이 시작부터 현재까지 참여하여<br>
                                공인중개사가 고객관리, 매물관리, 계약관리는 물론<br>
                                공인중개사의 모든 업무를 처리할 수 있는<br>
                                ‘통합관리시스템’ 입니다.
                            </p>
                            <a href="#product">"계약의 신" 제품소개</a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- //section1 -->

            <!-- section2 -->
            <div class="main_section_02" id="product">
                <div class="conts_01">
                    <div class="dscr aniToRight1">
                        <h4>공인중개사</h4>
                        <p>
                            “계약의 신“ 만의 자체 알고리즘 구현으로<br>
                            상호 연동 프로세스 구현으로 사용자가 한눈에<br>
                            모든 상황을 Control 할 수 있습니다.
                        </p>
                        <img src="../images/dscr_01.png">
                    </div>
                    <span class="dscr_02"><img src="../images/dscr_02.png"></span>
                    <div class="dscr aniToLeft1">
                        <h4>제휴사</h4>
                        <p>
                            “계약의 신”은 각 제휴사 플랫폼 참여를 통해<br>
                            상생협력 및 공인중개사 업무 know-how<br>
                            극대화를 실현할 수 있습니다.
                        </p>
                        <ul class="alli">
                            <li>법무사사무소</li>
                            <li>세무사사무소</li>
                            <li>금융기관(은행)</li>
                            <li>이삿짐업체</li>
                            <li>인테리어업체</li>
                            <li>입주청소 등</li>
                        </ul>
                    </div>
                    <span class="dscr_03"><img src="../images/dscr_03.png"></span>
                </div>
                <div class="conts_02 ">
                    <h4>주요 기본 기능</h4>
                    <img src="../images/func_01.png" class="for_p aniToTop1">
                    <img src="../images/func_01_m.png" class="for_m aniToTop1">
                </div>
            </div>
            <!-- //section2 -->

            <!-- section3 -->
            <div class="main_section_03">
                <h3>주요 차별화 기능</h3>
                <ul>
                    <li class="func_01 aniToTop1">
                        <div class="conts">
                            <div class="txt">
                                <span>1</span>
                                <h4>웹기반</h4>
                                <p>ID/PW면 바로 업무가능</p>
                            </div>
                        </div>
                    </li>
                    <li class="func_02 aniToTop1">
                        <div class="conts">
                            <div class="txt">
                                <span>2</span>
                                <h4>자료 연동 기능 탑재</h4>
                                <p>각 DB간 연동으로 AI 구축</p>
                            </div>
                        </div>
                    </li>
                    <li class="func_03 aniToTop1">
                        <div class="conts">
                            <div class="txt">
                                <span>3</span>
                                <h4>자동업무 부여 기능</h4>
                                <p>중개사가 해야 할 업무를 시스템이 알아서 부여</p>
                            </div>
                        </div>
                    </li>
                    <li class="func_04 aniToTop1">
                        <div class="conts">
                            <div class="txt">
                                <span>4</span>
                                <h4>제휴사 참여시스템</h4>
                                <p>제휴사참여로 상생 협업을 통해 매출 극대화 및 전문지식 습득</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- //section3 -->

            <!-- section4 -->
            <div class="main_section_04">
                <div class="brief">
                    <h3>계약의 신 ERP</h3>
                    <p>
                        국내 유일 웹기반 플랫폼으로 공인중개사가 반드시 필요한 기능만을 살려 만든<br>
                        최적화된 ‘공급자 기반 토탈서비스 플랫폼’입니다.
                    </p>
                    <img src="../images/brief_01.png" class="for_p aniToTop1">
                    <img src="../images/brief_01_m.png" class="for_m aniToTop1">
                </div>
                <ul class="appl">
                    <li class="aniToTop1">
                        <a href="#">
                            <h4>
                                “계약의 신”<br>
                                <b>ERP 중개업소 회원신청</b>
                            </h4>
                            <p>
                                중개업소 회원신청을 통해 중개업무의<br>
                                혁신을 달성할 수 있게 해드립니다.
                            </p>
                            <span>중개업소 신청접수 <img src="../images/arrR_01.png"></span>
                            <img src="../images/appl_01.jpg">
                        </a>
                    </li>
                    <li class="aniToTop1 aniDelay1">
                        <a href="#">
                            <h4>
                                “계약의 신”<br>
                                <b>ERP 영업점 회원신청</b>
                            </h4>
                            <p>
                                영업점 신청을 통해 “계약의 신”과 함께<br>
                                미래의 성장을 꿈꾸길 바라시길 바랍니다.
                            </p>
                            <span>영업점 신청접수 <img src="../images/arrR_01.png"></span>
                            <img src="../images/appl_02.jpg">
                        </a>
                    </li>
                    <li class="aniToTop1 aniDelay2">
                        <a href="#">
                            <h4>
                                “계약의 신”<br>
                                <b>제휴사 신청</b>
                            </h4>
                            <p>
                                “계약의 신”과 상생협력할 제휴사를 모집합니다.<br>
                                (법무사, 세무사, 이삿짐업체, 금융기관 등)
                            </p>
                            <span>제휴사 신청접수 <img src="../images/arrR_01.png"></span>
                            <img src="../images/appl_03.jpg">
                        </a>
                    </li>
                    <li class="aniToTop1 aniDelay3">
                        <a href="#">
                            <h4>
                                “계약의 신”<br>
                                <b>투자 및 협력사 신청</b>
                            </h4>
                            <p>
                                “계약의 신”과 영업, 마케팅, 투자, M&A 등<br>
                                제휴사를 모집합니다.
                            </p>
                            <span>투자 및 협력사 신청접수 <img src="../images/arrR_01.png"></span>
                            <img src="../images/appl_04.jpg">
                        </a>
                    </li>
                </ul>
            </div>
            <!-- //section4 -->

            <!-- section5 -->
            <div class="main_section_05">
                <div class="notice">
                    <h3>고객센터</h3>
                    <a href="#" class="one"><span>1대1 문의하기</span></a>
                    <div class="notice_list">
                        <ul class="swiper-wrapper">

<?php
if(count($PageLs1->mData)) {
     for($i=0; $i<count($PageLs1->mData); $i++) {
?>
                            <li class="swiper-slide">
                                <a href="../pages/notice.php?mode=read&seq=<?=$PageLs1->mData[$i]["seq"]?>" class="more"><img src="../images/plus.png"></a>
                                <a href="../pages/notice.php?mode=read&seq=<?=$PageLs1->mData[$i]["seq"]?>">
                                    <span class="item">공지사항</span>
                                    <h4><?=$PageLs1->mData[$i]["subject"]?></h4>
                                    <p><?=strip_tags($PageLs1->mData[$i]["content"])?> </p>
                                    <span class="date"><?=str_replace("-",".",substr($PageLs1->mData[$i]["reg_date"],0,10))?></span>
                                    <img src="../images/arrR_02_wh.png" class="arr">
                                </a>
                            </li>
<?php
	}//end for
}//end if
?> 

<?php
if(count($PageLs2->mData)) {
     for($i=0; $i<count($PageLs2->mData); $i++) {
?>
                            <li class="swiper-slide">
                                <a href="../pages/faq.php?mode=&seq=<?=$PageLs2->mData[$i]["seq"]?>" class="more"><img src="../images/plus.png"></a>
                                <a href="../pages/faq.php?mode=&seq=<?=$PageLs2->mData[$i]["seq"]?>">
                                    <span class="item">자주 묻는 질문</span>
                                    <h4><?=$PageLs2->mData[$i]["subject"]?></h4>
                                    <p><?=strip_tags($PageLs2->mData[$i]["content"])?> </p>
                                    <span class="date"><?=str_replace("-",".",substr($PageLs2->mData[$i]["reg_date"],0,10))?></span>
                                    <img src="../images/arrR_02_wh.png" class="arr">
                                </a>
                            </li>
<?php
	}//end for
}//end if
?> 
                        </ul>
                    </div>
                    
                </div>
            </div>
            <!-- //section5 -->

            
            
        </div>
        <!-- //container -->

        <!-- [s]include:Footer -->
        <?php include "../include/inc_footer.php"?>
        <!-- [e]include:Footer -->
    </div>
<?php include "../admaster/popup_div.php"?>
    <script>
        $(document).ready(function(){
            var noticeSwiper = new Swiper(".notice_list", {
                speed: 500,
                slidesPerView: "auto",
                spaceBetween: 16,
                watchOverflow: true,
                breakpoints: {
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }
            });
        })
    </script>
</body>
</html>