<?php 
class SelectSql
{
	function __construct($pTableName) {
		$this->mTableName = "sin_".$pTableName;

		$this->mOrderBy = "seq desc";

		if($pTableName=="board" || $pTableName=="bbs") $this->mOrderBy = "place desc, reg_date desc"; //관리자게시판 board
		elseif($pTableName=="staff") $this->mOrderBy = "reg_date asc, seq asc "; //
	}

	function PageLs ($pWhere, $pSearchKey, $pSearchValue, $pPage, $pDB) {
		if($pWhere) $mWhere = $pWhere;
		if($pSearchValue!="") {
		   if($mWhere) $mWhere.= " and";
		   else $mWhere.= " where";
			switch($pSearchKey)
			{
				case 1:
				$mWhere.=" subject like '%$pSearchValue%'";
				break;
				case 2:
				$mWhere.=" content like '%$pSearchValue%'";
				break;
				case 3:
				$mWhere.=" mem_name like '%$pSearchValue%'";
				break;				
				case 4:
				$mWhere.=" mem_seq like '%$pSearchValue%'";
				break;	
				case 9:
				$mWhere.=" (subject like '%$pSearchValue%' or content like '%$pSearchValue%')";
				break;

				case 41:
				$mWhere.=" name like '%$pSearchValue%'";
				break;
				case 42:
				$mWhere.=" id like '%$pSearchValue%'";
				break;
				case 43:
				$mWhere.=" email like '%$pSearchValue%'";
				break;
				case 44:
				$mWhere.=" cell like '%$pSearchValue%'";
				break;
				case 45:
				$mWhere.=" busi_name like '%$pSearchValue%'";
				break;
				case 46:
				$mWhere.=" busi_ceo like '%$pSearchValue%'";
				break;

				case 51: //관리자
				$mWhere.=" master_name like '%$pSearchValue%'";
				break;

				case 91: 
				$mWhere.=" mem_seq IN (select seq from bio_member where name like '%$pSearchValue%')";
				break;

			}
		}
		global $mOrderByNew;
		if($mOrderByNew!="") $this->mOrderBy=$mOrderByNew;

		$Sql = "select count(*) from ".$this->mTableName." ".$mWhere;
		$CountAll =$pDB->query($Sql)->fetchColumn();

		$ResultPage = new PageOut($CountAll, $pPage);

		$Sql = "select * from ".$this->mTableName." ".$mWhere." order by ".$this->mOrderBy." limit $ResultPage->mLimitStart, $ResultPage->mSizePage";

		$result = $pDB->query($Sql);
		$LsResult = $result->fetchAll(PDO::FETCH_ASSOC);
		$result = null;

		$ResultPage->mData = $LsResult;
		return $ResultPage;
	}

	function AllLs ($pWhere, $pLimit, $pDB) {
		global $mOrderByNew;
		if($mOrderByNew!="") $this->mOrderBy=$mOrderByNew;

		$ResultPage = new PageOut(0,0);

		$Sql = "select * from ".$this->mTableName." ".$pWhere." order by ".$this->mOrderBy."";
		if($pLimit) $Sql.= " limit 0, $pLimit";

		$result = $pDB->query($Sql);
		$LsResult = $result->fetchAll(PDO::FETCH_ASSOC);
		$result = null;

		$ResultPage->mData = $LsResult;
		return $ResultPage;
	}

	function SelectWithSeq ($pSeq, $pDB) {
		$Sql = "select * from ".$this->mTableName." where seq = '$pSeq'";

		$result = $pDB->query($Sql);
		$LsResult = $result->fetchAll(PDO::FETCH_ASSOC);
		$result = null;

		return $LsResult;
	}

	function SelectWithEmail ($pEmail, $pPasswd, $pDB) {
		$Sql = "select * ";
		if($pPasswd!="") $Sql.= " , SHA2('".$pPasswd."',256) AS passwdChk";
		$Sql.= " from ".$this->mTableName." where email = '$pEmail'";

		$result = $pDB->query($Sql);
		$LsResult = $result->fetchAll(PDO::FETCH_ASSOC);
		$result = null;

		return $LsResult;
	}

	function SelectWithId ($pId, $pPasswd, $pDB) {
		$Sql = "select * ";
		if($pPasswd!="") $Sql.= " , SHA2('".$pPasswd."',256) AS passwdChk";
		$Sql.= " from ".$this->mTableName." where id = '$pId'";

		$result = $pDB->query($Sql);
		$LsResult = $result->fetchAll(PDO::FETCH_ASSOC);
		$result = null;

		return $LsResult;
	}

	function SelectWithWhere ($pWhere, $pDB) {
		$Sql = "select * from ".$this->mTableName." ".$pWhere;

		$result = $pDB->query($Sql);
		$LsResult = $result->fetchAll(PDO::FETCH_ASSOC);
		$result = null;

		return $LsResult;
	}

//============== 이전글 다음글 함수 ================================

	function BoardNextPre ($pWhere, $pSearchKey, $pSearchValue, $pDate, $pPlace, $pDB) {
		if($pWhere) $mWhere = $pWhere;
		if($pSearchValue!="") {
			if($mWhere) $mWhere.= " and";
			else $mWhere.= "where";
			switch($pSearchKey)
			{
				case 1:
				$mWhere.=" subject like '%$pSearchValue%'";
				break;
				case 2:
				$mWhere.=" content like '%$pSearchValue%'";
				break;
				case 9:
				$mWhere.=" (subject like '%$pSearchValue%' or content like '%$pSearchValue%')";
				break;
			}
		}
		if($mWhere) $mWhere = $mWhere." and";

		// 이전글
		$nWhere = " $mWhere (( place = $pPlace and reg_date > '$pDate') or place > $pPlace)";
		$Sql = "select * from ".$this->mTableName." ".$nWhere." order by place, reg_date asc limit 1";
		foreach($pDB->query($Sql) as $Result) { $LsResult[0] = $Result; }

		//다음글
		$nWhere = " $mWhere (( place = $pPlace and reg_date < '$pDate') or place < $pPlace)";
		$Sql = "select * from ".$this->mTableName." ".$nWhere." order by place desc, reg_date desc limit 1";
		foreach($pDB->query($Sql) as $Result) { $LsResult[1] = $Result; }

		return $LsResult;
     }



//============== 공통처리 함수 ================================

	function UpdateSetReadCnt($pSeq, $pDB) {
		$Sql = "update ".$this->mTableName." set read_cnt=read_cnt+1 where seq = '$pSeq'";
		$result = $pDB->exec($Sql);
    }

} // end class
?>
