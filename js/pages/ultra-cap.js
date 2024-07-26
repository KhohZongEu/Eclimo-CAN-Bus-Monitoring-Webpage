
function createGrid() {
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            let cell = document.createElement("a");
            cell.classList.add("cell");
            cell.setAttribute("id","cell"+(i+j));
            cell.setAttribute("href","cell"+(i+j));
            document.getElementById("detailed-data").appendChild(cell);
        }
    }
}

createGrid();
document.getElementById("avr-ultra-cap-volt").innerHTML = 0 + ' V';