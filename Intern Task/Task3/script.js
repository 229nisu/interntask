// Get elements
const temperatureInput = document.getElementById('temperature');
const unitSelect = document.getElementById('unit');
const convertBtn = document.getElementById('convertBtn');
const resultDiv = document.getElementById('result');

// Add click event listener to the convert button
convertBtn.addEventListener('click', () => {
    // Get user input
    const temperature = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;

    // Validate input
    if (isNaN(temperature)) {
        resultDiv.textContent = 'Please enter a valid temperature';
        return;
    }

    // Perform conversion
    let convertedTemperature;
    let convertedUnit;
    if (unit === 'celsius') {
        convertedTemperature = celsiusToFahrenheit(temperature);
        convertedUnit = '°F';
    } else if (unit === 'fahrenheit') {
        convertedTemperature = fahrenheitToCelsius(temperature);
        convertedUnit = '°C';
    } else if (unit === 'kelvin') {
        convertedTemperature = kelvinToCelsius(temperature);
        convertedUnit = '°C';
    }

    // Display result
    resultDiv.textContent = `Converted temperature: ${convertedTemperature}${convertedUnit}`;
});

// Conversion functions
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}
