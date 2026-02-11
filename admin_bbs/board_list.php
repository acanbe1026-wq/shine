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

<form name="writer" action="<?=$pHtmlLink?>" method="post">
				<div class="top_s_box">
                    <div class="search_wrap">

						<span class="space20"></span>


						<select name="searchkey" title="검색어">
							<option value="9"<?php if($searchkey=="9") echo "selected";?>>제목+내용</option>
							<option value="1"<?php if($searchkey=="1") echo "selected";?>>제 목</option>
							<option value="2"<?php if($searchkey=="2") echo "selected";?>>내 용</option>
						</select>
						<label><input type="text" name="searchvalue" value="<?=$searchvalue?>" /></label>
                    </div>

                    <div class="btn_box_r">
                        <button type="button" onclick="javascript:location.href='<?=$pHtmlLink?>';" class="btn bg_gray">초기화</button>
                        <button type="button" onclick="javascript:document.writer.submit();" class="btn bg_blue">검색</button>
                    </div>
                    
                </div>
<input type="hidden" name="page" value="" id="pageID" />
</form>

<div class="conts_view_list">
				<table class="table_01">
					<colgroup>
						<col style="width:100px;" />
						<col />
						<col style="width:100px;" />
						<col style="width:100px;" />

						<col style="width:200px;" />
						<col style="width:100px;" />
						<col style="width:100px;" />
					</colgroup>
                    <tr>
						<th>No</th>
						<th>제목</th>
						<th>첨부파일</th>
						<th>조회수</th>
						<th>등록일</th>
						<th>수정</th>
						<th>삭제</th>
					</tr>
<?php 
if(count($PageLs->mData)) {
	$pTotal = $PageLs->mListAll - $PageLs->mSizePage * ($PageLs->mCurrPage - 1);
	for($i=0; $i<count($PageLs->mData); $i++) {
		$RowNo = $pTotal;		//번호 desc

		if($PageLs->mData[$i]["place"]) $RowNo="<b>공지</b>";

		$pFileIcon="";
		if($PageLs->mData[$i]["filename"] || $PageLs->mData[$i]["filename2"] || $PageLs->mData[$i]["filename3"]) $pFileIcon="<img src='./images/icon_clip.png' alt='첨부파일' />";

?>
	<tr onclick="location.href='<?=$pCommLink?>&mode=read&seq=<?=$PageLs->mData[$i]["seq"]?>'" style="cursor: pointer;">
		<td><?=$RowNo?></td>
		<td class="t_left"><?=$PageLs->mData[$i]["subject"]?></td>
		<td><?=$pFileIcon?></td>
		<td><?=Number_Format($PageLs->mData[$i]["read_cnt"])?></td>
		<td><?=$PageLs->mData[$i]["reg_date"]?></td>
		<td onclick="event.cancelBubble=true"><a href="<?=$pCommLink?>&mode=modify&seq=<?=$PageLs->mData[$i]["seq"]?>" class="btn bg_black">수정</a></td>
		<td onclick="event.cancelBubble=true"><a href="javascript:deleteConfirm('../admin_bbs/board_delete_exec.php<?=$pExecLink?>&seq=<?=$PageLs->mData[$i]["seq"]?>');" class="btn bg_gray">삭제</a></td>
	</tr>
<?php 
		$pTotal = $pTotal - 1;			//번호 desc
	}
}
?>
				</table>					
				<?php if(count($PageLs->mData)==0) echo $pNoDataMsg; ?>

</div>

				<div class="pagination"><?php  if(count($PageLs->mData)) $PageLs->AdminPageList($pPageLink); ?></div>

                <div class="btn_box_r">
					<a href="<?=$pCommLink?>&mode=modify" class="btn bg_blue">등록</a>
                </div>
