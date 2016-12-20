function signup(){
	// createUserWithEmailAndPassword
	render('signup');

	let form = document.getElementById('signup-form');
	let {email, password, password_confirm} = form;

	form.addEventListener('submit', submitHandler);
// нет серверныъ ошибок
// нет когда пользователь был создан
// нет информативности в ошибках при валидации

	function submitHandler(e){
		//  @ есть ли
		// пасворд меньше 6
		// . есть ли
		// совпадение с конферм

		if ((email.value.indexOf('@') === -1) || (email.value.indexOf('.') === -1) ||(password.value.length) < 6 || (password.value !== password_confirm.value)){
			alert('error');
		} else {
			firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
				.catch( (error) => {
					alert(error.message);
			});
		}
		e.preventDefault();
	}
}