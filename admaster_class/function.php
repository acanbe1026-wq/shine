<?php 
ini_set('display_errors', TRUE); 
error_reporting(E_ERROR); //변수지정 오류문구 표시하지 않음
//error_reporting(E_ERROR | E_WARNING | E_PARSE | E_NOTICE);; //변수지정 오류문구 표시하지 않음

function is_mobile(){ 
    return preg_match('/phone|samsung|lgtel|mobile|[^A]skt|nokia|blackberry|android|sony/i', $_SERVER['HTTP_USER_AGENT']); 
} 

function strSplitUtf8($src, $n) { // 문자열 자르기
	return iconv_substr($src, 0, $n, "utf-8");
}

function strHtmlDel($src) { // Html코드 변환하기
	$src="HTML-".trim($src);

	$src = preg_replace("/<p[^>]*>/i", '', $src);
	$src = preg_replace("/<\/p>/i", '<br>', $src);

	$src =strip_tags($src, "<br>"); //삭제 예외처리

	$src=preg_replace("/&nbsp;<br>/i","<br>",$src);
	$src=preg_replace("/<br>&nbsp;/i","<br>",$src);

	$src=preg_replace("/<br><br><br><br><br><br><br><br>/i","<br>",$src);
	$src=preg_replace("/<br><br><br><br><br><br><br>/i","<br>",$src);
	$src=preg_replace("/<br><br><br><br><br><br>/i","<br>",$src);
	$src=preg_replace("/<br><br><br><br><br>/i","<br>",$src);
	$src=preg_replace("/<br><br><br><br>/i","<br>",$src);
	$src=preg_replace("/<br><br><br>/i","<br>",$src);
	$src=preg_replace("/<br><br>/i","<br>",$src);
		
	$src=str_replace("HTML-<br>","",$src);
	$src=str_replace("HTML-","",$src);

	//$src=preg_replace("/<img[^>]+\>/i", "", $src);
	//$src=preg_replace("!<iframe(.*?)<\/iframe>!is","",$src);
	//$src=preg_replace("!<script(.*?)<\/script>!is","",$src);
	//$src=preg_replace("!<style(.*?)<\/style>!is","",$src);

	//$src=htmlspecialchars($src); //html코드로 보이기
	//$src=strip_tags($src); //html 코드 없애기
	
	return $src;

} // end function

function strHtmlAPI($src) { // Html코드 변환하기
	$src=trim($src);
	$src=str_replace("&lt;","<",$src);
	$src=str_replace("&gt;",">",$src);
	$src=str_replace('"','&quot;',($src));

	$src = str_replace("\r\n", "\\n", $src);
	$src = str_replace("\n", "\\n", $src);

	return $src;

} // end function

function strHtml($src) { // Html코드 변환하기
	$src=trim($src);
	$src=str_replace("&lt;","<",$src);
	$src=str_replace("&gt;",">",$src);
	$src=str_replace('"','&quot;',($src));

	//$src=htmlspecialchars($src); //html코드로 보이기
	//$src=strip_tags($src); //html 코드 없애기
	
	return $src;

} // end function

//$pSqlVal.="('0','#seq#','".insertHtml($charger_kind[$ipIn])."','".insertHtml($charger_kw[$ipIn])."','".insertHtml($charger_kw_etc[$ipIn])."','".insertHtml($charger_type[$ipIn])."'),";
function insertHtml($src) { // Html코드 변환하기
	$src=trim($src);
	$src=str_replace('"','&quot;',($src));
	$src=str_replace("'","''",($src)); //'작은따옴표 &#39; 큰따옴표 &#34;
	
	return $src;
} //end function

