console.log('Lets play Rock Paper Scissors!');

function getComputerChoice() {
  const randomNumber = Math.floor((Math.random() * 3))

  switch (randomNumber) {
    case 0:
      return 'Rock';
      break;
    case 1:
      return 'Scissors';
      break;
    case 2:
      return 'Paper';
      break;
    default:
      return 'Woops, error getting a computer option!'
  }

}

