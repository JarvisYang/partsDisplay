(function(){
	var produceList = new Array(
			{
				produceName:1,
				imgName:"IMG_1048.JPG"
			},
			{
				produceName:2,
				imgName:"IMG_1049.JPG"
			},
			{
				produceName:3,
				imgName:"IMG_1050.JPG"
			},
			{
				produceName:4,
				imgName:"IMG_1051.JPG"
			},
			{
				produceName:5,
				imgName:"IMG_1052.JPG"
			},
			{
				produceName:6,
				imgName:"IMG_1054-2.JPG"
			},
			{
				produceName:7,
				imgName:"IMG_1056.JPG"
			},
			{
				produceName:8,
				imgName:"IMG_1059.JPG"
			},
			{
				produceName:9,
				imgName:"IMG_1060.JPG"
			},
			{
				produceName:10,
				imgName:"IMG_1062.JPG"
			}
		);

	var lastProduceList = new Array(
			{
				produceName:1,
				imgName:"IMG_1071.JPG"
			},
			{
				produceName:2,
				imgName:"IMG_1074.JPG"
			},
			{
				produceName:3,
				imgName:"IMG_1075.JPG"
			},
			{
				produceName:4,
				imgName:"IMG_1088.JPG"
			},
			{
				produceName:5,
				imgName:"IMG_1052.JPG"
			},
			{
				produceName:6,
				imgName:"IMG_1054-2.JPG"
			},
			{
				produceName:7,
				imgName:"IMG_1056.JPG"
			},
			{
				produceName:8,
				imgName:"IMG_1059.JPG"
			},
			{
				produceName:9,
				imgName:"IMG_1060.JPG"
			},
			{
				produceName:10,
				imgName:"IMG_1062.JPG"
			}
		);

	var exampleMoveTime;
	var isExampleMove = false;
	var lastProducePageNow = 0;
	var canMove = true;

	function $(className){
	    return document.getElementsByClassName(className)[0];
	};

	function getCss(obj){
	    return window.getComputedStyle(obj,false);
	};

	function headerShow () {
		var title1Children = $("hdTitle1").children;
		var title1ChildrenLength = title1Children.length;
		var count1 = 0;

		var title2Children = $("hdTitle2").children;
		var title2ChildrenLength = title2Children.length;
		var count2 = 0;

		var title1Time = setInterval(function(){
			if(count1 < title1ChildrenLength){
				title1Children[count1].style.opacity = 1;
				count1++;
			}
			else{
				clearInterval(title1Time);
				$("hdTitle2").children[0].style.marginLeft = "0px";
			};
		},80);
	};

	function exampleMove(){
		if(!isExampleMove){
			isExampleMove = true;
			var boxWidth = parseFloat(getCss($("exampleListDiv").children[0]).width);
			var exampleListWidth = parseFloat(getCss($("exampleList")).width);
			var moveDis = boxWidth - exampleListWidth;
			var startMarginLeft = boxWidth - 719;
			exampleMoveTime = setInterval(function(){
				var ELMarginLeftNow = parseFloat(getCss($("exampleList")).marginLeft);
				if(ELMarginLeftNow >= moveDis){
					$("exampleList").style.marginLeft = (ELMarginLeftNow - 1) + "px";
				}
				else{
					$("exampleList").style.marginLeft = startMarginLeft + "px";
				}
			},30);
		};
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

	function changeELWidth(){
		var obj= $("exampleList");
		var childrenNum = obj.children.length;
		obj.style.width = (childrenNum*182 - 11) + "px";
		return true;
	}

	function addExampleList(){
		var i = 0;
		var produceListNum = produceList.length;
		var addHTML = "";
		var countTime = setInterval(function(){
			if(i < produceListNum){//根据产品数组produceList内容加载产品列表
				addHTML += "<a href='javascript:void(0)' class='produceDiv'><div class='produceImgDiv'><img src='../static/img/"
							+ produceList[i].imgName
							+ "' class='produceImg' onload='return changeImgSize(this)'/></div><p class='produceName'>"
							+ produceList[i].produceName
							+ "</p></a>";
				++i;
			}
			else{
				//在产品展示列表后添加前四个产品
				addHTML += "<a href='javascript:void(0)' class='produceDiv'><div class='produceImgDiv'><img src='../static/img/"
						+ produceList[0].imgName
						+ "' class='produceImg' onload='return changeImgSize(this)'/></div><p class='produceName'>"
						+ produceList[0].produceName
						+ "</p></a>"
						+"<a href='javascript:void(0)' class='produceDiv'><div class='produceImgDiv'><img src='../static/img/"
						+ produceList[1].imgName
						+ "' class='produceImg' onload='return changeImgSize(this)'/></div><p class='produceName'>"
						+ produceList[1].produceName
						+ "</p></a>"
						+"<a href='javascript:void(0)' class='produceDiv'><div class='produceImgDiv'><img src='../static/img/"
						+ produceList[2].imgName
						+ "' class='produceImg' onload='return changeImgSize(this)'/></div><p class='produceName'>"
						+ produceList[2].produceName
						+ "</p></a>"
						+"<a href='javascript:void(0)' class='produceDiv'><div class='produceImgDiv'><img src='../static/img/"
						+ produceList[3].imgName
						+ "' class='produceImg' onload='return changeImgSize(this)'/></div><p class='produceName'>"
						+ produceList[3].produceName
						+ "</p></a>"
				$("exampleList").innerHTML = addHTML;
				changeELWidth();
				exampleMove();
				clearInterval(countTime);
			}
		},0);
	};

	function addLastExampleList(){
		var i = 0;
		var addHTML = "";
		var lastProducePageNow = lastProduceList.length;
		var countTime = setInterval(function(){
			if(i < lastProducePageNow){//根据产品数组produceList内容加载产品列表
				if(i%4 === 0){
					addHTML += "<div>"
				}
				addHTML += "<a href='javascript:void(0)' class='produceDiv'><div class='produceImgDiv'><img src='../static/img/"
							+ lastProduceList[i].imgName
							+ "' class='produceImg' onload='return changeImgSize(this)'/></div><p class='produceName'>"
							+ lastProduceList[i].produceName
							+ "</p></a>";
				if(i%4 === 3){
					addHTML +="</div>"
				}
				++i;
			}
			else{
				$("lastProduceList").innerHTML = addHTML;
				clearInterval(countTime);
			}
		},0);
	};

	function lastPeoduceToLeft(T){
		if(canMove){
			canMove = false;
			var LPLChildren = $("lastProduceList").children;
			var pageNum = LPLChildren.length;
			var obj1 = LPLChildren[lastProducePageNow];
			var obj2 = {};
			var countTime = 1;
			var moveDistance;
			const a1 = 500/(T*T);
			const a2 = 1000/(3*T*T);
			const t1 = 0.4*T;//加速时间
			const t2 = 0.6*T;//减速时间
			const v  = 200/T;

			if(lastProducePageNow === (pageNum-1)){
				obj2 = LPLChildren[0];
				lastProducePageNow = 0;
			}
			else{
				obj2 = LPLChildren[lastProducePageNow + 1];
				++lastProducePageNow;
			};
			obj2.style.right = "-100%";
			var moveTime = setInterval(function(){  
			    if(countTime <= t1){
			        moveDistance = (0.5*a1*countTime*countTime);
			    }
			    else{
			        moveDistance = (40+v*(countTime-t1)-0.5*a2*(countTime-t1)*(countTime-t1));
			    };
			    obj1.style.right = moveDistance + "%";
			    obj2.style.right = (-100 + moveDistance) + "%";
			    if(countTime < T){
			        ++countTime;
			    }
			    else{
			        canMove = true;
			        clearInterval(moveTime);
			    }
			},1);
		};
	};

	function lastPeoduceToRight(T){
		if(canMove){
			canMove = false;
			var LPLChildren = $("lastProduceList").children;
			var pageNum = LPLChildren.length;
			var obj1 = LPLChildren[lastProducePageNow];
			var obj2 = {};
			var countTime = 1;
			var moveDistance;
			const a1 = 500/(T*T);
			const a2 = 1000/(3*T*T);
			const t1 = 0.4*T;//加速时间
			const t2 = 0.6*T;//减速时间
			const v  = 200/T;

			if(lastProducePageNow === 0){
				obj2 = LPLChildren[pageNum - 1];
				lastProducePageNow = pageNum - 1;
			}
			else{
				obj2 = LPLChildren[lastProducePageNow - 1];
				--lastProducePageNow;
			};
			obj2.style.right = "100%"
			var moveTime = setInterval(function(){  
			    if(countTime <= t1){
			        moveDistance = (0.5*a1*countTime*countTime);
			    }
			    else{
			        moveDistance = (40+v*(countTime-t1)-0.5*a2*(countTime-t1)*(countTime-t1));
			    };
			    obj1.style.right = (0 - moveDistance) + "%";
			    obj2.style.right = (100 - moveDistance) + "%";
			    if(countTime < T){
			        ++countTime;
			    }
			    else{
			        canMove = true;
			        clearInterval(moveTime);
			    }
			},1);
		};
	};

	window.onload = function(){
		headerShow();
		addExampleList();
		addLastExampleList();
	};

	$("exampleListDiv").onmouseover = function(){
		clearInterval(exampleMoveTime);
		isExampleMove = false;
	};

	$("exampleListDiv").onmouseout = function(){
		exampleMove();
	};

	$("toLeft").onclick = function(){
		lastPeoduceToLeft(45);
	};

	$("toRight").onclick = function(){
		lastPeoduceToRight(45);
	};
})();