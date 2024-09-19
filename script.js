const convertButton = document.querySelector(".convert-button") //botão converter 
const currencySelect = document.querySelector(".currency-select") // seleção de moeda

const convertValues = async () => {
    const inputCurrencyValue = document.querySelector(".input-currency").value // digitar o valor no input
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")// Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value")// Outras moedas 

    const data = await fetch("https://economia.awesomeapi.com.br/last/BRL-USD,BRL-EUR,BRL-GBP,BRL-ARS,USD-BRL,USD-EUR,USD-GBP,USD-ARS,EUR-BRL,EUR-USD,EUR-GBP,EUR-ARS,GBP-BRL,GBP-USD,GBP-EUR,ARS-BRL,ARS-USD,ARS-EUR").then(response => response.json())

    console.log(data)

    const dolar = data.USDBRL.bid
    const euro = data.EURBRL.bid
    const libra = data.GBPBRL.bid
    const peso = data.ARSBRL.bid
   
    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { 
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolar)   
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { 
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euro) 
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", { 
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libra)
    }

    if (currencySelect.value == "peso") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue / peso)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-Br", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

//
function changeCurrency() {
    const currencyName = document.getElementById('currency-name')
    const currencyImage = document.querySelector('.currency-img') 

    if (currencySelect.value == "dolar") { 
        currencyName.innerHTML = 'Dólar Americano'
        currencyImage.src = './assets/dolar.png'
    }
    if (currencySelect.value == "euro") { 
        currencyName.innerHTML = 'Euro'
        currencyImage.src = './assets/euro.png'
    }
    if (currencySelect.value == "libra") { 
        currencyName.innerHTML = 'Libra'
        currencyImage.src = './assets/libra.png'
    }
    if (currencySelect.value == "peso") {
        currencyName.innerHTML = "Peso Argentino"
        currencyImage.src = './assets/peso.png'
    }
    
    convertValues() // converte o valor quando troca a moeda
}


currencySelect.addEventListener("change", changeCurrency)// troca a moeda 
convertButton.addEventListener("click", convertValues)//clique no botão converter