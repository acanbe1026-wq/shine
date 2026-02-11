<?php
    $pUrlArr=explode("/",$_SERVER["PHP_SELF"]);
    // $nowDir=$pUrlArr[count($pUrlArr)-2];
    $pFileName=$pUrlArr[count($pUrlArr)-1];
    // $pHtmlLink="/".$nowDir."/".$pFileName;
    $pHtmlLink="/".$pFileName;

require_once($_SERVER["DOCUMENT_ROOT"] . "/admaster_class/function.php"); //함수
require_once($_SERVER["DOCUMENT_ROOT"] . "/admaster_class/dbconn.php"); //디비
require_once($_SERVER["DOCUMENT_ROOT"] . "/admaster_class/class_select.php");
require_once($_SERVER["DOCUMENT_ROOT"] . "/admaster_class/conf.php");

if(is_mobile()) $pPageSetNew=5; //페이지 갯수
?>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<meta name="description" content="공인중개사ERP 토탈서비스 플랫폼 '계약의 신'입니다.">
<meta name="naver-site-verification" content="2d3ae7f804f328f1c66c08587422be08f6787172" />
<meta property="og:type" content="website"> 
<meta property="og:title" content="계약의 신">
<meta property="og:description" content="공인중개사ERP 토탈서비스 플랫폼 '계약의 신'입니다.">
<meta property="og:image" content="https://home.gyesin.com/images/logo.png">
<meta property="og:url" content="https://home.gyesin.com">
<title>계약의 신</title>
<link rel="shortcut icon" href="/favicon.ico">
<link rel="stylesheet" href="/css/swiper.min.css">
<link rel="stylesheet" href="/css/style.css?20230705">
<script src="/js/jquery-3.2.1.min.js"></script>
<script src="/js/swiper.min.js"></script>
<script src="/js/common.js"></script>