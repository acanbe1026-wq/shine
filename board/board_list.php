<?php 
if(!$page) $page=1;
$pWhere=" where code='$code'";

$gDBSelect = new SelectSql("board");
//======================== DB Module Start ============================
$gConn = new DBConn();
$PageLs = $gDBSelect->PageLs ( $pWhere, $searchkey, $searchvalue, $page, $gConn->mConn );
$gConn->DisConnect();
//======================== DB Module End ===============================
?>
                <div class="list_hd">
                    <p>총 <?=$PageLs->mListAll?>건</p>
                </div>

                <ul class="list_01">
<?php 
if(count($PageLs->mData)) {
	$pTotal = $PageLs->mListAll - $PageLs->mSizePage * ($PageLs->mCurrPage - 1);
	for($i=0; $i<count($PageLs->mData); $i++) {
		$RowNo = $pTotal;		//번호 desc
		
		$RowMsg="";
		if($PageLs->mData[$i]["place"]) {
			$RowMsg="[공지] ";
		}

		$pFileIcon="";
		if($PageLs->mData[$i]["filename"] || $PageLs->mData[$i]["filename2"] || $PageLs->mData[$i]["filename3"]) $pFileIcon="<img src='../images/clip.png' alt='첨부파일' />";

?>
                    <li>
                        <a href="<?=$pCommLink?>&mode=read&seq=<?=$PageLs->mData[$i]["seq"]?>">
                            <span class="num"><?=$RowNo?></span>
                            <h4><?=$PageLs->mData[$i]["subject"]?></h4>
                            <div class="info">
                                <span><?=substr($PageLs->mData[$i]["reg_date"],0,20)?></span>
                                <span><?=$PageLs->mData[$i]["read_cnt"]?></span>
                            </div>
                        </a>
                    </li>
<?php 
		$pTotal = $pTotal - 1;			//번호 desc
	}
}
?>
                </ul>

				<div class="pagination"><?php  if(count($PageLs->mData)) $PageLs->PageList($pPageLink); ?></div>

