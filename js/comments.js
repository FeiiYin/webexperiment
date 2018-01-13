
$(function(){
	$('#commentarea').focus(function(){
		if($(this).text() == "请输入留言内容"){
			$(this).text("");
		}
	});
	$('#username').one('focus',function(){
		if($(this).val() == "请输入昵称"){
			$(this).val("");
		}
	});
	$('#sub').click(function(){
		var $comment = $('#commentarea').html();
		var $username = $('#username').val();

		if($comment&&$username != ""){
			SendComment($comment, $username);
			$('.commentm').hide();
			$('.usernamem').hide();
		}else if($comment == "" && $username != ""){
			$('.commentm').show();
			$('#commentarea').focus();
			return false;
		}else if($comment != "" && $username == ""){
			$('.usernamem').show();
			$('#username').focus();
			return false;
		}else{			
			$('.commentm').show();
			$('.usernamem').show();
			alert("留言输入错误！");
			return false;
		}

		$(document).ajaxStart(function(){						// JQ1.8之后使用全局document对象
			$('.statusm').show().html("留言提交中...");
		});
		$(document).ajaxStop(function(){
			$('.statusm').html("留言提交成功！").fadeOut(1000);
		});
	});

	// 表情添加
	imgInit();
	$('img').click(function(){
		$('#commentarea').append($('#'+ this.id).clone());		// 将对象节点转化为HTML代码
	});

	// 加粗
	$('.text-b').click(function(){
		/*if($('#commentarea').css('font-weight') != '400'){		// 替换bold、normal时，if判断条件中非数字表示会失效
			$('#commentarea').css('font-weight', '400');
		}else{
			$('#commentarea').css('font-weight', '700');
		}*/
		if($('#commentarea').has('b').length != 0){
			var bh = $('#commentarea b').html();
			$('#commentarea b').replaceWith(bh);
		}else{
			$('#commentarea').wrapInner('<b></b>');
		}
	});

	// 斜体
	$('.text-i').click(function(){
		/*if($('#commentarea').css('font-style') != 'normal'){
			$('#commentarea').css('font-style', 'normal');
		}else{
			$('#commentarea').css('font-style', 'italic');
		}*/
		if($('#commentarea').has('i').length != 0){
			var ih = $('#commentarea i').html();
			$('#commentarea i').replaceWith(ih);
		}else{
			$('#commentarea').wrapInner('<i></i>');
		}
	});

	// 下划线
	$('.text-u').click(function(){
		/*if($('#commentarea').css('text-decoration') != 'none'){
			$('#commentarea').css('text-decoration', 'none');
		}else{
			$('#commentarea').css('text-decoration', 'underline');
		}*/
		if($('#commentarea').has('u').length != 0){
			var uh = $('#commentarea u').html();
			$('#commentarea u').replaceWith(uh);
		}else{
			$('#commentarea').wrapInner('<u></u>');
		}
	});
});
 	
// ***************************************************
// 自定义提交留言内容和用户昵称函数
// 参数comment为留言内容，参数name为用户昵称
// ***************************************************
function SendComment(comment, name){
	var $usercomment = "<b><i>" + name + "</i></b>" + "&nbsp;&nbsp;发表于&nbsp;&nbsp;"
						+ "<i>" + GetDate() + "</i>" + "<br />" + comment + "<br />";
	var $commentslist = $('#comments').html() + $usercomment;
	// alert($commentslist);
	$.ajax({
		url: "",
		// cache: false,
		// crossDomain: false,
		// 未加dataType时，jQuery1.9.1之前的版本可以执行success，之后版本只执行error
		// 加上dataType后jQuery1.9.1之后的版本不再执行error而是正常执行success，
		// 但是ajaxStart和ajaxStop没有执行
		dataType: 'text',
		data: "&comment=&d=" + new Date() + "&commentslist=" + $commentslist,
		success: function(data){
			// alert(data);
			$('#comments').html($commentslist);
			// 原生DOM对象方法可使留言板内容中滚动条保持在最下方
			// document.getElementById('comments').scrollTop = document.getElementById('comments').scrollHeight;
			// jQuery对象转为DOM对象
			$('#comments').get(0).scrollTop = $('#comments').get(0).scrollHeight;
			$('#commentarea').html("");
		},
		error: function(){
			alert("留言提交失败！");
		}
	});
}

function GetDate(){
	var t = new Date();
	var y = t.getFullYear();
	var m = t.getMonth() + 1;
	var d = t.getDate();
	var h = t.getHours();
	var min = t.getMinutes();
	var s = t.getSeconds();
	var time = y + "/" + m + "/" + d + "&nbsp;&nbsp;" + h + ":" + min + ":" + s;
	return time;
}
// 非AJAX方法
/*function sendcomment(comment,name){
	var $usercomment = "<b><i>" + name + "</i></b>" + "&nbsp;&nbsp;发表于&nbsp;&nbsp;"
						+ "<i>" + GetDate() + "</i>" + "<br />" + comment + "<br />";
	var $commentslist = $('#comments').html() + $usercomment;
	$('#comments').html($commentslist);
}
*/

// ***************************************************
// 自定义表情图标添加
// ***************************************************
function imgInit(){
	var eImg = "";
	for(var i=1; i<13; i++){
		// eImg += '<img src = "img/' + i + '.JPG" id = "e' + i + '" />';
		eImg += '<img src = "http://file.imooc.com/opus/B4/271696/254/img/' + i + '.JPG" id = "e' + i + '" />'; 
	}
	$('.emotionbox').append(eImg);
}

