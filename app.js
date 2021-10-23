const celciusInput = document.querySelector('#celcius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

function roundNum(num) {
    return Math.round(num*100)/100;
}

function celciusConvert() {
    const cTemp = parseFloat(celciusInput.value);
    const fTemp = (cTemp * (9/5)) + 32;
    const kTemp = cTemp + 273.15;
    fahrenheitInput.value = roundNum(fTemp);
    kelvinInput.value = roundNum(kTemp);
}

function fahrenheitConvert() {
    const ftemp = parseFloat(fahrenheitInput.value);
    const cTemp = (ftemp - 32) * (5/9);
    const kTemp = (ftemp + 459.67) * (5/9);
    celciusInput.value = roundNum(cTemp);
    kelvinInput.value = roundNum(kTemp);
}

function kelvinConvert() {
    const kTemp = parseFloat(kelvinInput.value);
    const cTemp = kTemp - 273.15;
    const fTemp = (9/5) * (kTemp - 273) + 32;
    celciusInput.value = roundNum(cTemp);
    fahrenheitInput.value = roundNum(fTemp);
}

function main() {
    celciusInput.addEventListener('input', celciusConvert);
    fahrenheitInput.addEventListener('input', fahrenheitConvert);
    kelvinInput.addEventListener('input', kelvinConvert);
}

main();