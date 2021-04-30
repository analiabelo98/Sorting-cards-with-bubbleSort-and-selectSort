/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

var nCards = 0;
var btn1 = document.getElementById("showCards");
var arr = [];

// crear carta
btn1.addEventListener("click", () => {
  nCards = document.getElementById("input").value;
  let suits = ["spade", "heart", "diamond", "club"];
  let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

  document.querySelector(".container").innerHTML = "";
  let numOfCards = [];
  arr = [];

  for (let i = 0; i < nCards; i++) {
    let suit = suits[Math.floor(Math.random() * suits.length)];
    let number = numbers[Math.floor(Math.random() * numbers.length)];

    numOfCards.push([suit, number]);
    console.log(numOfCards.includes([suit, number]));
    var card = "";

    card = `
        
          
          <div class=" card ${suit}"><p class="number">${number}</p></div>
         
       
      `;
    document.querySelector(".container").innerHTML += card;

    //doy valor a las letras para luego ordenarlas
    if (number == "J") {
      number = "11";
      arr.push([card, number]);
    } else if (number == "Q") {
      number = "12";
      arr.push([card, number]);
    } else if (number == "K") {
      number = "13";
      arr.push([card, number]);
    } else if (number == "A") {
      number = "1";
      arr.push([card, number]);
    } else {
      arr.push([card, number]);
    }
  }
  console.log(arr + " hola?");
});

let bubbleSort = () => {
  let wall = arr.length - 1; //we start the wall at the end of the array
  while (wall > 0) {
    let i = 0;
    while (i < wall) {
      console.log(parseInt(arr[i][1]));
      //console.log(parseInt(arr[i][0]));
      //console.log(parseInt(arr[i]));

      //parseInt convierte un argumento de tipo cadena y devuelve un entero
      if (parseInt(arr[i][1]) > parseInt(arr[i + 1][1])) {
        //console.log(parseInt(arr[i][1]) + " son los mayores?");
        let aux = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = aux;
      }
      i++;
    }
    wall--; //decrease the wall for optimization
  }

  return arr;
};

const selectSort = arr => {
  let min = 0;
  while (min < arr.length - 1) {
    for (let i = min + 1; i < arr.length; i++) {
      if (parseInt(arr[min][1]) > parseInt(arr[i][1])) {
        let aux = arr[min];
        arr[min] = arr[i];
        arr[i] = aux;
      }
    }
    min++;
  }
  
  return arr;
};

var btn2 = document.getElementById("bubbleSort");
btn2.addEventListener("click", () => {
  document.querySelector(".container").innerHTML = "";
  for (let i of bubbleSort(arr)) {
    document.querySelector(".container").innerHTML += i[0];
  }
});

var btn3 = document.getElementById("selectSort");
btn3.addEventListener("click", () => {
  document.querySelector(".container").innerHTML = "";
  for (let i of selectSort(arr)) {
    document.querySelector(".container").innerHTML += i[0];
  }
});
