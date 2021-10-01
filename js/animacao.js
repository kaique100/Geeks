// JavaScript Document


document.querySelector(".abrir-menu").onclick = function(){
	
	console.log("ABRIR MENU");
	document.documentElement.classList.add("menu-ativo");
}

document.querySelector(".fechar-menu").onclick = function(){
	
	console.log("FECHAR MENU");
	document.documentElement.classList.remove("menu-ativo");
}
window.onscroll = function(){
	
	let top = window.pageYOffset || document.documentElement.scrollTop;
	
	if(top > 500){
	   		console.log(top);
			document.getElementById("topo-fixo").classList.add("menu-fixo");
		
	   }else{
		   console.log(top)
		   document.getElementById("topo-fixo").classList.remove("menu-fixo");
		
		   
	   }
	
}
































































