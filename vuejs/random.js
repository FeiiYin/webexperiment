// JavaScript Document
// JavaScript Document

var color ;
var click_time = 0 ;
var now_time = 0 ;
function mOver(obj)
{
obj.innerHTML="love"
color = obj.style.backgroundColor ;
if(click_time < 10)
	obj.style.backgroundColor = "PaleTurquoise" ;
else
	obj.style.backgroundColor = "Gainsboro" ;
}

function mOut(obj)
{
//obj.innerHTML="love"
obj.style.backgroundColor = color ;
}
function mClick(obj){
	
	click_time ++ ;
	if(now_time == 1 ){
		if(click_time >= 5){
			window.open('find.html','_self')
		}
	}
	obj.innerHTML = "love"	
	//obj.style.zIndex = 1 ; 
	var a=document.getElementById('frame');
	a.style.zIndex = 0 ;
	for(var i = 0 ; i <= 3 ; i ++ ) {
		create("lucky-circle") ; 
	}
	setTimeout( function(){
		for(var i = 0 ; i <= 2 ; i ++ )		 
			create("lucky-circle") ;
	}, 200) ;
	setTimeout( function(){
		for(var i = 0 ; i <= 1 ; i ++ )		 
			create("lucky-circle") ;
	}, 120) ;
	if(click_time >= 10 ) {
		demo.init() ;
		click_time = 0 ;
		now_time = 1 ;
//		window.setTimeout(upFrame(),3000);
		//function hello(){ a.style.zIndex = 10 ; } window.setTimeout(hello,4000);
	}
}
function mClick_square(obj){
	click_time ++ ;
	obj.innerHTML = "love"	
	//obj.style.zIndex = 1 ; 
	var a=document.getElementById('frame');
	a.style.zIndex = 0 ;
	create("lucky-square") ; 
	
	setTimeout( function(){
		for(var i = 0 ; i <= 4 ; i ++ )		 
			create("lucky-square") ;
	}, 200) ;
	setTimeout( function(){
		for(var i = 0 ; i <= 1 ; i ++ )		 
			create("lucky-square") ;
	}, 120) ;
	if(click_time >= 10 ) {
		demo.init() ;
		click_time = 0 ;
//		window.setTimeout(upFrame(),3000);
		//function hello(){ a.style.zIndex = 10 ; } window.setTimeout(hello,4000);
	}
}

function mClick_infinity(obj){
	click_time ++ ;
	obj.innerHTML = "love"	
	//obj.style.zIndex = 1 ; 
	var a=document.getElementById('frame');
	a.style.zIndex = 0 ;
	create("infinity") ; 
	if(click_time >= 10 ) {
		demo.init() ;
		click_time = 0 ;
//		window.setTimeout(upFrame(),3000);
		//function hello(){ a.style.zIndex = 10 ; } window.setTimeout(hello,4000);
	}
}

function create(string){
	
	
	var div = document.createElement("div");
	div.style.backgroundColor="rgb(100,100,100)";
	
	///
	var randomWidth=parseInt(Math.random()*100+50);



	var container = document.getElementById("frame") ;
	var bottom=parseInt(Math.random()*(container.clientHeight-randomWidth));
	var left=parseInt(Math.random()*(container.clientWidth-randomWidth));



	div.setAttribute("class",string);

	div.setAttribute("data-left",left);
	div.setAttribute("data-bottom",bottom);



	div.style.bottom=bottom+"px";

	div.style.left=left+"px";

	div.style.backgroundColor="rgb("+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+")";

	div.style.width=randomWidth+"px";

	div.style.height=randomWidth+"px";

////
	
	
	
	document.getElementById("frame").appendChild(div);	

    setTimeout(function() {
        div.style.display = 'none';
    }, 900);
}