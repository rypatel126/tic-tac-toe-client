
// when player clicks a board space, value of that element will be changed

let player = 'O'

// player needs to alternate between X and O
const switchPlayer = () => {
  if (player === 'O') {
    player = 'X'
  } else {
    player = 'O'
  }
}

const placeMarker = event => {
  // when player clicks a board space, value of that element will be changed to X
  console.log('click worked', event)
  // after x is inputted, switchPlayer will change the value in the board space to O
  switchPlayer()
  if ((player === 'X') && ($(event.target).html() === '')) { // if it's X's turn and the box they click is undefined (ie empty), an X or O will be placed in the box depending on turn
    $(event.target).text(player)
  } else {
    $(event.target).text(player)
  }
}
// ((player === 'O') && ($(event.target).html() === '')) not needed because of else {}

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
const board = [0, 1, 2, 3, 4, 5, 6, 7, 8]



const winRow1 = [board[0], board[1], board[2]]
const winRow2 = [board[3], board[4], board[5]]
const winRow3 = [board[6], board[7], board[8]]
const winCol1 = [board[0], board[3], board[6]]
const winCol2 = [board[1], board[4], board[7]]
const winCol3 = [board[2], board[5], board[8]]
const winDiag1 = [board[0], board[4], board[8]]
const winDiag2 = [board[2], board[4], board[6]]

const gameWin = () => {

}

// const checkForWin = () => {
//
// }

// FAILED CODE IS BELOW:
//
// const placeMarker = () => {
//   console.log('click works')
//   let marker = playerOne
//   console.log(marker + "'s turn'")
//   if (marker === undefined) {
//     marker = playerOne
//   } else {
//     marker = playerTwo
//     $('.col').text(playerTwo)
//   }
// }

// const turns = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X']

// const playerTurn = turns => {
//   for (let i = 0; i < turns.length; i++) {
//     return
//   }
// }
// console.log(playerTurn)

// game starts with player 1
// const turn = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
// when player 1 clicks a box, an X appears in the box

// const placeMarker = playerMove => {
//   if ($('.board-space-0').text() === '' && (playerMove % 2) === 1) {
//     $('.board-space-0').text('X')
//   } else {
//     $('.board-space-0').text('O')
//   }
//   playerMove++
// }

// $('.col').on('click', placeMarker)
//
// const gameStart = () => {
//   if (player === 'X') {
//     xTurn()
//   } else {
//     oTurn()
//   }
// }

// const xTurn = () => {

// $('.col').text(playerOne)

// player 1 is X, player 2 is O
// X ALWAYS GOES FIRST

// determine which player's turn it is
// const turn = () => {
//   let turnCounter = 0
//   if (turnCounter % 2 === 0) {
//     console.log("player 1's turn")
//   } else {
//     console.log("player 2's turn")
//   }
// }

module.exports = {
  placeMarker,
  switchPlayer
  // checkForWin
}
