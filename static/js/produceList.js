(function(){
	var produceList = new Array(
			{
				produceName:"车载收放机",
				imgName:"IMG_1048.JPG",
				url:"./pro3"
			},
			{
				produceName:"环卫厢专用定向轮",
				imgName:"IMG_1090.JPG",
				url:"./pro2"
			},
			{
				produceName:"环卫厢专用万向轮",
				imgName:"IMG_1083.JPG",
				url:"./pro1"
			},
			{
				produceName:"车桥",
				imgName:"IMG_1075.JPG",
				url:"./pro5"
			},
			{
				produceName:"车载收放机扬声器",
				imgName:"IMG_1056.JPG",
				url:"./pro4"
			},
			{
				produceName:"车载收放机天线",
				imgName:"IMG_1071.JPG",
				url:"./pro6"
			}
		);

	function $(className){
	    return document.getElementsByClassName(className)[0];
	};

	function getCss(obj){
	    return window.getComputedStyle(obj,false);
	};

	var pageNow = 0;
	var isPageMoreThan1 = false;

	function addProduceList(){
		var i = 0;
		var addHTML = "";
		var produceListLength = produceList.length;
		var countTime = setInterval(function(){
			if(i < produceListLength){//根据产品数组produceList内容加载产品列表
				if(i%8 === 0){
					addHTML += "<div>"
					$("ctRProduceListPage").innerHTML += "<a href='javascript:void(0)' target='_blank' onclick='changeProListPage("
										+ (i/8) + ")'>" + (i/8+1) + "</a>";
				}
				addHTML += "<a href='"
							+ produceList[i].url
							+ "' class='produceDiv' target='_blank' onclick='changePSSize(this)'><div class='produceImgDiv'><img src='../static/img/"
							+ produceList[i].imgName
							+ "' class='produceImg' onload='return changeImgSize(this)'/></div><p class='produceName'>"
							+ produceList[i].produceName
							+ "</p></a>";
				if(i%8 === 7){
					addHTML +="</div>"
				}
				++i;
			}
			else{
				if($("ctRProduceListPage").children.length > 1){
					isPageMoreThan1 = true;
					$("ctRProduceListPage").innerHTML = "<a href='javascript:void(0)' onclick='upPage()'>上一页</>" 
									+ $("ctRProduceListPage").innerHTML 
									+ "<a href='javascript:void(0)' onclick='downPage()'>下一页</a>";
				}
				$("ctRProduceList").innerHTML = addHTML;
				clearInterval(countTime);
			};
		},0);
	};

	window.changeImgSize = function(obj){
		var width = obj.width;
		var height = obj.height;
		if(width > height){
			obj.width = 160;
			obj.height = 160.0/width*height;
		}
		else{
			obj.height = 160.0;
			obj.width = 160.0/height*width;
		};
		obj.style.display = "inline-block";
		return true;
	};

	window.changeProListPage = function(num){
		var obj = $("ctRProduceList").children;
		var pageObj = $("ctRProduceListPage").children;
		
		if(num !== pageNow){
			var needToAdd1 = 0;
			if(isPageMoreThan1){
				needToAdd1 = 1;
			}

			obj[num].style.right = "0";
			obj[pageNow].style.right = "-100%";

			pageObj[num+1].style.color = "rgb(73, 146, 255)";
			pageObj[num+1].style.borderBottomColor = "rgb(73, 146, 255)";
			pageObj[pageNow+1].style.color = "#666";
			pageObj[pageNow+1].style.borderBottomColor = "#797979";
			pageNow = num;
		};
	};

	window.upPage = function(){
		var obj = $("ctRProduceList").children;
		var pageObj = $("ctRProduceListPage").children;
		
		if(pageNow !== 0){
			var num = pageNow - 1;
			var needToAdd1 = 0;
			if(isPageMoreThan1){
				needToAdd1 = 1;
			}

			obj[num].style.right = "0";
			obj[pageNow].style.right = "-100%";

			pageObj[num+1].style.color = "rgb(73, 146, 255)";
			pageObj[num+1].style.borderBottomColor = "rgb(73, 146, 255)";
			pageObj[pageNow+1].style.color = "#666";
			pageObj[pageNow+1].style.borderBottomColor = "#797979";
			pageNow = num;
		};
	};

	window.downPage = function(){
		var obj = $("ctRProduceList").children;
		var pageObj = $("ctRProduceListPage").children;
		
		if(pageNow !== (obj.length - 1)){
			var num = pageNow + 1;
			var needToAdd1 = 0;
			if(isPageMoreThan1){
				needToAdd1 = 1;
			}

			obj[num].style.right = "0";
			obj[pageNow].style.right = "-100%";

			pageObj[num+1].style.color = "rgb(73, 146, 255)";
			pageObj[num+1].style.borderBottomColor = "rgb(73, 146, 255)";
			pageObj[pageNow+1].style.color = "#666";
			pageObj[pageNow+1].style.borderBottomColor = "#797979";
			pageNow = num;
		};
	};

	window.onload = function(){
		addProduceList();
	};
})();