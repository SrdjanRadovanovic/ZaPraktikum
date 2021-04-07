var modal = document.getElementById('my-modal');
var closeBtn = document.getElementById('btnClose');

var inputIme = document.getElementById('nameInput');
var inputEmail = document.getElementById('emailInput');
var inputPass = document.getElementById('passInput');

var modalValidacija = document.getElementById('my-modal-validacija');
var closeBtnModalValidacija = document.getElementById('btnCloseModalValidacija');


closeBtnModalValidacija.addEventListener('click', zatvoriModalValidacija);
closeBtn.addEventListener('click', zatvoriModal);


function zatvoriModal() {
  modal.style.display = 'none';
}

function zatvoriModalValidacija() {
  modalValidacija.style.display = 'none';
}

function otvoriModal(){

	if(inputIme.value == "") {
		modalValidacija.style.display = 'block';
		return;
	}
  	modal.style.display = 'block';
}

function resetujFormu() {
	inputIme.value = "";
	inputEmail.value = "";
	inputPass.value = "";
}


