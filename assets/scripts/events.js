const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields.js')
// when player clicks a board space, value of that element will be changed

console.error('Page has reloaded')

let player = 'x'

// function that switches between players
const switchPlayer = () => {
  if (player === 'o') {
    player = 'x'
  } else {
    player = 'o'
  }
}

// '', '', '', '', '', '', '', ''

// const boardArray = []
// const boardArrayInput = () => {
//   boardArray.splice(bsId, 1, player)
// }
const sendToBoardArray = (bsNumId, player) => {
  boardArray.splice(bsNumId, 1, player)
}

// const boardArray = () => {
//   Array.from(document.getElementsByClassName('.col'))
// }
// console.log('BOARD ARRAY IS', boardArray())

// let boardArray = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
//
//
// const sendToBoardArray = (bsNumId, player) => {
//   boardArray.splice(bsNumId, 1, player)
// }

const placeMarker = event => {

  const bsId = event.target.id
  const bsNumId = () => Number.parseInt(bsId.replace('bs', ''))
  console.log('event target is', event.target)
  console.log('bsId is', bsId)
  console.log('bsNumId is', bsNumId())
  console.log(player + "'s turn'")
  // const bsNum = (bsId) => { Number.parseInt(bsId.id.replace('bs', '')) }
  console.log('board space click works')
  // sendToBoardArray(bsNumId, player)
  // // const board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
  // console.log('BOARD ARRAY IS', board)
  // const sendToBoardArray = (bsNumId, player) => {
  //   board.splice(bsNumId, 1, player)
  // }

  // const board = []

  // sendToBoardArray(bsNumId, player)
  // const boardArrayInput = (bsId, player) => {
  //   boardArray.splice(bsId, 1, player)
  // }

  // const bsNumId = (bsId) => {
  //   Number.parseInt(bsId.id.replace('bs', ''))
  // }

  if ((player === 'x') && ($(event.target).text() === '')) {
    $(event.target).html('x')
    $('.results').html('Turn: O')
    sendToBoardArray(bsNumId, player)
    switchPlayer()
  } else if ((player === 'o') && ($(event.target).text() === '')) {
    $(event.target).html('o')
    $('.results').html('Turn: X')
    sendToBoardArray(bsNumId, player)
    switchPlayer()
    // const board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    console.log('BOARD ARRAY IS', boardArray)
  } else {
    $('.results').text('Invalid move!  Click an empty box.')
  }
  // sendToBoardArray(bsNumId, player)
  // // const board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
  // console.log('BOARD ARRAY IS', board)
}

const boardArray = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']





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
  boardArray.every(bsId => bsId.innerText === boardArray[0].innerText && bsId.innerText !== '')
}

const endGame = () => {
  disableListeners()
}


// this stops user from clicking board after game has ended
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
  // NEED TO INCLUDE GAME START HERE?
  api.createGame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}

const onGetAllGames = event => {
  event.preventDefault()
  console.log('get all games works')
  api.getAllGames()
    .then(ui.onGetAllGamesSuccess)
    .catch(ui.onGetAllGamesFailure)
}

const onGetAGame = event => {
  event.preventDefault()
  console.log('get a game works')
  api.getAGame()
    .then(ui.onGetAGameSuccess)
    .catch(ui.onGetAGameFailure)
}

const addHandlers = event => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#create-game').on('click', onCreateGame)
  $('#get-all-games').on('click', onGetAllGames)
  $('#get-a-game').on('click', onGetAGame)
}

module.exports = {
  placeMarker,
  switchPlayer,
  addHandlers,
  onSignIn,
  onSignUp,
  onChangePassword,
  onSignOut,
  onCreateGame,
  onGetAllGames,
  onGetAGame
  // checkForWin
}