function scriptHtml($src) { // scriptHtml코드 변환하기
	$src = trim($src);

	$src=str_replace("'","''",($src)); //'작은따옴표 &#39; 큰따옴표 &#34;
	//$src=preg_replace("/iframe+/i","i f r a m e",($src));
	//$src=preg_replace("/cookie+/i","c o o k i e",($src));
	//$src=preg_replace("/script+/i","s c r i p t",($src));
	$src=preg_replace("/<xmp>+/i","< x m p >",($src));
	$src=preg_replace("/varchar+/i","v a r c h a r",($src));
	$src=preg_replace("/shutdown+/i","s h u t d o w n",($src));
	$src=preg_replace("/having +/i","h a v i n g ",($src));
	$src=preg_replace("/select +/i","s e l e c t",($src));
	$src=preg_replace("/union +/i","u n i o n ",($src));
	$src=preg_replace("/insert +/i","i n s e r t ",($src));
	$src=preg_replace("/update +/i","u p d a t e ",($src));
	$src=preg_replace("/delete +/i","d e l e t e ",($src));
	$src=preg_replace("/drop +/i","d r o p ",($src));
	$src=preg_replace("/\.js+/i","",($src));
	$src=preg_replace("/exec+/i","e x e c",($src));
	$src=preg_replace("/db_owner+/i","",($src));
	$src=preg_replace("/db_name+/i","",($src));

	$src=str_replace("http://".$_SERVER["HTTP_HOST"],"",($src));
	$src=str_replace("https://".$_SERVER["HTTP_HOST"],"",($src));

	return $src;

} // end function


function injecFilter($src) {
	$src = trim($src);
	$src=stripslashes($src);

	$src=str_replace("=","",($src));
	$src=str_replace("<","",($src));
	$src=str_replace(">","",($src));
	$src=str_replace("'","",($src));
	$src=str_replace("\"","",($src));
	$src=str_replace(";","",($src));
	$src=str_replace("+","",($src));
	$src=str_replace(")","",($src));
	$src=str_replace("(","",($src));
	$src=str_replace("--","",($src));
	$src=str_replace("//","",($src));
	$src=str_replace("%","",($src));
	$src=str_replace("?","",($src));
	//$src=preg_replace("/iframe+/i","i f r a m e",($src));
	//$src=preg_replace("/cookie+/i","c o o k i e",($src));
	//$src=preg_replace("/script+/i","s c r i p t",($src));
	$src=preg_replace("/varchar+/i","v a r c h a r",($src));
	$src=preg_replace("/<xmp>+/i","< x m p >",($src));
	$src=preg_replace("/shutdown+/i","s h u t d o w n",($src));
	$src=preg_replace("/having +/i","h a v i n g ",($src));
	$src=preg_replace("/select +/i","s e l e c t",($src));
	$src=preg_replace("/union +/i","u n i o n ",($src));
	$src=preg_replace("/insert +/i","i n s e r t ",($src));
	$src=preg_replace("/update +/i","u p d a t e ",($src));
	$src=preg_replace("/delete +/i","d e l e t e ",($src));
	$src=preg_replace("/drop +/i","d r o p ",($src));
	$src=preg_replace("/\.js+/i","",($src));
	$src=preg_replace("/exec+/i","e x e c",($src));
	$src=preg_replace("/db_owner+/i","",($src));
	$src=preg_replace("/db_name+/i","",($src));

	return $src;

} // end function

//===================

function imgViewSize($filename, $pSize) {
	$dirpath = "../upfile/".substr($filename,0,4)."/".substr($filename,4,2)."/";
	$ext_exp=explode(".",$filename);
	$file_ext=strtolower($ext_exp[count($ext_exp)-1]);

	if(file_exists($dirpath.$filename) && $filename!="" && strpos("#|jpg|jpeg|gif|png|bmp|","|$file_ext|")) {
		if($pSize) $pSizeMsg="width='$pSize'";
		echo "<img src='".$dirpath.$filename."' ".$pSizeMsg." />";
	}
}	

