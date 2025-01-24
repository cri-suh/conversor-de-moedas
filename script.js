const botaoConverter = document.querySelector('button');
const currencySelect = document.querySelector('.currency-select');
const currentCurrency = document.querySelector('.current-currency')


async function converter() {
    const inputCurrencyValue = document.querySelector('.input-values').value
    const currencyValueToConvert = document.querySelector('.currency-value-to-convert')
    const currencyValueConverted = document.querySelector('.currency-value')

    const data = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').then(Response => Response.json());
    console.log(data)
    
    let dolarTody = data.USD.high
    let euroToday = data.EUR.high
    let libraToday = data.GBP.high
    let bitcoinToday = data.BTC.high

    if(currencySelect.value == 'dolar' ) {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency', 
            currency: 'USD'
        }).format(inputCurrencyValue/dolarTody)
    }

    if(currencySelect.value == 'euro'){
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency', 
            currency: 'EUR'
        }).format(inputCurrencyValue/euroToday)
    }
    if(currencySelect.value == 'libra'){
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency', 
            currency: 'GBP'
        }).format(inputCurrencyValue/libraToday)
    }
    if(currencySelect.value == 'bitcoin'){
        currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency', 
            currency: 'BTC'
        }).format(inputCurrencyValue/bitcoinToday)
    }
    
    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency', 
        currency: 'BRL'
    }).format(inputCurrencyValue) 
   
      
}

function changeCurrency() {
    const currencyName = document.getElementById
    ('currency-name')
    const currencyImg = document.querySelector('.currency-img')
    

    if(currencySelect.value == 'dolar') {
        currencyName.innerHTML = 'Dólar' 
        currencyImg.src = 'assets/usa.png'
    
    }
    if(currencySelect.value == 'euro') {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = 'assets/euro.png'
    }
    if(currencySelect.value == 'libra') {
        currencyName.innerHTML = 'Libra'
        currencyImg.src = 'assets/libra.png'
    }
    if(currencySelect.value == 'bitcoin') {
        currencyName.innerHTML = 'Bitcoin'
        currencyImg.src = 'assets/bitcoin.png'
    }
    if(currencySelect.value == 'brasil') {
        currencyName.innerHTML = 'Real'
        currencyImg.src = 'assets/brasil.png'
    }

    converter();

}

function currentChage() {
    const currentName = document.getElementById('current-name')
    const currentImg = document.querySelector('.current-img')

    if(currentCurrency.value == 'usa') {
       currentName.innerHTML = 'Dólar'
       currentImg.src = 'assets/usa.png' 
    }
    if(currentCurrency.value == 'euro') {
        currentName.innerHTML = 'Euro'
        currentImg.src = 'assets/euro.png'
    }
}


currentCurrency.addEventListener('change', currentChage)
currencySelect.addEventListener('change', changeCurrency)
botaoConverter.addEventListener('click', converter)