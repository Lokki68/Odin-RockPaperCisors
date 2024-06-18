console.log('Hello world')

const choices = [
  "rock",
  "paper",
  "scissors"
]

function getComputerChoice() {
  const random = Math.floor(Math.random() *3)

  return choices[random]
}

function getHumanChoice() {
  
  const userChoice = prompt('Choose Rock - 0, Paper - 1, Scissors - 2')

  return choices[userChoice]
}

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
      alert('Human Win')
    } else {
      alert('Computer win')
    }
  } else {
    alert('Error')
  }
}

const computerSelection = getComputerChoice()
const humanSelection = getHumanChoice()

playRound(humanSelection, computerSelection)