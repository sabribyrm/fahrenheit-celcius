let girilenDerece = parseInt(prompt("Fahrenheit Giriniz...")) ;
let celcius = (5 / 9 * (girilenDerece - 32));
document.write(`Girdiğiniz değer: ${girilenDerece} Fahrenheit = ${celcius.toFixed(2)} Celcius`);