function imgViewThum($filename, $pSize) {
	$filename=str_replace(".","-thum.",$filename);
	$dirpath = "../upfile/".substr($filename,0,4)."/".substr($filename,4,2)."/";
	$ext_exp=explode(".",$filename);
	$file_ext=strtolower($ext_exp[count($ext_exp)-1]);

	if(file_exists($dirpath.$filename) && $filename!="" && strpos("#|jpg|jpeg|gif|png|bmp|","|$file_ext|")) {
		if($pSize) $pSizeMsg="width='$pSize'";
		echo "<img src='".$dirpath.$filename."' ".$pSizeMsg." class='thum' />";
	}
}	

function imgViewRet($filename, $pSize) {
	$dirpath = "../upfile/".substr($filename,0,4)."/".substr($filename,4,2)."/";
	if($pSize) $pSizeMsg="width='$pSize'";
	$ext_exp=explode(".",$filename);
	$file_ext=strtolower($ext_exp[count($ext_exp)-1]);

	if(file_exists($dirpath.$filename) && $filename!="" && strpos("#|jpg|jpeg|gif|png|bmp|","|$file_ext|")) return "<img src='".$dirpath.$filename."' ".$pSizeMsg." />";
}

function FileDownView($filename, $filenm) {
	$dirpath = "../upfile/".substr($filename,0,4)."/".substr($filename,4,2)."/";
	$pFileSize = ceil(filesize($dirpath.$filename) / 1024 / 1024);  //올림
	echo "<img src='./images/icon_clip.png'> <a href='".$dirpath.$filename."' target='_blank'>".$filenm."</a> (".$pFileSize." Mbyte)";
}


function FileDownViewSite($filename, $filenm) {
	$dirpath = "../upfile/".substr($filename,0,4)."/".substr($filename,4,2)."/";
	$pFileSize = ceil(filesize($dirpath.$filename) / 1024 / 1024);  //올림
	echo "<div class='attach'><span><img src='/images/clip.png'>첨부파일</span> <a href='".$dirpath.$filename."' target='_blank'>".$filenm."</a> (".$pFileSize." Mbyte)</div>";
}

function fileDeleteChk($filenm, $num) {
	echo "<span><label><input type='checkbox' name='del".$num."' value='1' title='삭제' /><font color='red'>삭제</font> : ".$filenm."</label></span>";
}

function fileDelete($filename) {
	$dirpath = "../upfile/".substr($filename,0,4)."/".substr($filename,4,2)."/";
	if(file_exists($dirpath.$filename) && $filename!="") {
		unlink($dirpath.$filename);

		$filename=str_replace(".","-thum.",$filename);
		unlink($dirpath.$filename);
	}
}

function fileSrcRet($filename) {
	$dirpath = "../upfile/".substr($filename,0,4)."/".substr($filename,4,2)."/";
	if(file_exists($dirpath.$filename) && $filename!="") {
		 $fileFullUrl="../upfile/".substr($filename,0,4)."/".substr($filename,4,2)."/".$filename;
	}
	return $fileFullUrl;
}
function fileFullUrl($filename) {
	$dirpath = "../upfile/".substr($filename,0,4)."/".substr($filename,4,2)."/";
	if(file_exists($dirpath.$filename) && $filename!="") {
		$dirpath= str_replace("../","/",$dirpath);
		$fileFullUrl="https://".$_SERVER["HTTP_HOST"].$dirpath.$filename;
	}
	return $fileFullUrl;
}

function upfileDirChk() {
	$pChkDir="../upfile/".date("Y");
	if(!is_dir($pChkDir)) {
		mkdir($pChkDir, 0777); // 디렉토리생성
		chmod($pChkDir, 0777 );   // 디렉토리
	}	

	$pChkDir="../upfile/".date("Y")."/".date("m");
	if(!is_dir($pChkDir)) {
		mkdir($pChkDir, 0777); // 디렉토리생성
		chmod($pChkDir, 0777 );   // 디렉토리
	}	
}

