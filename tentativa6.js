const btnconvert = document.querySelector('.btn-currency');
const currentCurrency = document.querySelector('.current-currency');
const currencySelect = document.querySelector('.currency-select');
const currencyToConvert = document.querySelector('.currency-value-to-convert');
const valueConverted = document.querySelector('.currency-value');


const exchangeRates = {
    USD: 5.2,
    EUR: 6.2,
    GBP: 7.2,
    BTC: 463656.80,
    BRL: 1
};

function convertValue() {
    const inputValue = document.querySelector('.input-values').value
    const fromCurrency = currentCurrency.value;
    const toCurrency = currencySelect.value;

    const exchangeRate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
    const convertedValue = inputValue / exchangeRate;

    
    const formatterTo = new Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: toCurrency.toUpperCase()
    });
    valueConverted.textContent = formatterTo.format(convertedValue);
    const formatterFrom = new Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: fromCurrency.toUpperCase()
    });
    currencyToConvert.textContent = formatterFrom.format(inputValue);
    
    
}

const currencyImages = {
    BRL : 'assets/brasil.png',
    USD: 'assets/usa.png',
    EUR: 'assets/euro.png',
    GBP: 'assets/libra.png',
    BTC: 'assets/bitcoin.png'
};

const currencyUpdateName = {
    BRL : 'Real Brasileiro',
    USD: 'Dólar Americano',
    EUR: 'Euro',
    GBP: 'Libra',
    BTC: 'Bitcoin'
};


function currencyChage() {
    const currencyImg = document.querySelector('.currency-img');
    const currencyName = document.getElementById('currency-name');

    const selectupdate = currencySelect.value;
    

    if (currencyImages[selectupdate] && currencyUpdateName[selectupdate]) {
        currencyImg.src = currencyImages[selectupdate];
        currencyName.textContent = currencyUpdateName[selectupdate];
    }
    
}   

function currentChage() {
    const currentImg = document.querySelector('.current-img');
    const currentName = document.getElementById('current-name');

    const currentUpdate = currentCurrency.value

    if(currencyImages[currentUpdate] && currencyUpdateName[currentUpdate]) {
        currentImg.src = currencyImages[currentUpdate]
        currentName.textContent = currencyUpdateName[currentUpdate];
    }
    convertValue();

}
    

currentCurrency.addEventListener('change', currentChage)
currencySelect.addEventListener('change', currencyChage)
btnconvert.addEventListener('click', convertValue)