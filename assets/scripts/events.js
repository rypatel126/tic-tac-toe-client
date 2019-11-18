const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields.js')
// when player clicks a board space, value of that element will be changed

console.error('Page has reloaded')

let player = 'x'

// function that switches between players
const switchPlayer = () => {
  if (player === 'x') {
    player = 'o'
  } else {
    player = 'x'
  }
}

const placeMarker = event => {
  const bsId = event.target.id
  console.log('board space click works')
  if ((player === 'x') && ($(event.target).text() === '')) {
    $(event.target).html('x')
    $('.results').html('Turn: O')
    switchPlayer()
  } else if ((player === 'o') && ($(event.target).text() === '')) {
    $(event.target).html('o')
    $('.results').html('Turn: X')
    switchPlayer()
  } else {
    $('.results').text('You clicked this box already.')
  }
  boardArrayInput(bsId, player)
  console.log(boardArray)
  console.log(boardArrayInput())
}

const boardArray = []

// const bsId = event.target.id

const boardArrayInput = (bsId, player) => {
  boardArray.splice(bsId, 0, player)
}


const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8]
]

// const bsId = (bsEl) => Number.parseInt(bsEl.id.replace('bs', ''))
const winningCombo = (boardArray) => {
  boardArray.every(bsEl => bsEl.innerText === boardArray[0].innerText && bsEl.innerText !== '')
}

const endGame = () => {
  disableListeners()
}

const disableListeners = () => $('.bs').removeEventListener('click', placeMarker)

/*
In order to win the game, player must have 3 of the same markers in a row
Set board up as an array

board = [0, 1, 2, 3, 4, 5, 6, 7, 8]
where board[i] corresponds to:
0 1 2
3 4 5
6 7 8

Winning combinations:
0 1 2
3 4 5
6 7 8
0 3 6
1 4 7
2 5 8
0 4 8
2 4 6

when a player inputs an X or an O, that value is .push-ed into the board array?

// arrays to hold player moves; start as undefined, based on moves they make, value will be inputted into the corresponding playerOne/TwoMoves[i]
// const playerOneMoves = []
// const playerTwoMoves = []

iterate through each player array and if any of the winning combinations are present in either array, that player will win.
*/

// API EVENTS BELOW:

const onSignUp = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  console.log('sign up works')
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  console.log('sign in works')
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePassword = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  console.log('change password works')
  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onSignOut = event => {
  event.preventDefault()
  // doesn't need formData because there is no data to submit
  console.log('sign out works')
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onCreateGame = event => {
  event.preventDefault()
  console.log('create game works')
}

const addHandlers = event => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#create-game').on('click', onCreateGame)
}

module.exports = {
  placeMarker,
  switchPlayer,
  addHandlers,
  onSignIn
  // checkForWin
}
