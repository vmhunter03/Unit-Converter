//conversion values
let feetToMeters = 0.3048;
let metersToFeet = 3.2808399;
let litersToGallons = 0.264172;
let gallonsToLiters = 3.785412;
let kilosToPounds = 2.204623;
let poundsToKilos = 0.453592;

let inputValue = document.getElementById("input");
let lenghtPara = document.getElementById("length-para");
let volumePara = document.getElementById("volume-para");
let massPara = document.getElementById("mass-para");
// let input = inputValue.value;
//getting input value
function inputChange(value) {
  let meters2feet = value * metersToFeet;
  let feet2meters = value * feetToMeters;
  lenghtPara.textContent =
    value +
    " meters = " +
    meters2feet.toFixed(3) +
    " feet | " +
    value +
    " feet = " +
    feet2meters.toFixed(3) +
    " meters";
  let liters2gallons = value * gallonsToLiters;
  let gallons2liters = value * litersToGallons;
  volumePara.textContent =
    value +
    " liters = " +
    gallons2liters.toFixed(3) +
    " gallons | " +
    value +
    " gallons = " +
    liters2gallons.toFixed(3) +
    " liters";

  let kilo2pounds = value * kilosToPounds;
  let pounds2kilo = value * poundsToKilos;
  massPara.textContent =
    value +
    " kilos = " +
    kilo2pounds.toFixed(3) +
    " pounds | " +
    value +
    " pounds = " +
    pounds2kilo.toFixed(3) +
    " kilos";
}
