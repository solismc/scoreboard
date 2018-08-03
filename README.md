# Scoreboard


const playerOnePaperButtonClick = () => {
  console.log('paper button is clicked')
  
document.querySelector('.answer-output').textContent = 'paper'
}

document.querySelector('.paper-button-player-one').addEventListener('click', playerOnePaperButtonClick)