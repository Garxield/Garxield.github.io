var myImage = document.querySelector('img');
/*El método querySelector devuelve elemento
Se asigna a la variable myImage
Con el método getAttribute obtenemos el valor del attributo src
asignandolo a la variable mySrc */

myImage.onclick = function() {
   var mySrc = myImage.getAttribute('src');
   if(mySrc === 'images/firefox-1.png') { //
   myImage.setAttribute ('src','images/firefox-2.png');
   } else {
   myImage.setAttribute ('src','images/firefox-1.png');
   }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	/*Pedimos un nombre lo guardamos en el objeto 
	localStorage luego lo asignamos al elemento
    h1 con la propiedad innerHTML	*/
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Mozilla is cool! ' + myName;
}

if (! localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Mozilla is Cool! ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}