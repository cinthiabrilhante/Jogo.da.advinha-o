
const randomNumber = Math.round(Math.random()* 10) 
let xAttempts = 1

// funcao callback
function handleTryClick(event) {
  event.preventDefault()
  
  const inputNumber = document.querySelector("#inputNumber")

  if(Number(inputNumber.value) == randomNumber) {
    document.querySelector(".screen1").classList.add("hide")
    document.querySelector("screen2").classList.remove("hide")

    document
    .querySelector(".screen2 h2")
    .innerText = `acertou em ${xAttempts} tentativas`

  }

  xAttempts++

}

// evento

const btnTry = document.querySelector("#btnTry")
const btnReset= document.querySelector("#btnReset")

btnTry.addEventListener('click', handleTryClick )
btnReset.addEventListener('click', function() {
  
})