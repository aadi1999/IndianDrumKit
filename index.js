// detecting button press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;
// console.log(numberOfDrumButtons);

for(var i = 0; i < numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
       buttonAnimation(buttonInnerHTML);
           
    });

}
// detecting keyboard press
document.addEventListener("keypress",function(event){
     
    makeSound(event.key);
   // alert("key is pressed");
   buttonAnimation(event.key);
});


function makeSound(key){
    switch(key){
        case "w":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
        break;
        case "a":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
        break;
        case "s":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
        break;
        case "d":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
        break;

        case "j":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
        break;
        case "k":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
        break;
        case "l":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
        break;
        case "q":
            var audio = new Audio('sounds/tom-5.mp3');
            audio.play();
        break;
        case "e":
            var audio = new Audio('sounds/tabla-1.mp3');
            audio.play();
        break;
        case "r":
            var audio = new Audio('sounds/tabla-2.mp3');
            audio.play();
        break; 
         case "t":
            var audio = new Audio('sounds/tabla-3.mp3');
            audio.play();
        
        break;  
        case "y":
            var audio = new Audio('sounds/tabla-4.mp3');
            audio.play();
        
        break; 
         case "u":
            var audio = new Audio('sounds/tabla-5.mp3');
            audio.play();
        break;
         
        case "i":
            var audio = new Audio('sounds/tabla-6.mp3');
            audio.play();
        
        break; 
         case "o":
            var audio = new Audio('sounds/tabla-7.mp3');
            audio.play();
        break;
          
        case "p":
            var audio = new Audio('sounds/tom-5.mp3');
            audio.play();
        break;
        case "f":
            var audio = new Audio('sounds/tom-5.mp3');
            audio.play();
        break;
        case "g":
            var audio = new Audio('sounds/tom-5.mp3');
            audio.play();
        break;
        case "h":
            var audio = new Audio('sounds/tom-5.mp3');
            audio.play();
        break;
        case "n":
            var audio = new Audio('sounds/tom-5.mp3');
            audio.play();
        break;
        case "z":
            var audio = new Audio('sounds/tom-5.mp3');
            audio.play();
        break;
        case "x":
            var audio = new Audio('sounds/tom-5.mp3');
            audio.play();
        break;
        case "c":
            var audio = new Audio('sounds/tom-5.mp3');
            audio.play();
        break;
        case "v":
            var audio = new Audio('sounds/tom-5.mp3');
            audio.play();
        break;
        
        case "b":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
        break;
        case "m":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
        break;

        default: console.log(buttonInnerHTML);

    }

}
/// giving animation to buttons

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");   
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100)

}