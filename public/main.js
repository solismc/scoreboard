
const main = () => {
  document.querySelector('h1').textContent += '?'
}

document.addEventListener('DOMContentLoaded', main)


const updateTeamTwoName=()=> {
  console.log('updated')
  console.log('button was clicked')
}


const buttonClickEvent = () => {
  console.log('button was clicked')
  const newTeamName = document.querySelector('new-home-team').value
  document.querySelector('.team1').textContent = newTeamName
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.home-team-update').addEventListener('click', buttonClickEvent)
document.querySelector('.away-team-update').addEventListener('click', buttonClickEvent)




document.querySelector('.update-team-one-button').addEventListener('click',updateTeamOneName)
document.querySelector('.output1').textContent
document.querySelector('.update-team-two-button').addEventListener('click',updateTeamTwoName)

const updateTeamOneName=()=> {
  console.log('updated')
}