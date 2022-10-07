/*
Write JavaScript to accomplish all of the tasks below. Do not change any code in
the HTML or CSS files
*/

// Problem One
// Select the first square using its id. Add a button inside the square with the
// number 1 on it.

// Your code here
const boxOne = document.getElementById("problem-one");
boxOne.innerText = '';
const boxOneButton = document.createElement("button");
boxOneButton.innerText = "1";
boxOne.appendChild(boxOneButton);

// Problem Two
// Select the second square using class names. Change the background color to
// orange, the text color white, and the border to 5px dashed black.

// Your code here
const boxTwo = document.querySelector('.two');
boxTwo.style.color = "white";
boxTwo.style.backgroundColor = "orange";
boxTwo.style.border = "5px dashed black";


// Problem 3
// Select all of the squares that have a class of "plus", and double their
// width. Increase the size of the font as well.
// HINT: Check the CSS file or use your Dev Tools to find the original width and
// font-size, and then double those sizes.

// Your code here
const classPlus = document.getElementsByClassName("plus");

let temp;
for(let div in classPlus) {
  temp = classPlus[div];

  if (+div >= 0) {
    // console.log('PRINTING', temp);
    temp.style.width = "100px";
    temp.style.fontSize = "60px";
  }
}

// Problem 4
// Select the fourth box. Give it an id of "problem-four". Remove the class of
// "square" and add a class "round". As a result, the item should turn a
// different color and shape due to code in the css file.

// Your code here
const boxFour = document.querySelector(".four");
boxFour.setAttribute("class", "round four");
boxFour.id = "problem-four";

// Problem 5
// Use JavaScript to remove boxes 5, 6, and 7. Can you remove multiple boxes at
// once? Think about what element selectors you could use? How could you
// manipulate attributes so that you could remove them all at once? What other
// approaches can you think of?
// NOTE: There are many possible approaches to this. Try 2-3 approaches and
// evaluate which one achieves the goal in the best way.

// Your code here
const classSquare = document.getElementsByClassName("square");
console.log(classSquare)

let temp2;
let progress = 0;
for (let div in classSquare) {
  temp2 = classSquare[div];
  console.log(progress++, temp2)

  if (+div >= 0 && temp2) {
    // console.log('PRINTING', temp);
    if (temp2.innerText === "5" || temp2.innerText === "6" || temp2.innerText === "7") {
      temp2.parentNode.removeChild(temp2);
    }
  }
}

const classMinus = document.querySelectorAll('.minus');
classMinus[0].parentNode.removeChild(classMinus[0]);

// Tanner's Ways

//1.
// const p5 = document.querySelectorAll('./minus');
// p5.forEach(ele => {
//   ele.remove();
// })
