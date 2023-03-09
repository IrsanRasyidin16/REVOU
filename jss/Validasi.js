var form = document.querySelector('form');
form.addEventListener('submit', function(event) {
	event.preventDefault();
	var nameInput = document.getElementById('Nama');
	var emailInput = document.getElementById('Email');
	var packageInput = document.getElementById('Package');

	if (nameInput.value == '') {
		alert('Mohon masukkan nama Anda');
		return false;
	}

	if (emailInput.value == '') {
		alert('Mohon masukkan alamat email Anda');
		return false;
	}

	if (packageInput.value == '') {
		alert('Mohon masukkan pesan Anda');
		return false;
	}

    if (nameInput !='' && emailInput!='' && packageInput!=''){
        alert('Terimakasih Sudah Berbelanja', nameInput);
		return false;
    }
	
});
