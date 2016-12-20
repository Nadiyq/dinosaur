
(() => {

	//=require 'routes/*.js'
	/// firebase initialization
	const firebaseConfig = {
	    apiKey: "AIzaSyCcEB30Y4D4odsX5w3CgpTZ6GRHw23SqGU",
	    authDomain: "dinosaur-a3d6d.firebaseapp.com",
	    databaseURL: "https://dinosaur-a3d6d.firebaseio.com",
	    storageBucket: "dinosaur-a3d6d.appspot.com",
	    messagingSenderId: "149206515521"
	};
	firebase.initializeApp(firebaseConfig);
	
	const rootElement = document.getElementById('root')

	page('/', main);
	page('/login', login);
	page('/signup', signup);
	page();

	page('/', render('main'));

	function render(tplName, ctx){
		rootElement.innerHTML = templates[tplName](ctx);
	}

})();