// JavaScript Document

window.onscroll = function(){
	
	let top = window.pageYOffset || document.documentElement.scrollTop;
	
	if(top > 500){
	   		console.log(top);
			document.getElementById("topo-fixo").classList.add("menu-fixo");
		
	   }else{
		   console.log(top);
		   document.getElementById("topo-fixo").classList.remove("menu-fixo");
	   }
	
}