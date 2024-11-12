// Constants for currencies and their exchange rates
const currencies = {
    BRL: 1, // Brazilian Real
    USD: 5.2, // US Dollar
    EUR: 6.20, // Euro
    GBP: 7.45, // British Pound
    BTC: 472.77976 // Bitcoin
  };
  
  // DOM elements
  const btnConvert = document.querySelector('.btn-currency');
  const currencySelect = document.querySelector('.currency-select');
  const currentCurrency = document.querySelector('.current-currency');
  const inputCurrencyValue = document.querySelector('.input-values');
  const currencyValueConverted = document.querySelector('.currency-value');
  const currencyValueToConvert = document.querySelector('.currency-value-to-convert');
  const currencyName = document.getElementById('currency-name');
  const currencyImg = document.querySelector('.currency-img');
  
  // Function to convert currency
  function convert() {
    const inputValue = parseFloat(inputCurrencyValue.value);
    const fromCurrency = currentCurrency.value;
    const toCurrency = currencySelect.value;
  
    // Calculate the converted value
    const convertedValue = (inputValue / currencies[fromCurrency]) * currencies[toCurrency];
  
    // Format the converted value
    currencyValueToConvert.textContent = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(inputValue);
  
    currencyValueConverted.textContent = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(convertedValue);
  }
  
  // ... (rest of your code)

// Function to convert currency
function convert() {
    const inputValue = parseFloat(inputCurrencyValue.value);
    const fromCurrency = currentCurrency.value;
    const toCurrency = currencySelect.value;
  
    // Calculate the converted value
    const convertedValue = (inputValue / currencies[fromCurrency]) * currencies[toCurrency];
  
    // Format the converted value
    currencyValueToConvert.textContent = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(inputValue);
  
    currencyValueConverted.textContent = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(convertedValue);
  }

  function currencyChange() {
    const selectedCurrency = currencySelect.value;
    currencyName.textContent = selectedCurrency.toUpperCase();
    currencyImg.src = `assets/${selectedCurrency}.png`;
    convert();
  }
  
  // ... (rest of your code)
  
  // Event listeners
  btnConvert.addEventListener('click', convert);
  currencySelect.addEventListener('change', currencyChange);