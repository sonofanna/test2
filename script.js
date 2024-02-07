const bar = document.getElementById('bar');
const nav = document.getElementById('menu');
const closemenu = document.getElementById('close');


if(bar){
	bar.addEventListener('click',()=>{
		
		menu.classList.add('active');
		
	});
}

if(closemenu){
	
	closemenu.addEventListener('click',()=>{
		
		menu.classList.remove('active');
		
	});	
	
}