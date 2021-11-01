console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit successful');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let catPic = document.querySelector('#catPic');

catPic.addEventListener('mouseover', () => {
	alert('You look marvelous!')
})


