


const homeTeamNameButtonClick = () => {
  console.log('Home Team name button is clicked')
  let updateHomeTeamName = document.querySelector('.update-home-team-name-output') 
  console.log(updateHomeTeamName)
  let newName = document.querySelector('#home-team-name').textContent
//  updateHomeTeamName.textContent = newName.textContent
  console.log(newName.textContent)
}
document.querySelector('.update-home-team-button').addEventListener('click', homeTeamNameButtonClick)


const addOneToHomeTeamScore = () => {
  console.log('button is clicked')


}

document.querySelector('.add-one-to-home-team-score').addEventListener('click', addOneToHomeTeamScore)

const substractOneToHomeTeamScore = () => {
  console.log('button is clicked')


}

document.querySelector('.substract-one-to-home-team-score').addEventListener('click', substractOneToHomeTeamScore)