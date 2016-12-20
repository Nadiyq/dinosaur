'use strict';

(function() {

  firebase.initializeApp({
	    apiKey: "AIzaSyCcEB30Y4D4odsX5w3CgpTZ6GRHw23SqGU",
	    authDomain: "dinosaur-a3d6d.firebaseapp.com",
	    databaseURL: "https://dinosaur-a3d6d.firebaseio.com",
	    storageBucket: "dinosaur-a3d6d.appspot.com",
	    messagingSenderId: "149206515521"
  });

  //=require 'lib/*.js'
  //=require 'middlewares/*.js'
  //=require 'routes/*.js'

  const { location, history, templates } = window;
  const rootElement = qs('#root');

  function render(tplName, data = {}) {
    const user = firebase.auth().currentUser;
    const userData = user ? user.toJSON() : null;
    data = Object.assign(data, { user: userData });
    rootElement.innerHTML = templates[tplName](data);
  }

  function render404() {
    render('404');
  }

  page('*', auth);
  page('/', main);
  page('/login', login);
  page('/logout', logout);
  page('/signup', signup);
  page('*', render404);

  render('preloader');

  // simulate firebase 'onready' behavior
  const unsubsribe = firebase.auth().onAuthStateChanged(() => {
    page();
    unsubsribe();
  });

} ());
