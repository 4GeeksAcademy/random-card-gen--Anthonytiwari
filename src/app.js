import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
    let randomCard = () => {
        let number = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "Q", "j", "A"];
        let randomNumber = number[Math.floor(Math.random() * number.length)];

        return randomNumber
    }

    document.getElementById("aleatorio").innerHTML = randomCard()

    let prueba = () => {

        let classCard = ["♥", "♠", "♣", "♦"];
        let randomClassCard = classCard[Math.floor(Math.random() * classCard.length)];

        return randomClassCard
    }
    let palo = prueba()
    document.getElementById("card-palo").innerHTML = palo
    document.getElementById("card-palo2").innerHTML = palo
    if (palo=="♥" || palo=="♦"){

        document.getElementById("card-palo2").style.color= "red" 
    }
     if (palo=="♥" || palo=="♦"){

        document.getElementById("card-palo").style.color= "red" 
    }

};