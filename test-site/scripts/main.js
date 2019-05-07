var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/458italia.jpg') {
        myImage.setAttribute('src','images/laferrari.jpg');
    } else {
        myImage.setAttribute('src','images/458italia.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Don\'t you love red cars, ' + myName + '?';
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Don\'t you love red cars, ' + storedName + '?';
}

myButton.onclick = function() {
    setUserName();
}