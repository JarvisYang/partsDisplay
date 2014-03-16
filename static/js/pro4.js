(function(){
	function $(className){
	    return document.getElementsByClassName(className)[0];
	};

	function getCss(obj){
	    return window.getComputedStyle(obj,false);
	};

	var produceList = new Array(
			"IMG_1056.JPG",
			"IMG_1059.JPG",
			"IMG_1060.JPG",
			"IMG_1062.JPG",
			"IMG_1065.JPG",
			"IMG_1066.JPG"
		);

	var imgNumNow = 0;
	var hasMove = false;

	function addProduceList(){
		var i = 0;
		var addHTML = "";
		var produceListLength = produceList.length;
		var countTime = setInterval(function(){
			if(i < produceListLength){//根据产品数组produceList内容加载产品列表
				addHTML += "<div><img src='../static/img/"
							+ produceList[i]
							+ "' onmouseover='changeLargePicUrl(this,"
							+ i
							+ ")' onload='return changeImgSize(this)'/></div>";
				++i;
			}
			else{
				$("ctRListBox").innerHTML = addHTML;
				$("ctRListBox").style.width = (72*($("ctRListBox").children.length)) + "px";
				$("largePicShowBow").innerHTML = "<img onload='return changeLargeImgSize(this)' class='largePicShow' src='../static/img/"
										+ produceList[0] + "'/>"
				clearInterval(countTime);
			}
		},0);
	};

	window.changeImgSize = function(obj){
		var width = obj.width;
		var height = obj.height;
		if(width > height){
			obj.width = 60;
			obj.height = 60.0/width*height;
		}
		else{
			obj.height = 60.0;
			obj.width = 60.0/height*width;
		};
		obj.style.display = "inline-block";
		return true;
	};

	window.changeLargeImgSize = function(obj){
		var width = obj.width;
		var height = obj.height;
		if(width > height){
			obj.width = 450.0;
			obj.height = 450.0/width*height;
		}
		else{
			obj.height = 450.0;
			obj.width = 450.0/height*width;
		};
		obj.style.display = "inline-block";
		return true;
	};

	window.changeLargePicUrl = function(obj,num){
		if(num !== imgNumNow){
			var url = obj.src;
			$("largePicShowBow").innerHTML = "<img onload='return changeLargeImgSize(this)' class='largePicShow' src='"
									+ url + "'/>"
			$("ctRListBox").children[imgNumNow].children[0].style.border = "1px solid rgba(68, 68, 68, 0)";
			obj.style.border = "1px solid rgba(68, 68, 68, 0.85)";
			imgNumNow = num;
		};
	};

	window.onload = function(){
		addProduceList();
	};

	$("toRight").onclick = function(){
		if(!hasMove){
			hasMove = true;
			var marginNow = parseFloat(getCss($("ctRListBox")).marginLeft);
			var ctRHiddenBoxWidth = 432;
			var ctRListBoxWidth = parseFloat(getCss($("ctRListBox")).width);
			if(marginNow > (ctRHiddenBoxWidth - ctRListBoxWidth)){
				$("ctRListBox").style.marginLeft = (marginNow - 72) + "px";
			};
			hasMove = false;
		};
		
	};

	$("toLeft").onclick = function(){
		if(!hasMove){
			hasMove = true;
			var marginNow = parseFloat(getCss($("ctRListBox")).marginLeft);
			if(marginNow < 0){
				$("ctRListBox").style.marginLeft = (marginNow + 72) + "px";
			};
			hasMove = false;
		};
	};
})();