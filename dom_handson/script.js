document.querySelector('#changing').innerText='Hello World'

function replace(){
 document.getElementById('changintext').innerText='Welcome to  Elevation Academy'
}
function direction(){
	let a=document.querySelector('.flex_container');
   if(a.style.flexDirection==='row'){
   	a.style.flexDirection='column'
   }
   else{
   	a.style.flexDirection='row'
   }
}
  

function clockcontainer(){
	let a= new Date().toLocaleTimeString();
	document.getElementById('childclock').innerHTML=a
}
setInterval(clockcontainer,1000)


let a=document.getElementById('changecolor')
a.style.color="red"
a.setAttribute("id", "headings")

