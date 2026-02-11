<?php 
function SelectAll($pName, $pMode, $pKind) {
	switch($pKind)  {
		case "sns_kind":
				$pMsg="
					<option value='0'>일반</option>
					<option value='1'>카카오</option>
					<option value='2'>네이버</option>
				";
			break;

	}

	if($pMode=="") {
		if(strlen($pName)>0) $pMsg=str_replace("value='".$pName."'","value='".$pName."' selected",$pMsg);
	}else{
		if(strlen($pName)>0) {
			$pMsg=str_replace("  selected","",$pMsg);
			$pMsg=str_replace("'".$pName."'>","",strchr($pMsg, "'".$pName."'"));
			$pMsg=substr($pMsg,0,strpos($pMsg, "</option>"));

			$pMsg=str_replace("신청","<font color='blue'>신청</font>",$pMsg);
			$pMsg=str_replace("거래종료","<font color='red'>거래종료</font>",$pMsg);
		}else $pMsg="";
	}
	
	return $pMsg; 
}


function RadioAll($pName, $pMode, $pKind) {
	switch($pKind)  {
		case "children_sex":
				$pMsg="
					  <label><input type='radio' name='children_sex' value='1' /> 남자</label>
					  <label><input type='radio' name='children_sex' value='2' /> 여자</label>
				";
			break;
	}


	if($pMode=="") {
		if(strlen($pName)>0) $pMsg=str_replace("value='".$pName."'","value='".$pName."' checked='checked'",$pMsg);
	}else{
		if(strlen($pName)>0)  {
			$pMsg=$pMsg."<input";
			$pMsg=str_replace("'".$pName."' /> ","",strchr($pMsg, "'".$pName."'"));
			$pMsg=substr($pMsg,0,strpos($pMsg, "<input"));
			$pMsg=str_replace("\n","",str_replace("\t","",$pMsg));

			$pMsg=str_replace("거래종료","<font color='red'>거래종료</font>",$pMsg);
		}else $pMsg="";
	}

	return $pMsg; 
}

function CheckboxAll($pName, $pMode, $pKind) {
	switch($pKind)  {
		case "children_sex":
			$pMsg="
				<label><input type='checkbox' name='cate[]' value='1' /> 메이크업</label>
				<label><input type='checkbox' name='cate[]' value='2' /> 헤어</label>
				<label><input type='checkbox' name='cate[]' value='3' /> 네일</label>
			";
			break;
	}

	if($pMode=="") {
		if(strlen($pName)>0) {
			$pInSeqCnt=explode(",",$pName);
			for($ipIn=0; $ipIn<count($pInSeqCnt); $ipIn++) {
				$pName=$pInSeqCnt[$ipIn];
				$pMsg=str_replace("value='".$pName."'","value='".$pName."' checked='checked'",$pMsg);
			}
		}	
	}else{
		if(strlen($pName)>0) {
			$pInSeqCnt=explode(",",$pName);
			for($ipIn=0; $ipIn<count($pInSeqCnt); $ipIn++) {
				$pName=$pInSeqCnt[$ipIn];

				$pMsg2=$pMsg."<input";
				$pMsg2=str_replace("'".$pName."' /> ","",strchr($pMsg2, "'".$pName."'"));
				$pMsg2=substr($pMsg2,0,strpos($pMsg2, "<input"));

				$pMsg3.=$pMsg2.",";
			}
			$pMsg=substr($pMsg3,0,-1);

		}else $pMsg="";
	}

	return $pMsg; 
}

//================= 관리자

function MasterKind($pName,$pMode) {
	$pMsg="
		<option value='8'>일반관리자</option>
		<option value='9'>슈퍼관리자</option>
	";

	if($pMode=="") {
		if(strlen($pName)>0) $pMsg=str_replace("value='".$pName."'","value='".$pName."' selected",$pMsg);
	}else{
		if(strlen($pName)>0) {
			$pMsg=str_replace("  selected","",$pMsg);
			$pMsg=str_replace("'".$pName."'>","",strchr($pMsg, "'".$pName."'"));
			$pMsg=substr($pMsg,0,strpos($pMsg, "</option>"));
		}else $pMsg="";
	}
	
	return $pMsg; 
}

function CommStatus($pName, $pMode) {
	$pMsg="
		<option value='1'>준비</option>
		<option value='2'>진행중</option>
		<option value='3'>종료</option>
	";

	if($pMode=="") {
		if(strlen($pName)>0) $pMsg=str_replace("value='".$pName."'","value='".$pName."' selected",$pMsg);
	}else{
		if(strlen($pName)>0) {
			$pMsg=str_replace("  selected","",$pMsg);
			$pMsg=str_replace("'".$pName."'>","",strchr($pMsg, "'".$pName."'"));
			$pMsg=substr($pMsg,0,strpos($pMsg, "</option>"));
		}else $pMsg="";
	}
	
	return $pMsg; 
}

function PopupPlace($pName, $pMode) {
	$pMsg="
		  <label><input type='radio' name='place' value='0' /> PC</label>
		  <label><input type='radio' name='place' value='1' /> Mobile</label>
	";

	if($pMode=="") {
		if(strlen($pName)>0) $pMsg=str_replace("value='".$pName."'","value='".$pName."' checked='checked'",$pMsg);
	}else{
		if(strlen($pName)>0)  {
			$pMsg=$pMsg."<input";
			$pMsg=str_replace("'".$pName."' /> ","",strchr($pMsg, "'".$pName."'"));
			$pMsg=substr($pMsg,0,strpos($pMsg, "<input"));
			$pMsg=str_replace("\n","",str_replace("\t","",$pMsg));
		}else $pMsg="";
	}

	return $pMsg; 
}

function PopupMove($pName, $pMode) {
	$pMsg="
		  <label><input type='radio' name='move' value='0' /> 고정</label>
		  <label><input type='radio' name='move' value='1' /> 이동</label>
	";

	if($pMode=="") {
		if(strlen($pName)>0)  $pMsg=str_replace("value='".$pName."'","value='".$pName."' checked='checked'",$pMsg);
	}else{
		if(strlen($pName)>0)  {
			$pMsg=$pMsg."<input";
			$pMsg=str_replace("'".$pName."' /> ","",strchr($pMsg, "'".$pName."'"));
			$pMsg=substr($pMsg,0,strpos($pMsg, "<input"));
			$pMsg=str_replace("\n","",str_replace("\t","",$pMsg));
		}else $pMsg="";
	}

	return $pMsg; 
}

function DateYYMsg($pName, $pStrY, $pEndY) {
	for($iYY=intval($pStrY); $iYY>=intval($pEndY); $iYY--) {
		$pMsg.="<option value='$iYY'>$iYY</option>";
	}

	if(strlen($pName)>0) $pMsg=str_replace("value='".$pName."'","value='".$pName."' selected",$pMsg);
	
	return $pMsg; 
}

?>
