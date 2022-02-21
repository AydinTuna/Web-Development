const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
let colorID, check = true;

btn.addEventListener("click", function() {
  // get random number between 0 - 3 

  const randomNumber = getRandomNumber();

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
  
  
  
})

function getRandomNumber() {
  const result = Math.floor(Math.random() * 4);

  return result;
}




