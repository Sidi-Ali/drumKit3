
for ( var i = 0; i < document.querySelectorAll(".drum").length; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(e){
    playSound(e.srcElement.innerText);
    blink(e.srcElement.innerText);
  });
}

document.addEventListener("keydown", function(e){
  playSound(e.key);
  blink(e.key);
});


function playSound(letter){
  if (letter === "w"){
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  }
  else if (letter === "a"){
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
  }
  else if (letter === "s"){
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
  }
  else if (letter === "d"){
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
  }
  else if (letter === "j"){
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
  }
  else if (letter === "k"){
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
  }
  else if (letter === "l"){
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
  }
  else{
    console.log("No drum was hit.");
  }
}

letters = [];

for (i = 0; i < document.querySelectorAll(".drum").length; i++){
  letters.push(document.querySelectorAll(".drum")[i].textContent);
}

function blink(letter){
  if (letters.includes(letter)){
    document.querySelector("." + letter).classList.add("hideDiv");
    setTimeout(function () {
      document.querySelector("." + letter).classList.remove("hideDiv");
    }, 40);
  }
  else{
    console.log("Key not assigned a drum.")
  }
}
