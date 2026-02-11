<?php 
if($seq!="" && $seq!="0") {
	$gDBSelect = new SelectSql("board");
	//======================== DB Module Start ============================
	$gConn = new DBConn();
	$Result = $gDBSelect->SelectWithSeq ( $seq, $gConn->mConn );
	$gConn->DisConnect();
	//======================== DB Module End ===============================
}
?>

<div class="conts_view_view">				
<form name="formWrite" id="formWrite" action="../admin_bbs/board_modify_exec.php" method="post" enctype="MULTIPART/FORM-DATA">

				<table class="table_02">
					<colgroup>
						<col style="width:200px;" />
						<col />
						<col style="width:200px;" />
						<col />
					</colgroup>
                    <tr>
                        <th>공지</th>
                        <td><input type="checkbox" name="place" value="1" title="공지" <?php if($Result[0]["place"]) echo "checked";?> /> 상단에 위치</td>
                        <th>등록일자<span class="sup">*</span></th>
                        <td><?php  include "../admaster_class/calendar_inc_regdate.php"; ?></td>
                    </tr>
                    <tr>
                        <th>제목<span class="sup">*</span></th>
                        <td colspan="3"><input type="text" name="subject" value="<?=strHtml($Result[0]["subject"])?>" title="제목"></td>
                    </tr>
                    <tr>
                        <th>첨부파일</th>
                        <td>
                            <input type="file" name="upfile1" title="파일" class="file_img_nn">
							<?php if($Result[0]["filename"]) fileDeleteChk($Result[0]["filenm"],'1');?>
                        </td>
<?php if($code=="s") {?>
                        <th rowspan="3" class="row">리스트 이미지<span class="sup">*</span> <?=$pImgSize1?></th>
                        <td rowspan="3" class="row">
                            <input type="file" name="upfile9" title="리스트이미지" class="file_img">
							<div class="preview_img"><?=imgViewSize($Result[0]["filename9"],"")?></div>
							<?php if($Result[0]["filename9"]) fileDeleteChk($Result[0]["filename9"],'9');?>
                        </td>
<?php }else{?>
                        <th rowspan="3" class="row"></th>
                        <td rowspan="3" class="row"></td>
<?php  }?>
                    </tr>
                    <tr>
                        <th>첨부파일</th>
                        <td colspan="3">
                            <input type="file" name="upfile2" title="파일" class="file_img_nn">
							<?php if($Result[0]["filename2"]) fileDeleteChk($Result[0]["filenm2"],'2');?>
                        </td>
                    </tr>
                    <tr>
                        <th>첨부파일</th>
                        <td colspan="3">
                            <input type="file" name="upfile3" title="파일" class="file_img_nn">
							<?php if($Result[0]["filename3"]) fileDeleteChk($Result[0]["filenm3"],'3');?>
                        </td>
                    </tr>
                    <tr>
                        <th>내용<span class="sup">*</span></th>
                        <td colspan="3"><textarea name="content" id="content" title="내용" class="smarteditor"><?=$Result[0]["content"]?></textarea>
<?php

$msg="<br><br>";
$msg.=htmlspecialchars('<!-- 유튜브 영상 등록시  HTML 을 열어서 원하는 위치에 아래 내용에 맞추어서 처리 -->');
$msg.="<br>";
$msg.=htmlspecialchars('<div class="video_wrap">');
$msg.="<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
$msg.=htmlspecialchars('<div class="video_conts">');

$msg.="<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;유튜브 공유하기 소스<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
$msg.=htmlspecialchars('</div>');
$msg.="<br>";
$msg.=htmlspecialchars('</div>');
$msg.="<br><br>";

echo $msg;

?>						
						</td>
                    </tr>
                </table>

<input type="hidden" name="pFilename" value="<?=$Result[0]["filename"]?>" />
<input type="hidden" name="pFilenm" value="<?=$Result[0]["filenm"]?>" />
<input type="hidden" name="pFilename2" value="<?=$Result[0]["filename2"]?>" />
<input type="hidden" name="pFilenm2" value="<?=$Result[0]["filenm2"]?>" />
<input type="hidden" name="pFilename3" value="<?=$Result[0]["filename3"]?>" />
<input type="hidden" name="pFilenm3" value="<?=$Result[0]["filenm3"]?>" />

<input type="hidden" name="pFilename9" value="<?=$Result[0]["filename9"]?>" />
<?=$pSubmitHidden?>
</form>
</div>

                <div class="btn_box_r">
<?php if($seq!="" && $seq!="0") {?>
					<a href="<?=$pCommLink?>&mode=read&seq=<?=$Result[0]["seq"]?>" class="btn bg_black">상세</a>
<?php }?>
					<button type="button" onclick="javascript:formInputComm('');" class="btn bg_blue">저장</button>
                    <a href="<?=$pCommLink?>" class="btn bg_gray">목록</a>
                </div>

<?php  include "../smarteditor/smarteditor_inc.php" ?>