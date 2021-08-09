

function refreshMe(){

    

    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// For image 1

if(randomNumber1 === 1){
    document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice1.png");
} else if(randomNumber1 === 2){
    document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice2.png");
} else if(randomNumber1 === 3){
    document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice3.png");
} else if(randomNumber1 === 4){
    document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice4.png");
} else if(randomNumber1 === 5){
    document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice5.png");
} else {
    document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice6.png");
}

//For image 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

if(randomNumber2 === 1){
    document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice1.png");
} else if(randomNumber2 === 2){
    document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice2.png");
} else if(randomNumber2 === 3){
    document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice3.png");
} else if(randomNumber2 === 4){
    document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice4.png");
} else if(randomNumber2 === 5){
    document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice5.png");
} else {
    document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice6.png");
}

if( randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}else if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw"
} else{
    document.querySelector("h1").innerHTML = "Refresh Me"
}

}





