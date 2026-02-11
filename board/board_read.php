<?php 
$gDBSelect = new SelectSql("board");
//======================== DB Module Start ============================
$gConn = new DBConn();
$Result = $gDBSelect->SelectWithSeq ( $seq, $gConn->mConn );
if($Result[0]["seq"]) {
	$gDBSelect->UpdateSetReadCnt( $seq, $gConn->mConn ) ;
	$Result[0]["read_cnt"]++;

	$pWhere=" where code='$code'";
	$ResultNextPre = $gDBSelect->BoardNextPre ( $pWhere, $searchkey, $searchvalue, $Result[0]["reg_date"], $Result[0]["place"], $gConn->mConn );
}
$gConn->DisConnect();
//======================== DB Module End ===============================

?>
                <div class="view_header">
                    <h4><?=$Result[0]["subject"]?></h4>
                    <ul class="view_info">
                        <li><?=substr($Result[0]["reg_date"],0,20)?></li> 
                        <li><?=$Result[0]["read_cnt"]?></li> 
                    </ul>
                </div>
                <div class="view_conts">                    
                    <?=$Result[0]["content"]?>                    
                </div>

					<?php if($Result[0]["filename"]) FileDownViewSite($Result[0]["filename"],$Result[0]["filenm"]);?>
					<?php if($Result[0]["filename2"]) FileDownViewSite($Result[0]["filename2"],$Result[0]["filenm2"]);?>
					<?php if($Result[0]["filename3"]) FileDownViewSite($Result[0]["filename3"],$Result[0]["filenm3"]);?>

                <div class="btn_box_r">
                    <a href="<?=$pCommLink?>" class="btn">목록</a>
                </div>