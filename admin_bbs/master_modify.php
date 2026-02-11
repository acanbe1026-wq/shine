<?php 
if($seq!="" && $seq!="0") {
	$gDBSelect = new SelectSql("master");
	//======================== DB Module Start ============================
	$gConn = new DBConn();
	$Result = $gDBSelect->SelectWithSeq ( $seq, $gConn->mConn );
	$gConn->DisConnect();
	//======================== DB Module End ===============================
	$formType="passwdModify";
	$viewNone=" viewNone";
}
?>

<div class="conts_view_view">				
<form name="formWrite" id="formWrite" action="../admin_bbs/master_modify_exec.php" method="post" enctype="MULTIPART/FORM-DATA">

				<table class="table_02">
					<colgroup>
						<col style="width:200px;" />
						<col />
					</colgroup>
                    <tr>
                        <th>아이디<span class="sup">*</span></th>
                        <td><input type="text" name="id" value="<?=strHtml($Result[0]["id"])?>" title="아이디"></td>
                    </tr>
                    <tr>
                        <th>비밀번호<span class="sup<?=$viewNone?>">*</span></th>
                        <td><input type="password" name="passwd" value="" title="비밀번호"></td>
                    </tr>
                    <tr>
                        <th>관리자명<span class="sup">*</span></th>
                        <td><input type="text" name="name" value="<?=strHtml($Result[0]["name"])?>" title="관리자명"></td>
                    </tr>
                    <tr>
                        <th>관리자권한<span class="sup">*</span></th>
                        <td>
							<select name="kind" title="관리자권한">
								<?=MasterKind($Result[0]["kind"],"") ?>
							</select>
                        </td>
                    </tr>
                </table>
<input type="hidden" name="idOld" value="<?=strHtml($Result[0]["id"])?>"  />
<?=$pSubmitHidden?>
</form>
</div>

                <div class="btn_box_r">
					<button type="button" onclick="javascript:formInputComm('<?=$formType?>');" class="btn bg_blue">저장</button>
                    <a href="<?=$pCommLink?>" class="btn bg_gray">목록</a>
                </div>

