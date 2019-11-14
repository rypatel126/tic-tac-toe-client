// place X or O when board is clicked
const marker = 'X OR O'
const playerOne = 'X'
const playerTwo = 'O'



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

// game starts with player 1
// const turn = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
// when player 1 clicks a box, it is replaced with an X

const placeMarker = () => {
  console.log('click worked')
}


// $('.col').text(playerOne)

// player 1 is X, player 2 is O
// X ALWAYS GOES FIRST!

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
  placeMarker
}
