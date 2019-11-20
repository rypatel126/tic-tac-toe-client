const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields.js')
const store = require('./store')
// when player clicks a board space, value of that element will be changed

let player = 'x'

// function that switches between players
const switchPlayer = () => {
  if (player === 'o') {
    player = 'x'
  } else {
    player = 'o'
  }
}

// const draw = index => {
//   return index !== ''
// }

// const isDraw = index => {
//   return index !== ''
// }

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
const boardArray = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']

const gameStart = () => {
  const boardArray = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
  return boardArray
}


// const checkForDraw = boardArray => {
//   if ((boardArray[0] === 'x' || 'o') && (boardArray[1] === 'x' || 'o') && (boardArray[2] === 'x' || 'o') && (boardArray[3] === 'x' || 'o') && (boardArray[4] === 'x' || 'o') && (boardArray[5] === 'x' || 'o') && (boardArray[6] === 'x' || 'o') && (boardArray[7] === 'x' || 'o') && (boardArray[8] === 'x' || 'o')) {
//     $('.draw-bar').text('DRAW')
//   }
// }

const checkForDraw = () => {
  console.log('check for draw here')
}

// const checkForDraw = boardArray => {
//   if (boardArray.every(i => i !== '')) {
//     $('draw-bar').text('draw').show()
//   }
// }

// const startGame = value => {
//   if (value === true) {
//     const boardArray = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
//     const player = 'x'
//   }
// }

//   if (boardArray.every(isDraw)) {
//     $('.results').text('No winner')
//     disableListeners()
//   } else {
//     $('.results').text(player, "'s turn'")
//   }
// }

const sendToBoardArray = (bsNumId, player) => {
  boardArray.splice(bsNumId, 1, player)
}

const disableListeners = () => {
  $('.bs').hide()
  // clearBoard(boardArray)
}

/*
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
*/

const checkForWin = boardArray => {
  if (boardArray[0] === 'x' && boardArray[1] === 'x' && boardArray[2] === 'x') {
    $('.results').html('x wins')
    disableListeners()
  } else if (boardArray[3] === 'x' && boardArray[4] === 'x' && boardArray[5] === 'x') {
    $('.results').html('x wins')
    disableListeners()
  } else if (boardArray[6] === 'x' && boardArray[7] === 'x' && boardArray[8] === 'x') {
    $('.results').html('x wins')
    disableListeners()
  } else if (boardArray[0] === 'x' && boardArray[4] === 'x' && boardArray[8] === 'x') {
    $('.results').html('x wins')
    disableListeners()
  } else if (boardArray[2] === 'x' && boardArray[4] === 'x' && boardArray[6] === 'x') {
    $('.results').html('x wins')
    disableListeners()
  } else if (boardArray[0] === 'x' && boardArray[3] === 'x' && boardArray[6] === 'x') {
    $('.results').html('x wins')
    disableListeners()
  } else if (boardArray[1] === 'x' && boardArray[4] === 'x' && boardArray[7] === 'x') {
    $('.results').html('x wins')
    disableListeners()
  } else if (boardArray[2] === 'x' && boardArray[5] === 'x' && boardArray[8] === 'x') {
    $('.results').html('x wins')
    disableListeners()
  } else if (boardArray[0] === 'o' && boardArray[1] === 'o' && boardArray[2] === 'o') {
    $('.results').html('o wins')
    disableListeners()
  } else if (boardArray[3] === 'o' && boardArray[4] === 'o' && boardArray[5] === 'o') {
    $('.results').html('o wins')
    disableListeners()
  } else if (boardArray[6] === 'o' && boardArray[7] === 'o' && boardArray[8] === 'o') {
    $('.results').html('o wins')
    disableListeners()
  } else if (boardArray[0] === 'o' && boardArray[4] === 'o' && boardArray[8] === 'o') {
    $('.results').html('o wins')
    disableListeners()
  } else if (boardArray[2] === 'o' && boardArray[4] === 'o' && boardArray[6] === 'o') {
    $('.results').html('o wins')
    disableListeners()
  } else if (boardArray[0] === 'o' && boardArray[3] === 'o' && boardArray[6] === 'o') {
    $('.results').html('o wins')
    disableListeners()
  } else if (boardArray[1] === 'o' && boardArray[4] === 'o' && boardArray[7] === 'o') {
    $('.results').html('x wins')
    disableListeners()
  } else if (boardArray[2] === 'o' && boardArray[5] === 'o' && boardArray[8] === 'o') {
    $('.results').html('o wins')
    disableListeners()
  } else {
    checkForDraw(boardArray)
  }
}

const placeMarker = event => {
  const bsId = event.target.id
  const bsNumId = () => bsId.replace('bs', '')
  // const bsNumId = () => Number.parseInt(bsId.replace('bs', ''))
  // console.log('event target is', event.target)
  // console.log('bsId is', bsId)
  // console.log('bsNumId is', bsNumId())
  // console.log(player + "'s turn'")
  // console.log('board space click works')
  if ((player === 'x') && ($(event.target).text() === '')) {
    $(event.target).html('x')
    $('.results').html('Turn: O')
    sendToBoardArray(bsNumId(), player)
    console.log('BOARD ARRAY IS', boardArray)
    checkForWin(boardArray)
    // checkForDraw(boardArray)
    switchPlayer()
  } else if ((player === 'o') && ($(event.target).text() === '')) {
    $(event.target).html('o')
    $('.results').html('Turn: X')
    sendToBoardArray(bsNumId(), player)
    console.log('BOARD ARRAY IS', boardArray)
    checkForWin(boardArray)
    // checkForDraw(boardArray)
    switchPlayer()
  } else {
    $('.results').text('Invalid move!  Click an empty box.')
  }
}

// const winningCombo = (boardArray) => {
//   boardArray.every(bsId => bsId.innerText === boardArray[0].innerText && bsId.innerText !== '')
// }

// stops user from clicking board after game has ended
// const endGame = () => {
//   disableListeners()
// }

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

// const winningCombo = (boardArray) => {
//   boardArray.every(bsId => bsId.innerText === boardArray[0].innerText && bsId.innerText !== '')
// }
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
  console.log('create game button works')
  // boardArray.clear(boardArray)
  $('.bs')
    .html('')
    .show()
    // .clear(boardArray)
  $('.results').html(' ')
  // boardArray = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
  // store.game.clear(store.game)
  gameStart(boardArray)
  console.log(boardArray)
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

// getting a single is not required?
// const onGetAGame = event => {
//   event.preventDefault()
//   console.log('get a game works')
//   api.getAGame()
//     .then(ui.onGetAGameSuccess)
//     .catch(ui.onGetAGameFailure)
// }

const onUpdateMove = event => {
api.update(id, player)
    .then(ui.onUpdateGameSuccess)
    .catch(ui.onUpdateGameFailure)
}

const addHandlers = event => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#create-game').on('click', onCreateGame)
  $('#get-all-games').on('click', onGetAllGames)
  // $('#get-a-game').on('click', onGetAGame)
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
  // onGetAGame,
  onUpdateMove
  // checkForWin
}
