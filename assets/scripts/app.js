'use strict'

const events = require('./events.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.bs').on('click', events.placeMarker)
  // $('.bs').on('click', events.boardArray)
  events.addHandlers()
  $('.after-auth').hide()
  $('.game-board').hide()
  $('.status').text('')
})
