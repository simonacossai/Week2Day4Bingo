let numbers = [];
const tableNumbers = function () {
  const availableNumbers = []
  for (let i=1; i<=76; i++){
      availableNumbers.push(i);
  }
  return availableNumbers;
};

window.onload = function () {
  const num = tableNumbers(); 
  console.log(num);
  let table = document.querySelector("#table"); 
  for (let i = 0; i < num.length; i++) {
    numbers[i] = []; 

    const child = document.createElement("div"); 
    child.className = "day"; 
    const numH3 = document.createElement("h3");
    const totalNumberCells = i + 1;
    numH3.innerText = totalNumberCells;
    child.appendChild(numH3);
    table.appendChild(child);
  }
};