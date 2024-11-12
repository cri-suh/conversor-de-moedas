const btnConvert = document.querySelector('.btn-currency');
const currencySelectToConvert = document.querySelector('.current-currency');
const currencySelectConverted = document.querySelector('.currency-select');
const inputCurrencyValue = document.querySelector('.input-values');
const currencyValueToConvert = document.querySelector('.currency-value-to-convert');
const currencyValueConverted = document.querySelector('.currency-value');
const currentCurrencyName = document.getElementById('current-name');
const currentCurrencyImg = document.querySelector('.current-img');
const convertedCurrencyName = document.getElementById('currency-name');
const convertedCurrencyImg = document.querySelector('.currency-img');

const exchangeRates = {
  brasil: 1,
  usa: 0.2,
  libra: 0.18,
  euro: 0.16,
  bitcoin: 0.000000043
};

function convertValue() {
    const inputValue = parseFloat(inputCurrencyValue.value.replace(',', '.'));

    if (isNaN(inputValue)) {
      alert('Por favor, insira um valor numérico válido.');
      return;
    }
    const fromCurrency = currencySelectToConvert.value;
    const toCurrency = currencySelectConverted.value;

    const fromRate = exchangeRates[fromCurrency];
    const toRate = exchangeRates[toCurrency];

    const convertedValue = (inputValue * fromRate) / toRate;

  // Format the converted value based on the target currency
    const formattedValue = formatCurrency(convertedValue, toCurrency);

    currencyValueConverted.textContent = formattedValue;

  // Atualiza o display da moeda de destino
  updateCurrencyDisplay(currencySelectConverted, convertedCurrencyName, convertedCurrencyImg);

  // Atualiza o display da moeda de origem
  updateCurrencyDisplay(currencySelectToConvert, currentCurrencyName, currentCurrencyImg);
}

function updateCurrencyDisplay(selectElement, nameElement, imageElement) {
  const selectedCurrency = selectElement.value;
  nameElement.textContent = getCurrencyName(selectedCurrency);
  imageElement.src = getCurrencyImage(selectedCurrency);
}

function getCurrencyName(currency) {
    const currencyNames = {
      brasil: 'Real Brasileiro',
      usa: 'Dólar Americano',
      libra: 'Libra Esterlina',
      euro: 'Euro',
      bitcoin: 'Bitcoin'
    };
    return currencyNames[currency] || 'Moeda não encontrada'; // Retorna "Moeda não encontrada" caso a moeda não exista
}
  
function getCurrencyImage(currency) {
    const currencyImages = {
      brasil: 'assets/brasil.png',
      usa: 'assets/usa.png',
      libra: 'assets/libra.png',
      euro: 'assets/euro.png',
      bitcoin: 'assets/bitcoin.png'
    };
    return currencyImages[currency] || 'assets/default.png'; // Retorna uma imagem padrão caso a imagem não exista
}
  
function getCurrencyCode(currency) {
    const currencyCodes = {
      brasil: 'BRL',
      usa: 'USD',
      libra: 'GBP',
      euro: 'EUR',
      bitcoin: 'BTC'
    };
    return currencyCodes[currency] || 'XXX'; // Retorna um código padrão para moeda desconhecida
}

// Adiciona os event listeners para atualizar o display ao mudar o seletor
currencySelectToConvert.addEventListener('change', () => updateCurrencyDisplay(currencySelectToConvert, currentCurrencyName, currentCurrencyImg));
currencySelectConverted.addEventListener('change', () => updateCurrencyDisplay(currencySelectConverted, convertedCurrencyName, convertedCurrencyImg));

btnConvert.addEventListener('click', convertValue);