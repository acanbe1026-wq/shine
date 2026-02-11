<?php 
ini_set('display_errors', TRUE); 
error_reporting(E_ERROR); //변수지정 오류문구 표시하지 않음
//error_reporting(E_ERROR | E_WARNING | E_PARSE | E_NOTICE);; //변수지정 오류문구 표시하지 않음

header("Content-Type: text/html; charset=UTF-8"); 
header("Cache-Control: no-cache, must-revalidate"); //no-store, 응답된 정보를 저장하지 말라는 의미이다.
header("Cache-Control: post-check=0, pre-check=0", false); 
header("Pragma: no-cache");

session_cache_limiter('no-cache, must-revalidate'); //뒤로가기 만료확인 없애기

@extract($_GET);
@extract($_POST);
//foreach($_GET as $key => $value)  { $$key = $value; } 
//foreach($_POST as $key => $value) { $$key = $value; } 
?>