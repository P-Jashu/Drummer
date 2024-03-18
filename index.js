//for mouse press
var numOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numOfButtons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

        var buttonInnerHtml = this.innerHTML;
        music(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
}

//for keyboard press
document.addEventListener("keydown", function(event){
    music(event.key);
    buttonAnimation(event.key);
});

function music(key){

    switch (key) {
        case "w":  
            var auido1 = new Audio("./sounds/tom-1.mp3");
            auido1.play();
        break;
        case "a":
            var auido2 = new Audio("./sounds/tom-2.mp3")
            auido2.play();
        break;
        case "s":
            var auido3 = new Audio("./sounds/tom-3.mp3")
            auido3.play();
        break;
        case "d":
            var auido4 = new Audio("./sounds/tom-4.mp3")
            auido4.play();
        break;
        case "j":
            var auido5 = new Audio("./sounds/crash.mp3")
            auido5.play();
        break;
        case "k":
            var auido6 = new Audio("./sounds/kick-bass.mp3")
            auido6.play();
        break;
        case "l":
            var auido7 = new Audio("./sounds/snare.mp3")
            auido7.play();
        break;
        default:
            console.log(buttonInnerHtml);
    }
}

function buttonAnimation(pressedKey){
    var currentKey = document.querySelector("."+pressedKey);
    currentKey.classList.add("pressed");
    setTimeout(function(){
        currentKey.classList.remove("pressed");
    }, 100);
}