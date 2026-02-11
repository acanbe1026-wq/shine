<?php 
class ExecSql
{
	function __construct($pTableName)
	{
		$this->mTableName = "sin_".$pTableName;
	}

//=== 게시판 관리자
	function Board_Insert($pDB) {
		$Sql = "insert into sin_board";
		$Sql.= " values ('0";
		$Sql.= "','".$this->data["code"];
		$Sql.= "','".$this->data["subject"];
		$Sql.= "','".$this->data["content"];
		$Sql.= "','".intval($this->data["read_cnt"]);
		$Sql.= "','".$this->data["filename"];
		$Sql.= "','".$this->data["filenm"];
		$Sql.= "','".$this->data["filename2"];
		$Sql.= "','".$this->data["filenm2"];
		$Sql.= "','".$this->data["filename3"];
		$Sql.= "','".$this->data["filenm3"];
		$Sql.= "','".$this->data["filename9"];
		$Sql.= "','".intval($this->data["place"]);
		$Sql.= "','".$this->data["reg_date"];
		$Sql.= "')";

		$result = $pDB->exec($Sql);
		$this->mSeq = $pDB->lastInsertId();
    }

	function Board_Update($pDB) {
		$Sql = "update sin_board set ";
		$Sql.= " subject	='".$this->data["subject"]."'";
		$Sql.= ", content	='".$this->data["content"]."'";
		$Sql.= ", filename	='".$this->data["filename"]."'";
		$Sql.= ", filenm	='".$this->data["filenm"]."'";
		$Sql.= ", filename2='".$this->data["filename2"]."'";
		$Sql.= ", filenm2	='".$this->data["filenm2"]."'";
		$Sql.= ", filename3='".$this->data["filename3"]."'";
		$Sql.= ", filenm3	='".$this->data["filenm3"]."'";
		$Sql.= ", filename9='".$this->data["filename9"]."'";
		$Sql.= ", place		='".intval($this->data["place"])."'";
		$Sql.= ", reg_date	='".$this->data["reg_date"]."'";
		
		$Sql.= " where seq = '".$this->data["seq"]."'";
		$result = $pDB->exec($Sql);
    }

//=== 관리자
	function Master_Insert($pDB) {
		$Sql = "insert into sin_master";
		$Sql.= " values ('0";
		$Sql.= "','".$this->data["id"];
		$Sql.= "',SHA2('".$this->data["passwd"]."',256)";
		$Sql.= ",'".$this->data["name"];
		$Sql.= "','".intval($this->data["kind"]);
		$Sql.= "')";

		$result = $pDB->exec($Sql);
		$this->mSeq = $pDB->lastInsertId();
	}

	function Master_Update($pDB) {
		$Sql = "update sin_master set ";
		$Sql.= " id='".$this->data["id"]."'";
		$Sql.= ", name='".$this->data["name"]."'";
		$Sql.= ", kind='".intval($this->data["kind"])."'";
		if($this->data["passwd"]!="") $Sql.= ", passwd=SHA2('".$this->data["passwd"]."',256)";

		$Sql.= " where seq = '".$this->data["seq"]."'";
		$result = $pDB->exec($Sql);
	}

//=== 팝업
	function Popup_Insert($pDB) {
		$Sql = "insert into sin_popup";
		$Sql.= " values ('0";
		$Sql.= "','".$this->data["str_date"];
		$Sql.= "','".$this->data["end_date"];
		$Sql.= "','".intval($this->data["loc_x"]);
		$Sql.= "','".intval($this->data["loc_y"]);
		$Sql.= "','".$this->data["url"];
		$Sql.= "','".intval($this->data["url_target"]);
		$Sql.= "','".$this->data["content"];
		$Sql.= "','".$this->data["subject"];
		$Sql.= "','".intval($this->data["place"]);
		$Sql.= "','".intval($this->data["move"]);
		$Sql.= "',now())";

		$result = $pDB->exec($Sql);
		$this->mSeq = $pDB->lastInsertId();
	}

	function Popup_Update($pDB) {
		$Sql = "update sin_popup set ";
		$Sql.= " str_date	='".$this->data["str_date"]."'";
		$Sql.= ", end_date ='".$this->data["end_date"]."'";
		$Sql.= ", loc_x ='".intval($this->data["loc_x"])."'";
		$Sql.= ", loc_y ='".intval($this->data["loc_y"])."'";
		$Sql.= ", url ='".$this->data["url"]."'";
		$Sql.= ", url_target ='".intval($this->data["url_target"])."'";
		$Sql.= ", content ='".$this->data["content"]."'";
		$Sql.= ", subject ='".$this->data["subject"]."'";
		$Sql.= ", place ='".intval($this->data["place"])."'";
		$Sql.= ", move ='".intval($this->data["move"])."'";
		$Sql.= " where seq = '".$this->data["seq"]."'";
		$result = $pDB->exec($Sql);
    }


//============== 공통사용 함수 ================================

	function IdChk ($pDB) {
		$Sql = "select count(*) from ".$this->mTableName." where id = '".$this->data["id"]."'";
		$CountAll =$pDB->query($Sql)->fetchColumn();

		return $CountAll;
	}


	function Delete($pSeq, $pDB) {
		$Sql = "delete from ".$this->mTableName." where seq = '$pSeq'";
		$result = $pDB->exec($Sql);
	}

	function DeleteTop($pSeq, $pDB) {
		$Sql = "delete from ".$this->mTableName." where (seq = '$pSeq' or top_seq = '$pSeq')";
        $result = $pDB->exec($Sql);

		$Sql = "delete from ".$this->mTableName."_com where top_seq = '$pSeq'";
        $result = $pDB->exec($Sql);
    }

	function Comm_Insert($pSqlMsg, $pDB) {
		if($pSqlMsg!="") $result = $pDB->exec($pSqlMsg);
	}

} // end class
?>
