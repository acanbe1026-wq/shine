<?php
// default redirection
$url = $_REQUEST["callback"].'?callback_func='.$_REQUEST["callback_func"];
$bSuccessUpload = is_uploaded_file($_FILES['Filedata']['tmp_name']);

// SUCCESSFUL
if($bSuccessUpload) {
	$tmp_name = $_FILES['Filedata']['tmp_name'];
	$name = $_FILES['Filedata']['name'];
	
	$filename_ext = strtolower(array_pop(explode('.',$name)));
	$allow_file = array("jpg", "png", "bmp", "gif");
	
	if(!in_array($filename_ext, $allow_file)) {
		$url .= '&errstr='.$name;
	} else {

		$uploadDir = '../../../upfile/'.date("Y")."/";
		if(!is_dir($uploadDir)){
			mkdir($uploadDir, 0777);
			chmod($uploadDir, 0777 );
		}
		
		$uploadDir = '../../../upfile/'.date("Y")."/".date("m")."/";
		if(!is_dir($uploadDir)){
			mkdir($uploadDir, 0777);
			chmod($uploadDir, 0777 );
		}
		$uploadDirFile = '/upfile/'.date("Y")."/".date("m")."/";

		$rand=rand(1000,9999);
		$replace_name = date("YmdHis")."-".$rand.".".$filename_ext;

		$newPath = $uploadDir.iconv("utf-8", "cp949", $replace_name);
		//$newPath = $uploadDir.$file->name;
		
		@move_uploaded_file($tmp_name, $newPath);
		
		chmod( $newPath, 0777 );

		$url .= "&bNewLine=true";
		$url .= "&sFileName=".$replace_name;
		$url .= "&sFileURL=".$uploadDirFile.$replace_name;

	}
}
// FAILED
else {
	$url .= '&errstr=error';
}
	
header('Location: '. $url);
?>