const btnConvert = document.querySelector('.btn-currency');
const currencySelect = document.querySelector('.currency-select') // seletor de moedas a ser convertida
const currentCurrency = document.querySelector('.current-currency') // moeda atual

    //função para converter moedas de real para moeda selecionada
function convert() {
        const inputCurrencyValue = document.querySelector('.input-values').value //valor digitado
        const currencyValueConverted = document.querySelector('.currency-value') // outras moedas
        const currencyValueToConvert = document.querySelector('.currency-value-to-convert') // valor em real

        const dolarToday = 5.2
        const euroToday = 6.20
        const libraToday = 7.45
        const bitcoinToday = 472.77976


        //formatando a moeda que vai ser convertida
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputCurrencyValue)

        //condição para formatar a modeda de acordo com a seleção
        if(currencySelect.value == 'dolar' ) {
            currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
                style: 'currency', 
                currency: 'USD'
            }).format(inputCurrencyValue/dolarToday)
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
}


function currencyChange() {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.querySelector('.currency-img')

    if(currencySelect.value == 'dolar') {
        currencyName.innerHTML = 'Dólar americano'
        currencyImg.src = 'assets/usa.png'
    }
    if(currencySelect.value == 'euro') {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = 'assets/euro.png'
    }
    if(currencySelect.value == 'bitcoin') {
        currencyName.innerHTML = 'Bitcoin'
        currencyImg.src = 'assets/bitcoin.png'
    }
    if(currencySelect.value == 'libra') {
        currencyName.innerHTML = 'Libra'
        currencyImg.src = 'assets/libra.png'
    }

    convert();
}

btnConvert.addEventListener('click', convert)
currencySelect.addEventListener('change', currencyChange)
