import database from '../main.js'
import {ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";

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

onValue(ref(database,'CANBUS/ultra_cap'), (snapshot) => {
    let ultra_cap_temp = snapshot.val().temp;
    let avr_ultra_cap_volt = 0;
    let ultra_cap_amp = snapshot.val().amp;
    let tmp = snapshot.val().volt;


    for (let i = 0; i < tmp.length; i++) {
      avr_ultra_cap_volt += tmp[i];
      let cellName = 'cell' + (i + 1);
      changeColor(cellName, tmp[i]);

      let content = document.createElement("span");
      content.textContent = tmp[i].toFixed(1) + 'V';
      document.getElementById(cellName).appendChild(content);
    }

    avr_ultra_cap_volt /= tmp.length;

    document.getElementById("avr-ultra-cap-temp").innerHTML = ultra_cap_temp + ' °C';
    document.getElementById("avr-ultra-cap-volt").innerHTML = avr_ultra_cap_volt + ' V';
    document.getElementById("avr-ultra-cap-amp").innerHTML = ultra_cap_amp + ' A';

  });  