function excelUp($upfile, $upfile_name, $pOldFile) { // 파일 업로드 하기
	$ext_exp=explode(".",$upfile_name);
	$file_ext=strtolower($ext_exp[count($ext_exp)-1]);
	if(strlen($file_ext) <> 3 && strlen($file_ext) <> 4) {
		AlertBack('파일명이 확장자(3~4자)인지 확인하십시오.');
	}

	if(strpos("#|xlx|xlsx|","|$file_ext|"))  {
		$rand=rand(1000,9999);
		$upfile_name="excel_".date("YmdHis")."-".$rand.".".$file_ext;
		$dirpath="../upfile/excel/";

		move_uploaded_file($upfile,$dirpath.$upfile_name);
		chmod( $dirpath.$upfile_name, 0777 );
		return $upfile_name;

	} else {
		AlertBack('엑셀(Excel) 파일만 등록하실 수 있습니다.');
	}
}

function fileUp($upfile, $upfile_name, $pOldFile) { // 파일 업로드 하기
	$ext_exp=explode(".",$upfile_name);
	$file_ext=strtolower($ext_exp[count($ext_exp)-1]);
	if(strlen($file_ext) <> 3 && strlen($file_ext) <> 4) {
		AlertBack('파일명이 확장자(3~4자)인지 확인하십시오.');
	}

	if(strpos("#|asp|asa|jsp|php|php3|htm|html|vbs|css|xml|cab|dll|exe|msi|cmd|pl|dll|ph|inc|","|$file_ext|"))  {
		AlertBack('업로드가 제한된 확장자 파일입니다.\\n파일명을 변경하여 등록하십시오.');
	} else { //첨부가능 파일인 경우
		if($pOldFile) fileDelete($pOldFile);

		$rand=rand(1000,9999);
		$upfile_name=date("YmdHis")."-".$rand.".".$file_ext;
		$dirpath="../upfile/".date("Y")."/".date("m")."/";

		move_uploaded_file($upfile,$dirpath.$upfile_name);
		chmod( $dirpath.$upfile_name, 0777 );
		return $upfile_name;
	}
}

function imgUp($upfile, $upfile_name, $pOldFile) { // 이미지 업로드 하기
	$ext_exp=explode(".",$upfile_name);
	$file_ext=strtolower($ext_exp[count($ext_exp)-1]);
	if(strlen($file_ext) <> 3 && strlen($file_ext) <> 4) {
		AlertBack('파일명이 확장자(3~4자)인지 확인하십시오.');
	}
	
	if(strpos("#|jpg|jpeg|gif|png|bmp|","|$file_ext|"))  {
		if($pOldFile) fileDelete($pOldFile);

		$rand=rand(1000,9999);
		$upfile_name=date("YmdHis")."-".$rand.".".$file_ext;
		$dirpath="../upfile/".date("Y")."/".date("m")."/";

		move_uploaded_file($upfile,$dirpath.$upfile_name);
		chmod( $dirpath.$upfile_name, 0777 );
		return $upfile_name;

	} else {
		AlertBack('gif,jpg,png 이미지 파일이 아닙니다.\\ngif,jpg,png 이미지 파일만 등록하실 수 있습니다.');
	}
}


