function convertTemperature() {
    var temperature = parseFloat(document.getElementById("temperature").value);
    var unit = document.getElementById("unit").value;
    var result;

    if (unit === "celsius") {
        result = (temperature * 9/5) + 32;
        document.getElementById("result").innerText = temperature + " Celsius = " + result.toFixed(2) + " Fahrenheit";
    } else if (unit === "fahrenheit") {
        result = (temperature - 32) * 5/9;
        document.getElementById("result").innerText = temperature + " Fahrenheit = " + result.toFixed(2) + " Celsius";
    } else if (unit === "kelvin") {
        result = temperature - 273.15;
        document.getElementById("result").innerText = temperature + " Kelvin = " + result.toFixed(2) + " Celsius";
    }
}
