<?php 
$gDBSelect = new SelectSql("board");
//======================== DB Module Start ============================
$gConn = new DBConn();
$Result = $gDBSelect->SelectWithSeq ( $seq, $gConn->mConn );
if($Result[0]["seq"]) {
	$gDBSelect->UpdateSetReadCnt( $seq, $gConn->mConn ) ;
	$Result[0]["read_cnt"]++;
}
$gConn->DisConnect();
//======================== DB Module End ===============================
?>
<div class="conts_view_view">				

				<table class="table_02">
					<colgroup>
						<col style="width:200px;" />
						<col />
						<col style="width:200px;" />
						<col />
					</colgroup>
                    <tr>
                        <th>조회수</th>
                        <td><?=$Result[0]["read_cnt"]?></td>
                        <th>등록일자<span class="sup">*</span></th>
                        <td><?=$Result[0]["reg_date"]?></td>
                    </tr>
                    <tr>
                        <th>제목<span class="sup">*</span></th>
                        <td colspan="3"><?=strHtml($Result[0]["subject"])?></td>
                    </tr>
                    <tr>
                        <th>내용<span class="sup">*</span></th>
                        <td colspan="3" class="content"><?=$Result[0]["content"]?></td>
                    </tr>
                    <tr>
                        <th>첨부파일</th>
                        <td><?php if($Result[0]["filename"]) FileDownView($Result[0]["filename"],$Result[0]["filenm"]);?></td>
<?php if($code=="s") {?>
                        <th rowspan="3" class="row">리스트 이미지<?=$pImgSize1?></th>
                        <td rowspan="3" class="row">
							<div class="preview_img"><?=imgViewSize($Result[0]["filename9"],"")?></div>
                        </td>
<?php }else{?>
                        <th rowspan="3" class="row"></th>
                        <td rowspan="3" class="row"></td>
<?php  }?>
                    </tr>
                    <tr>
                        <th>첨부파일</th>
                        <td colspan="3"><?php if($Result[0]["filename2"]) FileDownView($Result[0]["filename2"],$Result[0]["filenm2"]);?></td>
                    </tr>
                    <tr>
                        <th>첨부파일</th>
                        <td colspan="3"><?php if($Result[0]["filename3"]) FileDownView($Result[0]["filename3"],$Result[0]["filenm3"]);?></td>
                    </tr>
                </table>

</div>

                <div class="btn_box_r">
					<a href="javascript:deleteConfirm('../admin_bbs/board_delete_exec.php<?=$pExecLink?>&seq=<?=$Result[0]["seq"]?>')" class="btn bg_black">삭제</a>
					<a href="<?=$pCommLink?>&mode=modify&seq=<?=$Result[0]["seq"]?>" class="btn bg_blue">수정</a>
					<a href="<?=$pCommLink?>&mode=modify" class="btn bg_blue">등록</a>
					<a href="<?=$pCommLink?>" class="btn bg_gray">목록</a>
                </div>
