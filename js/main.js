import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";


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

function analogConversion(val){
  let Volt = 0 + (3 - 0) * (val - 0) / (255 - 0);
  return Volt;
}

const firebaseConfig = {
  apiKey: "AIzaSyAHmdwFtSJ7YgBuNHSVdR9mTFHPBYi3Ta4",
  authDomain: "habit-chair.firebaseapp.com",
  databaseURL: "https://habit-chair-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "habit-chair",
  storageBucket: "habit-chair.appspot.com",
  messagingSenderId: "49817452985",
  appId: "1:49817452985:web:74ee05a89d9e22c3bd3668",
  measurementId: "G-XKVYRZ7BPJ"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

onValue(ref(database,'CANBUS/hydrogen'), (snapshot) => {
  hydrogen_temp = snapshot.val().temp;
  hydrogen_volt = snapshot.val().volt;
  hydrogen_amp = snapshot.val().amp;

  document.getElementById("hydrogen-temp").innerHTML = hydrogen_temp + ' °C';
  document.getElementById("hydrogen-volt").innerHTML = hydrogen_volt + ' V';
  document.getElementById("hydrogen-amp").innerHTML = hydrogen_amp + ' A';
});


onValue(ref(database,'CANBUS/fuel_cell'), (snapshot) => {
  fuel_cell_temp = snapshot.val().temp;
  fuel_cell_volt = snapshot.val().volt;
  fuel_cell_amp = snapshot.val().amp;

  document.getElementById("fuel-cell-temp").innerHTML = fuel_cell_temp + ' °C';
  document.getElementById("fuel-cell-volt").innerHTML = fuel_cell_volt + ' V';
  document.getElementById("fuel-cell-amp").innerHTML = fuel_cell_amp + ' A';
});  

onValue(ref(database,'CANBUS/ultra_cap'), (snapshot) => {
  ultra_cap_temp = snapshot.val().temp;
  ultra_cap_amp = snapshot.val().amp;
  let tmp = snapshot.val().volt;
  for (let i = 0; i < tmp.length; i++) {
    ultra_cap_volt += analogConversion(tmp[i]);
  }

  document.getElementById("ultra-cap-temp").innerHTML = ultra_cap_temp + ' °C';
  document.getElementById("ultra-cap-volt").innerHTML = ultra_cap_volt.toFixed(1) + ' V';
  document.getElementById("ultra-cap-amp").innerHTML = ultra_cap_amp + ' A';

});  

onValue(ref(database,'CANBUS/battery'), (snapshot) => {
  battery_temp = snapshot.val().temp;
  battery_volt = snapshot.val().volt;
  battery_amp = snapshot.val().amp;

  document.getElementById("battery-temp").innerHTML = battery_temp + ' °C';
  document.getElementById("battery-volt").innerHTML = battery_volt + ' V';
  document.getElementById("battery-amp").innerHTML = battery_amp + ' A';
});

export default database;