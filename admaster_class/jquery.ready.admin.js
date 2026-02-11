var regEmail = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
function formInputComm(obj) {
	var errorMsg="";
	var noField="#|url|admin_msg|homepage|"; //제외
	if(obj=="passwdModify") noField= noField + "|passwd|"; //제외

	//var selectVal = $('#cate1_change option:selected').val();
	//var radioVal = $('input[name="radioTxt"]:checked').val();  //radio checkbox 선택값

	$('#formWrite select').each( function() {
		if($.trim($(this).val())=="") { errorMsg = errorMsg + $(this).attr("title")+"을 선택하십시오.\n"; $(this).focus(); }
	});
	$('#formWrite input').each( function() {
		if (noField.indexOf("|"+$(this).attr("name")+"|") <= -1 && $(this).attr("type")!="hidden" && $(this).attr("type")!="file" && !$(this).hasClass('file')) { //제외에 없는것만
			if($.trim($(this).val())=="") { errorMsg = errorMsg + $(this).attr("title")+"을 입력하십시오.\n"; $(this).focus(); }
		}
	});

	if($('#formWrite input[name=email]').val()!="" && $('#formWrite input[name=email]').val()!=undefined) {
		if(!regEmail.test($('#formWrite input[name=email]').val())) { errorMsg = errorMsg + "이메일을 형식에 맞게 입력해주세요.\n";	}	
	}

	if($('#formWrite input[name=upfile9]').val()=="" && $('#formWrite input[name=pFilename9]').val()=="") { errorMsg = errorMsg + "리스트 이미지를 등록하십시오.\n"; }

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

	if(obj=="join") { //회원가입
		var frm=document.formWrite;

		if(frm.id.value.length < 6 || frm.id.value.length > 12) { errorMsg = errorMsg + "아이디는 6~12자로  입력하십시요.\n"; frm.passwd.focus();	}
		if(frm.nickname.value.length < 2 || frm.nickname.value.length > 10) { errorMsg = errorMsg + "닉네임은 2~10자로  입력하십시요.\n"; frm.nickname.focus();	} 
		if(frm.passwd.value.length < 6 || frm.passwd.value.length > 12) { errorMsg = errorMsg + "비밀번호는 6~12자로  입력하십시요.\n"; frm.passwd.focus();	} 
		if(frm.passwd.value != frm.passwd_chk.value) { errorMsg = errorMsg + "비밀번호 확인이 비밀번호와 일치하지 않습니다.\n"; frm.passwd_chk.focus();	} 
		if(!regEmail.test(frm.email1.value + '@' +frm.email2.value) ) { errorMsg = errorMsg + "이메일을 형식에 맞게 입력해주세요.\n";  frm.email1.focus();	}		

		if($('#formWrite :input[name="agree_01"]').is(":checked")==false) { errorMsg = errorMsg + "이용약관에 동의합니다.\n"; }
		if($('#formWrite :input[name="agree_02"]').is(":checked")==false) { errorMsg = errorMsg + "개인정보 수집 및 이용동의에 동의합니다.\n"; }

		if($('#formWrite :input[name="charger_kind[]"]').is(":checked")==false) { errorMsg = errorMsg + "충전기정보를 선택하십시오.\n"; }

		if($('#formWrite :input[name="agree"]').is(":checked")==false) { errorMsg = errorMsg + "이용약관에 동의합니다.\n"; }
		if($('input[name="agree"]:checked').val()!="1")  errorMsg = errorMsg + "개인정보 수집·이용에 동의하시기 바랍니다.\n";		
	
	}

	if(errorMsg!="") {
		viewAlert(errorMsg);
		return;
	}

	viewLoading();
	document.formWrite.submit();
}

function formInputList(obj,num) {
	var errorMsg="";

	if(obj=="info_fee") {
		var arr = ['name','bank_name','bank_no']; 
		var arrName = ['지사명','은행명','계좌번호']; 

		for (var i = 0; i < arr.length; i++) {
			if($('#'+arr[i]+num).val()=="") { errorMsg = errorMsg + arrName[i] + "을  입력하십시오.\n"; }
		}
	}

	if(errorMsg!="") {
		//alert(errorMsg);
		viewAlert(errorMsg);
		return;
	}

	var frm=eval("document.formWrite"+num);
	frm.submit();
}


function formInputAlert(obj, msg) {
	var errorMsg="";
	var noField="#|url|admin_msg|"; //제외

	if(confirm(msg)) {
		$('#writerAlert input').each( function() {
			if (noField.indexOf("|"+$(this).attr("name")+"|") <= -1 && $(this).attr("type")!="hidden" && !$(this).hasClass('file')) { //제외에 없는것만
				if($.trim($(this).val())=="") { errorMsg = errorMsg + $(this).attr("title")+"을 입력하십시오.\n"; $(this).focus(); }
			}
		});
	}

	if(errorMsg!="") {
		//alert(errorMsg);
		viewAlert(errorMsg);
		return;
	}

	viewLoading();
	document.writerAlert.submit();
}

