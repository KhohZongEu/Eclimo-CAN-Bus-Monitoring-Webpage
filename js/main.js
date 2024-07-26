import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
 import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";

let hydrogen_temp = 0;
let hydrogen_volt = 0;
let hydrogen_amp = 0;

let fuel_cell_temp = 0;
let fuel_cell_volt = 0;
let fuel_cell_amp = 0;

let ultra_cap_temp = 0;
let ultra_cap_volt = 0;
let ultra_cap_amp = 0;

let battery_temp = 0;
let battery_volt = 0;
let battery_amp = 0;


const firebaseConfig = {
    apiKey: "process.env.APIKEY",
    authDomain: "process.env.AUTHDOMAIN",
    databaseURL: "process.env.DATABASEURL",
    projectId: "process.env.PROJECTID",
    storageBucket: "process.env.STORAGEBUCKET",
    messagingSenderId: "process.env.MESSAGINGSENDERID",
    appId: "process.env.APPID",
    measurementId: "process.env.MEASUREMENTID"
};

const app = initializeApp(firebaseConfig);
 const database = getDatabase(app);

document.getElementById("hydrogen-temp").innerHTML = hydrogen_temp + ' °C';
document.getElementById("hydrogen-volt").innerHTML = hydrogen_volt + ' V';
document.getElementById("hydrogen-amp").innerHTML = hydrogen_amp + ' A';

document.getElementById("fuel-cell-temp").innerHTML = fuel_cell_temp + ' °C';
document.getElementById("fuel-cell-volt").innerHTML = fuel_cell_volt + ' V';
document.getElementById("fuel-cell-amp").innerHTML = fuel_cell_amp + ' A';

document.getElementById("ultra-cap-temp").innerHTML = ultra_cap_temp + ' °C';
document.getElementById("ultra-cap-volt").innerHTML = ultra_cap_volt + ' V';
document.getElementById("ultra-cap-amp").innerHTML = ultra_cap_amp + ' A';

document.getElementById("battery-temp").innerHTML = battery_temp + ' °C';
document.getElementById("battery-volt").innerHTML = battery_volt + ' V';
document.getElementById("battery-amp").innerHTML = battery_amp + ' A';