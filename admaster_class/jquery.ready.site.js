var regEmail = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

function formInputComm(obj) {
	var errorMsg="";
	var noField="#|url|admin_msg|"; //제외
	if(obj=="passwdModify") noField= noField + "|passwd|passwd_chk|"; //제외

	$('#formWrite input').each( function() {
		if (noField.indexOf("|"+$(this).attr("name")+"|") <= -1 && $(this).attr("type")!="hidden" && $(this).attr("type")!="file" && !$(this).hasClass('file')) { //제외에 없는것만
			if($.trim($(this).val())=="") { errorMsg = errorMsg + $(this).attr("title")+"을 입력하십시오.\n"; $(this).focus(); }
		}
	});

	$('#formWrite textarea').each( function() {
		if($(this).hasClass('smarteditor')) { //에디터이면
			oEditors.getById["content"].exec("UPDATE_CONTENTS_FIELD", [ ]); 
			if(obj=="contentCh") oEditors.getById["content_ch"].exec("UPDATE_CONTENTS_FIELD", [ ]); 
			if($.trim($(this).val())=="" || $.trim($(this).val())=="<p>&nbsp;</p>") {
				errorMsg = errorMsg + $(this).attr("title")+"을 입력하십시오.\n";
			}
		}else{
			if (noField.indexOf("|"+$(this).attr("name")+"|") <= -1) { //제외에 없는것만
				if($.trim($(this).val())=="") { errorMsg = errorMsg + $(this).attr("title")+"을 입력하십시오.\n"; $(this).focus(); }
			}
		}
	});

	if(obj=="join" || obj=="passwdModify") { //회원가입
		var frm=document.formWrite;
		var pattern1 = /[0-9]/;
		var pattern2 = /[a-zA-Z]/;
		var pattern3 = /[~!@\#$%<>^&*]/;     // 원하는 특수문자 추가 제거
		
		if(frm.passwd.value!="") {
			//if(frm.passwd.value.length < 8) { errorMsg = errorMsg + "비밀번호는 8자 이상으로  입력해 주세요.\n"; frm.passwd.focus();	} 
			if(!pattern1.test(frm.passwd.value) || !pattern2.test(frm.passwd.value) || frm.passwd.value.length < 8){
			   errorMsg = errorMsg + "비밀번호는 영문+숫자 8자 이상으로 입력해 주세요.\n";
			}
			if(frm.passwd.value != frm.passwd_chk.value) { errorMsg = errorMsg + "비밀번호 확인이 비밀번호와 일치하지 않습니다.\n"; frm.passwd_chk.focus();	}
		}



		if($('#formWrite :input[name="busi_kind"]').is(":checked")==false) { errorMsg = errorMsg + "기업형태를 선택하십시오.\n"; }
		if($('#formWrite :input[name="join_kind"]').is(":checked")==false) { errorMsg = errorMsg + "멤버십 유료회원를 선택하십시오.\n"; }

		if($('#formWrite :input[name="busi_type[]"]').is(":checked")==false) { errorMsg = errorMsg + "업종을 선택하십시오.\n"; }

		if($('#formWrite :input[name="lab_yes"]').is(":checked")==false) { errorMsg = errorMsg + "연구소 유무를 선택하십시오.\n"; }
		
		if($('#formWrite :input[name="business[]"]').is(":checked")==false) { errorMsg = errorMsg + "참여희망 사업을 선택하십시오.\n"; }

		if(!regEmail.test(frm.email.value) ) { errorMsg = errorMsg + "이메일을 형식에 맞게 입력해주세요.\n";  frm.email.focus();	}

		if(obj=="join") {
			if($('input[name="agree1"]:checked').val()!="1")  errorMsg = errorMsg + "서비스 이용약관에 동의하시기 바랍니다.\n";		
			if($('input[name="agree2"]:checked').val()!="1")  errorMsg = errorMsg + "개인정보 취급방침에 동의하시기 바랍니다.\n";		
		}	

	}

	if(errorMsg!="") {
		alert(errorMsg);
		return;
	}

	document.formWrite.submit();
}

function deleteConfirm(href) {
	if(confirm("정말 삭제하시겠습니까?")) {
		location.href=href;
	}
}

//$gDBExec->sale_amt=filter_var($sale_amt, 519);
//onkeyup="inputNumberFormat(this)"
function inputNumberFormat(obj) {
     obj.value = comma(uncomma(obj.value));
 }

 function comma(str) {
     str = String(str);
     return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
 }

 function uncomma(str) {
     str = String(str);
     return str.replace(/[^\d]+/g, '');
 }

//====================== 자동실행
$(function() {
	$('.numberOnlyR').numeric();
	$('.numberOnlyR').css("ime-mode","disabled");
	$('.numberOnlyR').css("text-align","right");
	$('.numberOnlyR').css("padding-right","5px");

	$('.numberOnly').numeric();
	$('.numberOnly').css("ime-mode","disabled");
	$('.bankOnly').alphanum({allow: '-',allowLatin  : false});	
	$('.bankOnly').css("ime-mode","disabled");
	$('.cellOnly').alphanum({allow: '-',allowLatin  : false, maxLength:13});	
	$('.cellOnly').css("ime-mode","disabled");
	$('.timeOnly').alphanum({allow: ':',allowLatin  : false});	
	$('.timeOnly').css("ime-mode","disabled");
	$('.readOnly').prop('readonly', true);
	$(".readOnly").css( 'backgroundColor','#eeeeee' );
	$('.email3').change(function() { $('.email2').val($('.email3 option:selected').val()); });

});