function imgUpThum($upfile, $upfile_name, $pOldFile) { // 썸네일 이미지와 원본 이미지
	$ext_exp=explode(".",$upfile_name);
	$file_ext=strtolower($ext_exp[count($ext_exp)-1]);
	if(strlen($file_ext) <> 3 && strlen($file_ext) <> 4) {
		AlertBack('파일명이 확장자(3~4자)인지 확인하십시오.');
	}
	
	if(strpos("#|jpg|jpeg|gif|png|","|$file_ext|"))  {
		if($pOldFile) fileDelete($pOldFile);

		$rand=rand(1000,9999);
		$upfile_name=date("YmdHis")."-".$rand.".".$file_ext;	
		$dirpath="../upfile/".date("Y")."/".date("m")."/";
		$save_filename=$dirpath.$upfile_name;

		$img_info = getImageSize($upfile);
		$img_width = $img_info[0];
		$img_height = $img_info[1];
		$img_kind = $img_info[2]; //이미지종류: 1=gif, 2=jpg, 3=png

		if($img_kind=="1") $src_img = ImageCreateFromGIF($upfile);
		elseif($img_kind=="2") $src_img = ImageCreateFromJPEG($upfile);
		elseif($img_kind=="3") $src_img = ImageCreateFromPNG($upfile);

		//회전여부 확인
		$exif = exif_read_data($upfile);
		if(!empty($exif['Orientation'])) {
			switch($exif['Orientation']) {
				case 8:
					$src_img = imagerotate($src_img, 90, 0); //좌측 90도
					$img_width = $img_info[1];
					$img_height = $img_info[0];
					break;
				case 6:
					$src_img= imagerotate($src_img, -90, 0);  //우측 90도
					$img_width = $img_info[1];
					$img_height = $img_info[0];
					break;
			}
		}

		//원본이미지
		move_uploaded_file($upfile,$save_filename);
		chmod( $save_filename, 0777 );

		//썸네일 하나 만들기
		$upfile_thum=date("YmdHis")."-".$rand."-thum.".$file_ext;			
		$thum_filename=$dirpath.$upfile_thum;

		$pMaxSize = 300;	
		$max_width=$pMaxSize;

		$dst_width = $max_width;
		$dst_height = ceil(($max_width / $img_width) * $img_height);

		//빈공간 없애기
		$max_width=$dst_width;
		$max_height=$dst_height;		

		$dst_img = imagecreatetruecolor($max_width, $max_height);
		$bgc = ImageColorAllocate($dst_img, 255, 255, 255);
		ImageFilledRectangle($dst_img, 0, 0, $max_width, $max_height, $bgc); 
		ImageCopyResampled($dst_img, $src_img, 0, 0, 0, 0, $dst_width, $dst_height, ImageSX($src_img),ImageSY($src_img));

		ImageInterlace($dst_img);

		if($img_kind=="1") ImageGIF($dst_img, $thum_filename, '100');
		elseif($img_kind=="2") ImageJPEG($dst_img, $thum_filename, '100');
		elseif($img_kind=="3") ImagePNG($dst_img, $thum_filename, '0');	 //0~9

		ImageDestroy($dst_img);
		chmod( $thum_filename, 0777 );		
		ImageDestroy($src_img);
		
		return $upfile_name;

	} else {
		AlertBack('gif,jpg,png 이미지 파일이 아닙니다.\\ngif,jpg,png 이미지 파일만 등록하실 수 있습니다.');
	}
}

