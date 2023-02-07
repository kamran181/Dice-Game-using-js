let randomNumber1 = Math.floor(Math.random() * 6) + 1;  //random number from 1 to 6
let imageDice1 = ("./images/dice" + randomNumber1 + ".png"); //./image/dice1 to 6 .png
let image1 = document.querySelectorAll("img")[0].setAttribute("src", imageDice1); 


let randomNumber2= Math.floor(Math.random() *6) +1;
let imageDice2 =("./images/dice" + randomNumber2 + ".png");
let image2= document.querySelectorAll("img")[1].setAttribute("src", imageDice2);


if (randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="🎈Player 1 wins";
}

else if(randomNumber1<randomNumber2){
    document.querySelector("h1").textContent="Player 2 wins🎈";
}

else{
    document.querySelector("h1").textContent="Draw";
}

