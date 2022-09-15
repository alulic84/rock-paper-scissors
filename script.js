console.log('Lets play Rock Paper Scissors!');

function getComputerChoice() {
  const randomNumber = Math.floor((Math.random() * 3))

  switch (randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    default:
      return 'Woops, error getting a computer option!'
  }

}

function playRound(playerSelection, computerSelection) {
  const playerChoice = playerSelection.toLowerCase();

  console.log(`Your choice: ${playerSelection}, Computers choice: ${computerSelection}.`)  

  if (playerChoice !== 'rock' && playerChoice !== 'paper' && playerChoice !== 'scissors') {
    return "That's not a valid choice. Try using 'rock' 'paper' or 'scissors'.";
  }

  if (playerChoice === 'rock' && computerSelection == 'scissors')
    return 'You Win! Rock beats Scissors.';
  if (playerChoice === 'paper' && computerSelection == 'rock')
    return 'You Win! Paper beats Rock.';
  if (playerChoice === 'scissors' && computerSelection == 'paper')
    return 'You Win! Scissors beats Paper.';
  
  if (playerChoice === 'rock' && computerSelection == 'paper')
    return 'You Lose! Paper beats Rock.';
  if (playerChoice === 'paper' && computerSelection == 'scissors')
    return 'You Lose! Scissors beats Paper.';
  if (playerChoice === 'scissors' && computerSelection == 'rock')
    return 'You Lose! Rock beats Scissors.';

  return 'There was no winner! Play again!'
}

function game() {
  console.log('Starting the game!')
  for (let i = 0; i < 5; i++) {
    console.log(`Round ${i + 1}:`)
    const playerSelection = prompt('Enter your selection: ')
    console.log(playRound(playerSelection, getComputerChoice()))
  }
  console.log('Game over.')

}

game();