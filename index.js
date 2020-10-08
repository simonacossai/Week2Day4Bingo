const createCells = function () {
    const board = document.querySelector("#appointments");
     // container for my cells
    for (let i = 1; i <= 76; i++) {
        const cell = document.createElement("div") // create empty cell
        cell.classList.add('bingocell')
        cell.innerText = i
        board.appendChild(cell)
    }
}

const randomizeNumber = function () {
    let number = Math.floor(Math.random() * 76) + 1
    console.log(number)
    let allTheCells = document.querySelectorAll('.bingocell')
    let foundCell;
    //for (let y = 0; y < 76; y++) {
    //    if (allTheCells[y].innerText === number.toString()) {
    //        foundCell = allTheCells[y]
    //    }
    //}
    console.log(foundCell)
    allTheCells[number - 1].classList.add("selected")
    //foundCell.style.backgroundColor = 'yellow'
}

window.onload = createCells