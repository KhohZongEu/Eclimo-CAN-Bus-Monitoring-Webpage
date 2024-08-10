//-------------------------- color changing variables --------------------------------
const lowVolt = 0;
const highVolt = 3;
const redColorLow = 255;
const redColorHigh = 0;
const greenColorLow = 0;
const greenColorHigh = 255;

function changeColor(id, Voltage) {
    let greenVal = greenColorLow + (greenColorHigh - greenColorLow) * (Voltage - lowVolt) / (highVolt - lowVolt);
    let redVal = redColorLow + (redColorHigh - redColorLow) * (Voltage - lowVolt) / (highVolt - lowVolt);;
    let newColor = "rgba(" + redVal + ", " + greenVal + ", 0)"
    document.getElementById(id).style.backgroundColor = newColor;
}

function createGrid() {
    let totalCell = 0;
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            totalCell++;
            let cell = document.createElement("li");
            cell.classList.add("cell");
            cell.setAttribute("id","cell" + totalCell);
            document.getElementById("detailed-data").appendChild(cell);
        }
    }
}

createGrid();
changeColor("cell1", 0.4);
document.getElementById("avr-ultra-cap-volt").innerHTML = 0 + ' V';