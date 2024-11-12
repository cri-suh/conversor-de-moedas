const convertButton = document.querySelector(".btn-currency");
const currencySelectConverted = document.querySelector(".currency-select-converted");
const currencySelectToConvert = document.querySelector(".currency-select-to-convert");

const exchangeRates = {
dolar: 5.2,
euro: 6.2,
libra: 7.2,
bitcoin: 463656.80,
real: 1
};

function convertValues() {
let inputCurrencyValue = document.querySelector(".input-currency").value;

// Substitui vírgula por ponto para garantir a formatação correta
inputCurrencyValue = parseFloat(inputCurrencyValue.replace(",", "."));

if (isNaN(inputCurrencyValue)) {
alert("Por favor, insira um valor numérico válido.");
return;
}

const currencyValueConverted = document.querySelector(".currency-value-converted");
const fromCurrency = currencySelectToConvert.value;
const toCurrency = currencySelectConverted.value;

// Calcula a taxa de conversão
const fromRate = exchangeRates[fromCurrency];
const toRate = exchangeRates[toCurrency];
const conversionResult = (inputCurrencyValue * fromRate) / toRate;

// Tratamento especial para Bitcoin
if (toCurrency === "bitcoin") {
currencyValueConverted.innerHTML = `${conversionResult.toFixed(10)} BTC;`
} else {
currencyValueConverted.innerHTML = new Intl.NumberFormat(getLocale(toCurrency), {
style: "currency",
currency: getCurrencyCode(toCurrency)
}).format(conversionResult);
}

// Atualiza o valor exibido para a moeda de entrada
updateInputCurrencyDisplay(inputCurrencyValue);
}

function getLocale(currency) {
const locales = {
dolar: "en-US",
euro: "de-DE",
libra: "en-UK",
bitcoin: "en-US",
real: "pt-BR"
};
return locales[currency];
}

function getCurrencyCode(currency) {
const codes = {
dolar: "USD",
euro: "EUR",
libra: "GBP",
bitcoin: "BTC",
real: "BRL"
};
return codes[currency];
}

function updateCurrencyDisplay(selectElement, nameElementId, imgClass) {
const currencyName = document.getElementById(nameElementId);
const currencyImg = document.querySelector(imgClass);
const currency = selectElement.value;

const currencyNames = {
dolar: "Dólar",
euro: "Euro",
libra: "Libra",
bitcoin: "Bitcoin",
real: "Real"
};

const currencyImages = {
dolar: "./assets/dolar.png",
euro: "./assets/euro.png",
libra: "./assets/libra.png",
bitcoin: "./assets/bitcoin.png",
real: "./assets/brasil.png"
};

currencyName.innerHTML = currencyNames[currency];
currencyImg.src = currencyImages[currency];
}

function updateInputCurrencyDisplay(inputCurrencyValue) {
const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
const fromCurrency = currencySelectToConvert.value;

currencyValueToConvert.innerHTML = new Intl.NumberFormat(getLocale(fromCurrency), {
style: "currency",
currency: getCurrencyCode(fromCurrency)
}).format(inputCurrencyValue);
}

function changeCurrencyFirst() {
updateCurrencyDisplay(currencySelectToConvert, "currency-name-first", ".currency-img-first");
}

function changeCurrencySecond() {
updateCurrencyDisplay(currencySelectConverted, "currency-name-second", ".currency-img-second");
}

// Eventos
currencySelectToConvert.addEventListener("change", changeCurrencyFirst);
currencySelectConverted.addEventListener("change", changeCurrencySecond);
convertButton.addEventListener("click", convertValues);