function convertTemperature() {
    const celsuisInput = document.getElementById(´celsuis´ );
    const fahrenheitInput = document.getElementById(´fahrenheit´);
    const resultDiv = document.getElementById(´result´);

    var celsuisValue = parseFloat(celsuisInput.value);
    var fahrenheitValue = parseFloat(fahrenheitInput.value);

    if (!isNaN(celsuisValue)) {
        var convertedfahrenheit = (celsuisValue * 9) / 5 + 32;
        resultDiv.innerHTML =
        celsuisValue +
        ´ &deg;C is equa to ´ +
        convertedfahrenheit.toFixed(2) +
        ´ &deg;F´;
        fahrenheitInput.value = convertedfahrenheit.toFixed(2);
    } else if (!isNaN(fahrenheitValue)) {
        var convertedCelsius = ((fahrenheitValue - 32)  * 5) / 9;
        resultDiv.innerHTML =
        fahrenheitValue +
        ´ &deg;F is equal to ´ +
        convertedCelsius.toFixed(2) +
        ´ &deg;C´;
        celsuisInput.value = convertedCelsius.toFixed(2);
    } else {
        resultDiv.innerHTML = ´Please enter a valid temperature.´;
    }
}     

