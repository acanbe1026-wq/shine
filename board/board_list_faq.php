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
?>
                
                    <li>
                        <a href="#" class="q">
                            <span class="num"><?=$RowNo?></span>
                            <h4><span class="mark">Q</span><?=$PageLs->mData[$i]["subject"]?></h4>
                        </a>
                        <div class="a">
                            <span class="mark">A</span>
                            <?=$PageLs->mData[$i]["content"]?>
                        </div>
                    </li>

<?php 
		$pTotal = $pTotal - 1;			//번호 desc
	}
}
?>
                </ul>

				<div class="pagination"><?php  if(count($PageLs->mData)) $PageLs->PageList($pPageLink); ?></div>