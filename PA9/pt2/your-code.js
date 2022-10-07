function getCookie(name) {
  let re = new RegExp(name + "=([^;]+)");
  let value = re.exec(document.cookie);

  return (value) ? decodeURI(value[1]) : null;
}

window.addEventListener("DOMContentLoaded", () => {
  // Your code here

  // P1
  const buttonBlue = document.getElementById("make-circle-blue");
  buttonBlue.addEventListener("click", () => {
    const circle = document.getElementById("blue-border-circle");
    circle.setAttribute("class", "blue-fill");

    //circle.classList.add("blue-fill");
  });

  // P2
  const noCheck = document.getElementById("will-not-check");
  noCheck.addEventListener("click", (event) => {
    event.preventDefault();
  });

  // P3
  const buttonBanana = document.getElementById("change-bananas-status");
  buttonBanana.addEventListener("click", () => {
    const textBanana = document.getElementById("bananas-div");
    textBanana.innerHTML = "No Bananas Today!";

    const imgBanana = document.createElement("img");
    imgBanana.src = "./images/no-bananas.png";
    imgBanana.id = "no-banana";

    const oneImg = document.getElementById("no-banana");
    if (!oneImg) {
      const divBanana = document.getElementById("bananas-image-div");
      divBanana.appendChild(imgBanana);
    }

    //Bonus

  });

  // P4
  const favCookie = document.getElementById("store-cookie");
  const inputCookie = document.getElementById("fav-cookie");

  favCookie.addEventListener("click", () => {
    const textCookie = inputCookie.value;
    console.log(inputCookie);

    document.cookie = `favCookie=${textCookie}; max-age=1800`;

    inputCookie.value = '';
  });

  let testCookie = getCookie("favCookie");

  if (testCookie) {
    inputCookie.value = testCookie;
  }

  // P5
  const inputPie = document.getElementById("pie-type");
  const buttonPie = document.getElementById("save-pie");
  buttonPie.addEventListener("click", () => {
    console.log(inputPie.value);

    if (inputPie.value) {
      const liPie = document.createElement("li");
      liPie.innerText = inputPie.value;


      const ulPie = document.querySelector('.pie-list');
      console.log(ulPie);
      ulPie.appendChild(liPie);


      inputPie.value = '';
    }
  });

  // P6
  const inputCream = document.getElementById("fav-ice-cream");
  const buttonCream = document.getElementById("save-ice-cream");
  buttonCream.addEventListener("click", () => {
    if (inputCream.value) {
      localStorage.setItem("favCream", inputCream.value);
      inputCream.value = '';
    }
  });

  const favCream = localStorage.getItem("favCream");

  if (favCream) {
    inputCream.value = favCream;
  }

  // P7
  let totalFruit = 0;
  const buttonApple = document.getElementById("add-apple");
  const buttonOrange = document.getElementById("add-orange");
  const buttonEmptyBasket = document.getElementById("reset-basket");
  const basket = document.getElementById("fruit-storage");
  const pieces = document.getElementById("total-fruit");
  pieces.innerText = totalFruit;

  buttonApple.addEventListener("click", () => {
    const pApple = document.createElement("p");
    // pApple.innerText = "Apple";
    pApple.innerText = '🍎';

    basket.appendChild(pApple);

    totalFruit++;
    pieces.innerText = totalFruit;
  });

  buttonOrange.addEventListener("click", () => {
    const pOrange = document.createElement("p");
    pOrange.innerText = "Orange";

    basket.appendChild(pOrange);

    totalFruit++;
    pieces.innerText = totalFruit;
  });

  buttonEmptyBasket.addEventListener("click", () => {
    basket.innerHTML = '';
    totalFruit = 0;
    pieces.innerText = totalFruit;
  });

  // P8
  const buttonBubbles = document.getElementById("bubble-maker");
  buttonBubbles.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  // P9
  const buttonDict = document.getElementById("dictionary-fetch");
  const divDict = document.getElementById("results-area");

  buttonDict.addEventListener("click", async () => {
    const result = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/dictionary`, {
      "method": "GET"
    }).then((res) => res.json());

    const word = result["0"]["word"];
    const definition = result["0"]["meanings"]["0"]["definitions"]["0"]["definition"];

    const ulDict = document.createElement("ul");
    const li1Dict = document.createElement("li");
    li1Dict.innerText = word;
    const li2Dict = document.createElement("li");
    li2Dict.innerText = definition;

    ulDict.append(li1Dict, li2Dict);


    divDict.appendChild(ulDict);
    // console.log(definition);
  });

});
