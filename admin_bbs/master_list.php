<?php 
$gDBSelect = new SelectSql("master");
//======================== DB Module Start ============================
$gConn = new DBConn();
$PageLs = $gDBSelect->AllLs ( $pWhere, "", $gConn->mConn );
$gConn->DisConnect();
//======================== DB Module End ===============================
?>

<div class="conts_view_list view_nosearch">
				<table class="table_01">
					<colgroup>
						<col style="width:100px;" />
						<col />
						<col />
						<col />
						<col style="width:100px;" />
						<col style="width:100px;" />
					</colgroup>
                    <tr>
						<th>No</th>

						<th>아이디</th>
						<th>관리자명</th>
						<th>관리자권한</th>

						<th>수정</th>
						<th>삭제</th>
                    </tr>
<?php 
if(count($PageLs->mData)) {
	$pTotal = count($PageLs->mData);
	for($i=0; $i<count($PageLs->mData); $i++) {
		$RowNo = $pTotal;		//번호 desc
?>
	<tr onclick="location.href='<?=$pCommLink?>&mode=modify&seq=<?=$PageLs->mData[$i]["seq"]?>'" style="cursor: pointer;">
		<td><?=$RowNo?></td>
		<td><?=$PageLs->mData[$i]["id"]?></td>
		<td><?=$PageLs->mData[$i]["name"]?></td>
		<td><?=MasterKind($PageLs->mData[$i]["kind"],"v") ?></td>
		<td onclick="event.cancelBubble=true"><a href="<?=$pCommLink?>&mode=modify&seq=<?=$PageLs->mData[$i]["seq"]?>" class="btn bg_black">수정</a></td>
		<td onclick="event.cancelBubble=true"><a href="javascript:deleteConfirm('../admin_bbs/master_delete_exec.php<?=$pExecLink?>&seq=<?=$PageLs->mData[$i]["seq"]?>');" class="btn bg_gray">삭제</a></td>
	</tr>
<?php 
		$pTotal = $pTotal - 1;			//번호 desc
	}
}
?>
				</table>		
				<?php if(count($PageLs->mData)==0) echo $pNoDataMsg; ?>

</div>

                <div class="btn_box_r">
					<a href="<?=$pCommLink?>&mode=modify" class="btn bg_blue">등록</a>
                </div>
