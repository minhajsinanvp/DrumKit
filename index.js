// var houseKeeper1 = {
//     name: "sulu",
//     age: 25,
//     jobType : "room service",

// }


// constructuor function (BellBoy function name)


// function BellBoy(name,age,hasWorkPermit,language){

//     this.name = name;
//     this.age = age;
//     this.hasWorkPermit = hasWorkPermit;
//     this.language = language
// }


// var bellBoy1 = new BellBoy("sinz",1,true,['English',"Malayalam"])

function soundMaker(button){
    switch (button) {
        case "w":
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;
        case "a":
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;
        case "s":
            var crash = new Audio('./sounds/snare.mp3');
            crash.play();
            break;
        case "d":
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;
        case "j":
            var crash = new Audio('./sounds/tom-2.mp3');
            crash.play();
            break;
        case "k":
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
        case "l":
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            
            break;
        default:
            console.log(this.innerHTML)
            break;
    }
}




var numberOfDrumButton = document.querySelectorAll('.drum').length



function handleClick() {
    // var audio = new Audio('./sounds/tom-1.mp3');
    // audio.play();

}

for (var i = 0; i < numberOfDrumButton; i++) {

    document.addEventListener("keypress",function(event){

        soundMaker(event.key)

    })


    document.querySelectorAll("button")[i].addEventListener("click", function () {
        soundMaker(this.innerHTML);
        
    })

    // 

}


document.addEventListener("keypress",function(event){
    console.log(event.key)
})


