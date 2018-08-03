


const homeTeamNameButtonClick = () => {
  console.log('Home Team name button is clicked')
  let newName = document.querySelector('#home-team-name').value
  document.querySelector('.update-home-team-name-output').textContent = newName
  console.log(newName)
}
document.querySelector('.update-home-team-button').addEventListener('click', homeTeamNameButtonClick)


const addOneToHomeTeamScore = () => {
  console.log('button is clicked')
  const currentScore = document.querySelector('.home-team-score-output').textContent
  const newScore = parseInt(currentScore) + 1
  document.querySelector('.home-team-score-output').textContent = newScore
}

document.querySelector('.add-one-to-home-team-score').addEventListener('click', addOneToHomeTeamScore)

const substractOneToHomeTeamScore = () => {
  console.log('button is clicked')
  const currentScore = document.querySelector('.home-team-score-output').textContent
  const newScore = parseInt(currentScore) - 1
  document.querySelector('.home-team-score-output').textContent = newScore


}

document.querySelector('.substract-one-to-home-team-score').addEventListener('click', substractOneToHomeTeamScore)

const awayTeamNameButtonClick = () => {
  console.log('Away Team name button is clicked')
  let newName = document.querySelector('#away-team-name').value
  document.querySelector('.update-away-team-name-output').textContent = newName
  console.log(newName)
}
document.querySelector('.update-away-team-button').addEventListener('click', awayTeamNameButtonClick)

const addOneToAwayTeamScore = () => {
  console.log('button is clicked')
  const currentScore = document.querySelector('.away-team-score-output').textContent
  const newScore = parseInt(currentScore) + 1
  document.querySelector('.home-team-score-output').textContent = newScore
}

document.querySelector('.add-one-to-home-team-score').addEventListener('click', addOneToHomeTeamScore)