function imgUpSize($upfile, $upfile_name, $pOldFile, $code) { // 원본이미지를 무조건 크기 줄이기
	$ext_exp=explode(".",$upfile_name);
	$file_ext=strtolower($ext_exp[count($ext_exp)-1]);
	if(strlen($file_ext) <> 3 && strlen($file_ext) <> 4) {
		AlertBack('파일명이 확장자(3~4자)인지 확인하십시오.');
	}
	
	if(strpos("#|jpg|jpeg|gif|png|","|$file_ext|"))  {
		if($pOldFile) fileDelete($pOldFile);

		$rand=rand(1000,9999);
		$upfile_name=date("YmdHis")."-".$rand.".".$file_ext;	
		$dirpath="../upfile/".date("Y")."/".date("m")."/";
		$save_filename=$dirpath.$upfile_name;

		$img_info = getImageSize($upfile);
		$img_width = $img_info[0];
		$img_height = $img_info[1];
		$img_kind = $img_info[2]; //이미지종류: 1=gif, 2=jpg, 3=png

		if($img_kind=="1") $src_img = ImageCreateFromGIF($upfile);
		elseif($img_kind=="2") $src_img = ImageCreateFromJPEG($upfile);
		elseif($img_kind=="3") $src_img = ImageCreateFromPNG($upfile);

		//회전여부 확인
		$exif = exif_read_data($upfile);
		if(!empty($exif['Orientation'])) {
			switch($exif['Orientation']) {
				case 8:
					$src_img = imagerotate($src_img, 90, 0); //좌측 90도
					$img_width = $img_info[1];
					$img_height = $img_info[0];
					break;
				case 6:
					$src_img= imagerotate($src_img, -90, 0);  //우측 90도
					$img_width = $img_info[1];
					$img_height = $img_info[0];
					break;
			}
		}

		//큰이미지  430 x 430  385 x 495
		$max_width=230;
		$max_height=180;
		if($code=="s1601") { //연주회
			$max_width=172;
			$max_height=247;
		}else if(substr($code,0,3)=="s21" || substr($code,0,3)=="s24") { //지휘자 이끌어온 사람들
			$max_width=336;
			$max_height=270;

			if(strpos($code,"_mobile")) {
				$max_width=748;
				$max_height=269;
			}
		}

		if($img_width >= $img_height){
			$dst_width = $max_width;
			$dst_height = ceil(($max_width / $img_width) * $img_height);
		}else{
			$dst_height = $max_height;
			$dst_width = ceil(($max_height / $img_height) * $img_width);
		}
		if($dst_height > $max_height) {
			$dst_height = $max_height;
			$dst_width = ceil(($max_height / $img_height) * $img_width);
		}  

		if($dst_width < $max_width) $srcx = ceil(($max_width - $dst_width)/2); else $srcx = 0;
		if($dst_height < $max_height) $srcy = ceil(($max_height - $dst_height)/2); else $srcy = 0;

		$dst_img = imagecreatetruecolor($max_width, $max_height);
		$bgc = ImageColorAllocate($dst_img, 255, 255, 255);
		ImageFilledRectangle($dst_img, 0, 0, $max_width, $max_height, $bgc); 
		ImageCopyResampled($dst_img, $src_img, $srcx, $srcy, 0, 0, $dst_width, $dst_height, ImageSX($src_img),ImageSY($src_img));

		ImageInterlace($dst_img);

		if($img_kind=="1") ImageGIF($dst_img, $save_filename, '100');
		elseif($img_kind=="2") ImageJPEG($dst_img, $save_filename, '100');
		elseif($img_kind=="3") ImagePNG($dst_img, $save_filename, '0');	 //0~9

		ImageDestroy($dst_img);
		chmod( $save_filename, 0777 );		
		ImageDestroy($src_img);
		
		return $upfile_name;

	} else {
		AlertBack('gif,jpg,png 이미지 파일이 아닙니다.\\ngif,jpg,png 이미지 파일만 등록하실 수 있습니다.');
	}
}

