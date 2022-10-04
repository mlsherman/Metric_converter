/*
1 centimeter = 0.39370079 inch
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const meterToFeet =  3.281
const feetToMeter = 0.3048
const literToGallon =  0.264
const gallonToLiter = 3.78541178
const kiloToPound =  2.204
const poundToKilo = 0.45359237
const centToInch = 0.39370079
const inchToCent = 2.54

const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input")
const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const weightEl = document.getElementById("weight")
const sizeEl = document.getElementById("size")

const isDarkScheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

if(isDarkScheme){
    console.log("Dark interface preferred");
}

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    lengthEl.textContent = `${baseValue} meter = ${baseValue * Number(meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${baseValue * Number(feetToMeter).toFixed(3)} meter` 
})

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    volumeEl.textContent = `${baseValue} liter = ${baseValue * literToGallon} gallon | ${baseValue} gallon = ${baseValue * gallonToLiter} liter `
})

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    weightEl.textContent = `${baseValue} kilogram = ${baseValue * kiloToPound} pound | ${baseValue} pound = ${baseValue * poundToKilo} kilogram`
})

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    sizeEl.textContent = `${baseValue} centimeter = ${baseValue * centToInch} inch | ${baseValue} inch = ${baseValue * inchToCent} centimeter`
})