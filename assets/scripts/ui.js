const store = require('./store.js')

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
  onSuccess('You have successfully signed up!  Now, sign in!')
}

const onSignUpFailure = () => {
  onFailure('Sign up failed!')
}

const onSignInSuccess = responseData => {
  store.user = responseData.user
  console.log(store)
  onSuccess('You have successfully signed in!')
  $('.after-auth').show()
  $('.before-auth').hide()
}

const onSignInFailure = () => {
  onFailure('Sign in failed!')
}

const onChangePasswordSuccess = () => {
  onSuccess('You have successfully changed your password!')
}

const onChangePasswordFailure = () => {
  onFailure('Change password failed!')
}

const onSignOutSuccess = () => {
  onSuccess('You have successfully signed out!')
  store.user = {} // now store.js object will revert back to being empty
  $('.before-auth').show()
  $('.after-auth').hide()
}

const onSignOutFailure = () => {
  onFailure('Sign out failed!')
}

const onCreateGameSuccess = gameData => {
  onSuccess('You have started a new game!')
  store.game = gameData.game
}

const onCreateGameFailure = () => {
  onFailure('Failed to create new game!')
}

const onUpdateGameSuccess = () => {
  onSuccess('Game data has been updated!')
}

const onUpdateGameFailure = () => {
  onFailure('Failed to update game data!')
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
