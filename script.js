const botaoConverter = document.querySelector('button');
const currencySelect = document.querySelector('.currency-select');
const currentCurrency = document.querySelector('.current-currency')


function converter() {
    const inputCurrencyValue = document.querySelector('.input-values').value
    const currencyValueToConvert = document.querySelector('.currency-value-to-convert')
    const currencyValueConverted = document.querySelector('.currency-value')
    
    let dolarTody = 5.2
    let euroToday = 6.2
    let libraToday = 7.4
    let bitcoinToday = 442.49723
    let realToday = 1

    if(currentCurrency.value == 'usa') {
        euroToday = 0.93
        libraToday = 0.77
        bitcoinToday = 0.000013
        realToday = 5.2
        
    }

    if(currentCurrency.value == 'euro') {
        dolarTody = 1.08
        libraToday = 0.83
        bitcoinToday = 0.000014
        realToday = 6.2
    }

    if(currentCurrency.value == 'bitcoin') {
        dolarTody = 76.04171
        libraToday = 58.54876
        euroToday = 70.41136
        realToday = 434.19537
    }
    
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