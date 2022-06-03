let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');
function setUserName() {
    let myName = prompt('Veuillez saisir votre nom.');
    localStorage.setItem('nom', myName);
    myHeading.textContent = myName;
  }
if (!localStorage.getItem('nom')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('nom');
    myHeading.textContent = storedName;
}
myButton.addEventListener('click', function() {
    setUserName();
  });
     