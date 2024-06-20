const roundContainer = document.querySelector('#round_container')
const instruction_para = document.querySelector('#instruction_para')
const buttons = document.querySelectorAll('button')

const choices = [
  "rock",
  "paper",
  "scissors"
]

let round = 1

function resetGame() {
  round = 1
  instruction_para.textContent = 'Select your choice ...'
}
  

function getComputerChoice() {
  const random = Math.floor(Math.random() *3)

  return choices[random]
}


buttons.forEach(
  btn => {
    btn.addEventListener('click', () => {
      roundContainer.textContent = round

      if (round >= 5) {
        resetGame()
        return
      }

      playRound(btn.textContent.toLowerCase(), getComputerChoice())
      round++
    })
  }
)

// function getHumanChoice() {
  
//   const userChoice = prompt('Choose Rock - 0, Paper - 1, Scissors - 2')

//   return choices[userChoice]
// }

function validChoice(choice) {
  return choices.includes(choice)
}

function playRound(humanChoice, computerChoice) {
  if(validChoice(humanChoice) && validChoice(computerChoice)) {
    if (
      humanChoice === 'rock' && computerChoice === 'scissor' ||
      humanChoice === 'paper' && computerChoice === 'rock' ||
      humanChoice === 'scissors' && computerChoice === 'paper'
    ) {
      displayResult('Human Win')
    } else {
      displayResult('Computer win')
    }
  } else {
    displayResult('Error')
  }
}

function displayResult(result) {
  instruction_para.textContent = result
}
