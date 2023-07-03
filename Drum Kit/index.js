// document.querySelectorAll("button")[0].addEventListener("click", handleClick); // if you write handleClick() - with brackets then that function will get executed even before clicking the button


var numOfButtons = document.querySelectorAll(".drum").length;
for (var i=0; i<numOfButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}
/* document.querySelector("button").addEventListener("click", function () {
  alert("I got clicked"); - this type of function in listener parameter is called anonmyous function
});
*/

function handleClick() {
  //this.style.color = "white"; // turns each letters color to white when it's clicked
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}


document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
      case 'w':
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
      case 'a':
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
      case 's':
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
      case 'd':
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
      case 'j':
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
      case 'k':
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
      case 'l':
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
      default:console.log(buttonInnerHTML);

    }
  }

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout (function () {

    activeButton.classList.remove("pressed");

  } , 100);
}

// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();
