const frame = document.querySelector(".grid-container")
const sleft = document.getElementById("s_left")
const sbook = document.getElementById("s_book")
var s_left=36
var s_book=0
for (i=1;i<=36;i++){
	let box = document.createElement('div');
	box.setAttribute('class','box');
	box.setAttribute('id',i);
    box.addEventListener('click',() => { 
		box.classList.toggle('booked');
		if(box.classList.contains('booked'))
		{
			s_left-=1;
			s_book+=1;
		}		
		else
		{	
			s_left+=1;
			s_book-=1;
		}
		sleft.innerHTML = s_left;
		sbook.innerHTML = s_book;

	});
	
	frame.appendChild(box);
}
