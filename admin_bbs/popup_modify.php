<?php 
if($seq!="" && $seq!="0") {
	$gDBSelect = new SelectSql("popup");
	//======================== DB Module Start ============================
	$gConn = new DBConn();
	$Result = $gDBSelect->SelectWithSeq ( $seq, $gConn->mConn );
	$gConn->DisConnect();
	//======================== DB Module End ===============================
}else{
	$Result[0]["place"]="0";
	$Result[0]["loc_x"]="0";
	$Result[0]["loc_y"]="0";
}
?>
<div class="conts_view_view">				
<form name="formWrite" id="formWrite" action="../admin_bbs/popup_modify_exec.php" method="post" enctype="MULTIPART/FORM-DATA">

				<table class="table_02">
					<colgroup>
						<col style="width:200px;" />
						<col />
						<col style="width:200px;" />
						<col style="width:300px;" />
					</colgroup>
                    <tr>
                        <th>제목<span class="sup">*</span></th>
                        <td><input type="text" name="subject" value="<?=strHtml($Result[0]["subject"])?>" title="제목"></td>
                        <th>종류<span class="sup">*</span></th>
                        <td><?=PopupPlace(intval($Result[0]["place"]),"") ?></td>
                    </tr>
                    <tr>
                        <th>링크주소</th>
                        <td>
							http://<input type="text" name="url" value="<?=strHtml($Result[0]["url"])?>" title="링크주소" class="wth800">
							<input type="checkbox" name="url_target" value="1" title="링크타켓" <?php if($Result[0]["url_target"]) echo "checked"; ?> /> 새창	
						</td>
                        <th>팝업스크롤<span class="sup">*</span></th>
                        <td><?=PopupMove(intval($Result[0]["move"]),"") ?></td>
                    </tr>
                    <tr>
                        <th>표시기간</th>
                        <td><?php  include "../admaster_class/calendar_inc_input.php"; ?></td>
                        <th>팝업위치</th>
                        <td >
							좌측 : <input type="text" name="loc_x" value="<?=strHtml($Result[0]["loc_x"])?>" title="좌측위치" maxlength="3" class="wth40 numberOnly" />
							<span class="space20"></span>
							상단 : <input type="text" name="loc_y" value="<?=strHtml($Result[0]["loc_y"])?>" title="상단위치" maxlength="3" class="wth40 numberOnly" />							
						</td>
                    </tr>

                    <tr>
                        <th>내용<span class="sup">*</span></th>
                        <td colspan="3"><textarea name="content" id="content" title="내용" class="smarteditor"><?=$Result[0]["content"]?></textarea></td>
                    </tr>
                </table>

<?=$pSubmitHidden?>
</form>
</div>

                <div class="btn_box_r">
					<button type="button" onclick="javascript:formInputComm('');" class="btn bg_blue">저장</button>
                    <a href="<?=$pCommLink?>" class="btn bg_gray">목록</a>
                </div>

<?php  include "../smarteditor/smarteditor_inc.php" ?>
