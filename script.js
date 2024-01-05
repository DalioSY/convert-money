const convertButton = document.querySelector(".convert-button")
const correncySelect = document.querySelector(".currency-select")

const dolarToday = 5.2
const euroToday = 6.2
const libraToday = 4.2
const bitcoinToday = 7.2


function convertValues() { // função quando é clicado funciona
    const inputCurrencyValue = document.querySelector(".input-currency").value // digitar o valor no input
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")// Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value")// Outras moedas 

    if (correncySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { //leva o valor no html
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday) //conta para converter a moeda
    }

    if (correncySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { //leva o valor no html
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday) //conta para converter a moeda
    }

    if (correncySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", { //leva o valor no html
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / euroToday) //conta para converter a moeda
    }

    if (correncySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { //leva o valor no html
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / euroToday) //conta para converter a moeda
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-Br", { //leva o valor no html
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

function changeCurrency() {
    const currencyName = document.getElementById('currency-name')
    const currencyImage = document.querySelector('.currency-img') 

    if (correncySelect.value == "dolar") { // troca a moeda e a imagem 
        currencyName.innerHTML = 'Dólar americano'
        currencyImage.src = './assets/dolar.png'
    }
    if (correncySelect.value == "euro") { // troca a moeda e a imagem 
        currencyName.innerHTML = 'Euro'
        currencyImage.src = './assets/euro.png'
    }
    if (correncySelect.value == "libra") { // troca a moeda e a imagem 
        currencyName.innerHTML = 'Libra'
        currencyImage.src = './assets/libra.png'
    }
    if (correncySelect.value == "bitcoin") { // troca a moeda e a imagem 
        currencyName.innerHTML = 'Bitcoin'
        currencyImage.src = './assets/bitcoin.png'
    }
    convertValues() // converte o valor quando troca a moeda
}

correncySelect.addEventListener("change", changeCurrency)// troca a moeda 
convertButton.addEventListener("click", convertValues)//clique no botão converter