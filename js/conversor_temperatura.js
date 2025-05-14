const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function celsiusParaFahrenheit(c) {
    return (c * 9/5) + 32;
}

function fahrenheitParaCelsius(f) {
    return (f - 32) * 5/9;
}

rl.question("Digite a temperatura (ex: 30C ou 86F): ", (entrada) => {
    const valor = parseFloat(entrada);
    const escala = entrada.slice(-1).toUpperCase();

    if (escala === "C") {
        console.log(`${valor}°C = ${celsiusParaFahrenheit(valor).toFixed(2)}°F`);
    } else if (escala === "F") {
        console.log(`${valor}°F = ${fahrenheitParaCelsius(valor).toFixed(2)}°C`);
    } else {
        console.log("Formato inválido. Use 'C' para Celsius ou 'F' para Fahrenheit.");
    }

    rl.close();
});    
