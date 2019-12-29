var buttons = document.querySelectorAll(".drum");

document.addEventListener("keydown", function(event) {
    playSound(event.key);
    buttonAnimation(event.key);
});

for (var i = 0; i < buttons.length; i++) {
   document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;   
    playSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
   });
}

function playSound(e) {

        switch(e) {
            case "w":
                var a = new Audio( "./sounds/crash.mp3"); // Audio object
                a.play(); // method play() initialized in the Audio constructor
                break;
            case "a":
                var a = new Audio("./sounds/kick-bass.mp3");
                a.play();
                break;
            case "s":
                var a = new Audio("./sounds/snare.mp3");
                a.play();
                break;
            case "d":
                var a = new Audio("./sounds/tom-1.mp3");
                a.play();
                break;
            case "j":
                var a = new Audio("./sounds/tom-2.mp3");
                a.play();
                break;
            case "k":
                var a = new Audio("./sounds/tom-3.mp3");
                a.play();
                break;
            case "l":
                var a = new Audio("./sounds/tom-4.mp3");
                a.play();
                break;

            default: console.log(this.innerHTML);
        }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    //after delay of .1s, remove class so returns to original display

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);

}
