const form = document.querySelector('.form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phonenoInput = document.querySelector('#phoneno');
const msg = document.querySelector('#msg');
form.addEventListener('submit',onSubmit);
function onSubmit(e){
	e.preventDefault();
	if(nameInput.value===''||emailInput.value===''||phonenoInput.value===''){
		msg.classList.add('msg');
		msg.innerHTML = 'please enter all the fields';
		setTimeout(()=>msg.remove(),3000);
	}
}
