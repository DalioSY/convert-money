const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

const convertValues = async () => {
    const inputCurrencyValue = document.querySelector(".input-currency").value // digitar o valor no input
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")// Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value")// Outras moedas 

    const data = await fetch("https://economia.awesomeapi.com.br/last/BRL-USD,BRL-EUR,BRL-GBP,BRL-ARS,USD-BRL,USD-EUR,USD-GBP,USD-ARS,EUR-BRL,EUR-USD,EUR-GBP,EUR-ARS,GBP-BRL,GBP-USD,GBP-EUR,ARS-BRL,ARS-USD,ARS-EUR").then(response => response.json())

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const libra = data.GBPBRL.high
    const peso = data.ARSBRL.high
   
    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { //leva o valor no html
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolar) //conta para converter a moeda
           
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { //leva o valor no html
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euro) //conta para converter a moeda
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", { //leva o valor no html
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libra) //conta para converter a moeda
    }

    if (currencySelect.value == "peso") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue / peso)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-Br", { //leva o valor no html
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

function changeCurrency() {
    const currencyName = document.getElementById('currency-name')
    const currencyImage = document.querySelector('.currency-img') 

    if (currencySelect.value == "dolar") { // troca a moeda e a imagem 
        currencyName.innerHTML = 'Dólar americano'
        currencyImage.src = './assets/dolar.png'
    }
    if (currencySelect.value == "euro") { // troca a moeda e a imagem 
        currencyName.innerHTML = 'Euro'
        currencyImage.src = './assets/euro.png'
    }
    if (currencySelect.value == "libra") { // troca a moeda e a imagem 
        currencyName.innerHTML = 'Libra'
        currencyImage.src = './assets/libra.png'
    }
    if (currencySelect.value == "peso") {
        currencyName.innerHTML = "Peso argentino"
        currencyImage.src = './assets/peso.png'
    }
    
    convertValues() // converte o valor quando troca a moeda
}


currencySelect.addEventListener("change", changeCurrency)// troca a moeda 
convertButton.addEventListener("click", convertValues)//clique no botão converter