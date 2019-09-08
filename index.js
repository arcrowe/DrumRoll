// document.querySelector("button").addEventListener("click", handleClick);
const drums = document.querySelectorAll(".drum")

// for (let i = 0; i < drums.length; i++) {
//
//     drums[i].addEventListener("click", function (ev) {
//         alert("I got clicked");
//     });
// }

drums.forEach(function (drum) {
    drum.addEventListener("click", function (ev) {
        alert(ev.target.textContent + ' was hit');
        alert(this.innerHTML + ' was hit');
        console.log(this.innerHTML);
        this.style.color="white";
        makeSound(this.innerHTML);
        makeSound(ev.target.innerHTML);
        buttonAnimation(this.innerHTML);

    });
})

document.addEventListener("keydown", function (ev) {
    makeSound(ev.key);
    buttonAnimation(ev.key);

})

function makeSound(key) {
    let audio;
    switch (key) {
        case 'w':
            audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case 'a':
            audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case 's':
            audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case 'd':
            audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case 'j':
            audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case 'k':
            audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case 'l':
            audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log(this.innerHTML)
    }
}

function buttonAnimation(key) {

    const activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);

}

// function handleClick() {
//     alert("I got clicked");
// }
