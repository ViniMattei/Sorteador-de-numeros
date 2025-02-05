const container = document.getElementById("draw-numbers-container")
const form = document.querySelector("form")
const drawAgainButton = document.getElementById("draw-again")
const resultContainer = document.getElementById("number-draw-results")
const title = document.getElementsByClassName("title")
const titleContainer = document.getElementsByClassName("title-container")
let numerosSorteados = []

document.addEventListener("DOMContentLoaded", () => {
  resultContainer.style.display = "none"
})

function generateRamdomNumbers(minNumber, maxNumber, numberQuantity) {
  let numbers = []
  for (let i = 0; i < numberQuantity; i++) {
    let number = Math.floor(
      Math.random() * (maxNumber - minNumber + 1) + minNumber
    )
    numbers.push(number)
  }
  return numbers
}

function generateRamdomNumbersNoRepeat(minNumber, maxNumber, numberQuantity) {
  let numbers = []
  while (numbers.length < numberQuantity) {
    let number = Math.floor(
      Math.random() * (maxNumber - minNumber + 1) + minNumber
    )
    if (!numbers.includes(number)) {
      numbers.push(number)
    }
  }
  return numbers
}

function displayNumbers() {
  let numbersList = document.getElementById("draw-numbers-container")
  let result = document.getElementById("result-number")

  numbersList.innerHTML = ""
  result.innerText = numerosSorteados.length

  numerosSorteados.forEach((num) => {
    let div = document.createElement("div")
    let span = document.createElement("span")

    div.classList.add("number-container")
    span.innerText = num

    div.appendChild(span)
    numbersList.appendChild(div)
  })
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault()

  drawNumbers()
})

document.getElementById("draw-again").addEventListener("click", function () {
  let numbersList = document.getElementById("draw-numbers-container")
  numbersList.innerHTML = ""

  drawNumbers()

  form.style.display = "block"
  title[0].style.display = "block"

  resultContainer.style.display = "none"
})

function drawNumbers() {
  const numberQuantity = parseInt(
    document.getElementById("numbers-quantity").value
  )
  const minNumber = parseInt(document.getElementById("min-number").value)
  const maxNumber = parseInt(document.getElementById("max-number").value)

  if (minNumber >= maxNumber) {
    alert("Número invalido")
    return
  }

  const noRepeat = document.getElementById("switch").checked

  numerosSorteados = noRepeat
    ? generateRamdomNumbersNoRepeat(minNumber, maxNumber, numberQuantity)
    : generateRamdomNumbers(minNumber, maxNumber, numberQuantity)

  displayNumbers()

  form.style.display = "none"
  title[0].style.display = "none"

  resultContainer.style.display = "block"
}
