
const store = require('./store.js')
// const events = require('./events.js')

const onSuccess = message => {
  $('#results')
    .removeClass('failure')
    .addClass('success')
    .text(message)
  $('form').trigger('reset')
}

const onFailure = message => {
  $('#results').text(message)
    .removeClass('success')
    .addClass('failure')
    .text(message)
  $('form').trigger('reset')
}

const onSignUpSuccess = () => {
  onSuccess($('.results').text('You have successfully signed up!  Now, sign in!'))
}

const onSignUpFailure = () => {
  onFailure($('.results').text('Sign up failed!'))
}

const onSignInSuccess = responseData => {
  store.user = responseData.user
  console.log(store)
  onSuccess($('.results').text('You have successfully signed in!'))
  $('.after-auth').show()
  $('.before-auth').hide()
}

const onSignInFailure = () => {
  onFailure($('.results').text('Sign in failed!'))
}

const onChangePasswordSuccess = () => {
  onSuccess($('.results').text('You have successfully changed your password!'))
}

const onChangePasswordFailure = () => {
  onFailure($('.results').text('Change password failed!'))
}

const onSignOutSuccess = () => {
  onSuccess($('.results').text('You have successfully signed out!'))
  store.user = {} // now store.js object will revert back to being empty
  $('.before-auth').show()
  $('.after-auth').hide()
}

const onSignOutFailure = () => {
  onFailure($('.results').text('Sign out failed!'))
}

const onCreateGameSuccess = gameData => {
  onSuccess($('.results').text('You have started a new game!'))
  store.game.cell = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
  store.game = gameData.game
  // events.boardArray = []
  $('.game-board').show()
}

const onCreateGameFailure = () => {
  onFailure($('.results').text('Failed to create new game!'))
}

const onUpdateGameSuccess = () => {
  onSuccess($('.results').text('Game data has been updated!'))
}

const onUpdateGameFailure = () => {
  onFailure($('.results').text('Failed to update game data!'))
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onCreateGameSuccess,
  onCreateGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure
}