function imgUpMerge($upfile, $upfile_name, $pOldFile) { // 썸네일 이미지와 원본 이미지
	$ext_exp=explode(".",$upfile_name);
	$file_ext=strtolower($ext_exp[count($ext_exp)-1]);
	if(strlen($file_ext) <> 3 && strlen($file_ext) <> 4) {
		AlertBack('파일명이 확장자(3~4자)인지 확인하십시오.');
	}
	
	if(strpos("#|jpg|jpeg|gif|png|","|$file_ext|"))  {
		if($pOldFile) fileDelete($pOldFile);

		$rand=rand(1000,9999);
		$upfile_name=date("YmdHis")."-".$rand.".".$file_ext;	
		$upfile_thum=date("YmdHis")."-".$rand."-thum.".$file_ext;	
		$dirpath="../upfile/".date("Y")."/".date("m")."/";
		$save_filename=$dirpath.$upfile_thum;

		$img_info = getImageSize($upfile);
		$img_width = $img_info[0];
		$img_height = $img_info[1];
		$img_kind = $img_info[2]; //이미지종류: 1=gif, 2=jpg, 3=png

		if($img_kind=="1") $dst_img = ImageCreateFromGIF($upfile);
		elseif($img_kind=="2") $dst_img = ImageCreateFromJPEG($upfile);
		elseif($img_kind=="3") $dst_img = ImageCreateFromPNG($upfile);

		//회전여부 확인
		$exif = exif_read_data($upfile);
		if(!empty($exif['Orientation'])) {
			switch($exif['Orientation']) {
				case 8:
					$dst_img = imagerotate($src_img, 90, 0); //좌측 90도
					$img_width = $img_info[1];
					$img_height = $img_info[0];
					break;
				case 6:
					$dst_img= imagerotate($src_img, -90, 0);  //우측 90도
					$img_width = $img_info[1];
					$img_height = $img_info[0];
					break;
			}
		}


		$mark_img = ImageCreateFromPNG("../upfile/logo.png");
		$mark_info = getImageSize("../upfile/logo.png");
		$mark_width = $mark_info[0];
		$mark_height = $mark_info[1];

		$paddingX = ceil(($img_width - $mark_width) / 2);
		$paddingY =  ceil(($img_height - $mark_height) / 2);

		ImageCopyResampled($dst_img, $mark_img, $paddingX, $paddingY, 0, 0, $mark_width, $mark_height, ImageSX($mark_img),ImageSY($mark_img));

		ImageInterlace($dst_img);
		ImageJPEG($dst_img, $dirpath.$upfile_name, '100');
		chmod( $dirpath.$upfile_name, 0777 );

		//썸네일 하나 만들기
		$pMaxSize = 300;	
		$max_width=$pMaxSize;

		$dst_width = $max_width;
		$dst_height = ceil(($max_width / $img_width) * $img_height);

		//빈공간 없애기
		$max_width=$dst_width;
		$max_height=$dst_height;		

		$src_img = ImageCreateFromJPEG($dirpath.$upfile_name);

		$dst_img = imagecreatetruecolor($max_width, $max_height);
		$bgc = ImageColorAllocate($dst_img, 255, 255, 255);
		ImageFilledRectangle($dst_img, 0, 0, $max_width, $max_height, $bgc); 
		ImageCopyResampled($dst_img, $src_img, 0, 0, 0, 0, $dst_width, $dst_height, ImageSX($src_img),ImageSY($src_img));

		ImageInterlace($dst_img);

		if($img_kind=="1") ImageGIF($dst_img, $save_filename, '100');
		elseif($img_kind=="2") ImageJPEG($dst_img, $save_filename, '100');
		elseif($img_kind=="3") ImagePNG($dst_img, $save_filename, '0');	 //0~9


		ImageDestroy($dst_img);
		chmod( $save_filename, 0777 );		
		ImageDestroy($src_img);

		
		return $upfile_name;

	} else {
		AlertBack('gif,jpg,png 이미지 파일이 아닙니다.\\ngif,jpg,png 이미지 파일만 등록하실 수 있습니다.');
	}
}

//----------- 알트창
function AlertLogin() {
	echo "
		<script language='javascript' type='text/javascript'>
			alert('회원전용 공간입니다.\\n먼저 로그인 하시기 바랍니다.');
			location.href='../user/login.php';
		</script>
	";
	exit;
}

function AlertBack($pMsg) {
	echo "
		<script language='javascript' type='text/javascript'>
			alert('$pMsg');
			history.back();
		</script>
	";
	exit;
}
function AlertHref($pMsg,$pHref) {
	echo "
		<script language='javascript' type='text/javascript'>
			alert('$pMsg');
			location.href='$pHref';
		</script>
	";
	exit;
}
function AlertClose($pMsg) {
	echo "
		<script language='javascript' type='text/javascript'>
			alert('$pMsg');
			self.close();
		</script>
	";
	exit;
}
function openerClose() {
	echo "
		<script language='javascript' type='text/javascript'>
			opener.location.reload();
			self.close();
		</script>
	";
	exit;
}
function AlertTop($pMsg,$pHref) {
	echo "
		<form name='alert_top' action='$pHref' method='post'></form>
		<script language='javascript' type='text/javascript'>
			alert('$pMsg');
			document.alert_top.target='_top';
			document.alert_top.submit();
		</script>
	";
	exit;
}
?>
