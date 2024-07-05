const inpitEl=document.getElementById("input")
const convertBtn=document.getElementById("convert")
let meterFoot=document.getElementById("meterFoot")
let literGallon=document.getElementById("literGallon")
let kiloPound=document.getElementById("kiloPound")

convertBtn.addEventListener("click", function(){
    const inputValue = parseFloat(inpitEl.value)

    const metersToFeet = Number.parseFloat(inputValue * 3.281).toFixed(2);
    const feetToMeters = Number.parseFloat(inputValue * 0.305).toFixed(2);
    const litersToGallons = Number.parseFloat(inputValue * 0.264).toFixed(2);
    const gallonsToLiters = Number.parseFloat(inputValue * 3.785).toFixed(2);
    const kilosToPounds = Number.parseFloat(inputValue * 3.281).toFixed(2);
    const poundsToKilos = Number.parseFloat(inputValue * 0.454).toFixed(2);

    meterFoot.textContent=`${inputValue} meters = ${metersToFeet} feet | ${inputValue} feet = ${feetToMeters} meters`
    literGallon.textContent=`${inputValue} liters = ${litersToGallons} gallons | ${inputValue} gallons = ${gallonsToLiters} liters`
    kiloPound.textContent=`${inputValue} kilograms = ${kilosToPounds} pounds | ${inputValue} pounds = ${poundsToKilos} kilos`

})