function alertConfirm(msg, href) {
	if(confirm(msg)) {
		viewLoading();
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
	if(str.indexOf("-")==0){ //음수라면 replace 후 - 붙여준다.
		str = "-"+str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
	}else{
		str = str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
	}
    return str;
 }

 function uncomma(str) {
    str = String(str);
	if(str.indexOf("-")==0){ //음수라면 replace 후 - 붙여준다.
		str = "-"+str.replace(/[^\d]+/g, '');
	}else{
		str = str.replace(/[^\d]+/g, '');
	}
    return str;
 }
//====================== 공통 함수
function onKeyUp (obj) {
	var errorMsg="";
	if (window.event.keyCode == 13) {
		if(obj=="login") {
			$('#formWrite input').each( function() {
				if ($(this).attr("type")!="hidden" && !$(this).hasClass('file')) { //제외에 없는것만
					if($.trim($(this).val())=="") { errorMsg = errorMsg + $(this).attr("title")+"을 입력하십시오.\n"; $(this).focus(); }
				}
			});
			if(errorMsg!="") {
				viewAlert(errorMsg);
				return;
			}
			document.formWrite.submit();

		}
	}
}

function deleteConfirm(href) {
	$('.tblAlert .btn_div a:last-child').show();
	$('.tblAlert .btn_div a:first-child').click(function(e) { $(this).attr("href",href); });
	$(".tblAlert .cont").html("정말 삭제하시겠습니까?");

	$("#viewAlert").css({height : $(document).height(), width : $(document).width() }).show();
	$(".alert_div").css({marginTop : -($(".tblAlert").height() / 2) });
}

function viewAlert(errorMsg) { //알트창표시
	$('.tblAlert .btn_div a:last-child').hide();
	$('.tblAlert .btn_div a:first-child').click(function(e) { $(this).attr("href","#"); });
	$(".tblAlert .cont").html(errorMsg.replace(/\n/g, "<br />"));

	$("#viewAlert").css({height : $(document).height(), width : $(document).width() }).show();
	$(".alert_div").css({marginTop : -($(".tblAlert").height() / 2) });
}

function viewLoading() { //로딩표시
	$("#viewLoading").css({height : $(document).height(), width : $(document).width() }).show();
}

function showToggle(ele) { //달력 팝업 보이기
	var ele = document.getElementById(ele);
	if(ele.style.display != 'block') ele.style.display ="block";
	else ele.style.display ="none";

	return false;
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

	$('#imgLoading').click(function(e) { $('#viewLoading').hide(); }); //로딩 없애기
	$('.tblAlert .btn_div a').click(function(e) { $('#viewAlert').hide(); }); //알트Layer 닫기

	$(".nav_wrap").mCustomScrollbar({
		theme:"light" //light, dark, 3D, light-3  rounded  minimal-dark
	});
	$(".conts_view_list").mCustomScrollbar({
		theme:"dark" //light, dark, 3D, light-3  rounded  minimal-dark
	});
	$(".conts_view_view").mCustomScrollbar({
		theme:"dark" //light, dark, 3D, light-3  rounded  minimal-dark
	});

	$('#goPage').click(function(e) { //페이지 이동
		$('#pageID').val($('#go_page').val());
		document.writer.submit();
	}); //알트Layer 닫기


	//썸네일 이미지 원본 보기
	var offsetX = 20;
	var offsetY = 20;
	$('.thum').click(function(e){ //mouse on  원본 이미지 우측에 보여주기
		$('#largeImage').remove();
		var offset = $(this).offset();

		var href = $(this).attr('src');
		href = href.replace('-thum', '');
		$('<img id="largeImage" style="z-index:99999;position: absolute;" src="' + href + '">').appendTo('body');

		const img = new Image();
		img.src = href;
		img.onload = function() {
			//alert(img.width + "/" + img.height);
			
			if(parseInt(offset.left) > img.width) offsetX= parseInt(offset.left) - img.width;
			else offsetX= parseInt(offset.left) + 100;

			var h1 = parseInt(img.height / 2) + 100;
			var h2 = parseInt(img.height / 2) - 50;
			if(parseInt(offset.top) > h1 ) offsetY= parseInt(offset.top) - h2 ;
			else offsetY= parseInt(offset.top) + 0;

			$("#largeImage").css('top', offsetY).css('left', offsetX);
		}

	});	
	$(document).on("click", "#largeImage", function(){
		$('#largeImage').remove();
	});

	//달력 기간 등록
	$('.dateterm span').click(function(e) {
		$(".dateterm span").removeClass("on");
		$(this).addClass("on");

		var nowItem = $(this).parent("p").attr('now-item');
		var dataItem = $(this).parent("p").attr('data-item');

        var data = 'term='+$(this).attr('data-item')+"&item="+nowItem;

        $.ajax({
            type: "GET",
            url: "../admaster_class/calendar_ajax.php",
            data: data,
            success: function (data) {		
				if($.trim(data)=="/") {
					$('#'+nowItem).val("");
					$('#'+dataItem).val("");
				} else {
					var vArrStr = $.trim(data).split("/");

					if($.trim(vArrStr[0])!="") $('#'+nowItem).val($.trim(vArrStr[0]));
					if($.trim(vArrStr[1])!="") $('#'+dataItem).val($.trim(vArrStr[1]));
				}
            }
        });
	});

	//사이드 메뉴
    $(".nav > li > a").on("click", function(){
        if($(this).hasClass("selected")){
            $(this).removeClass("selected");
            $(this).next(".nav_sub").slideUp("fast");
        } else {
            $(".nav > li > a").removeClass("selected");
            $(".nav_sub").slideUp("fast");
            $(this).addClass("selected");
            $(this).next(".nav_sub").slideDown("fast");
        }
    });

    //파일 이미지 미리보기
    function readURL(input) {
        var dv = $(event.currentTarget);
        var tg = dv.next(".preview_img");
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                var el = "<img src='" + e.target.result + "'>"
                tg.empty().append(el);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }   
    $(".file_img").change(function() {
        readURL(this);
    });


	$('.add_amt_ok').click(function(e) { //checkbox
		if($(this).is(":checked")) {
			alert('ccc');
		}else{
			alert('t');
		}
	}); //checkbox

});
