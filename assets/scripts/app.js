'use strict'

const events = require('./events.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.board-space-0').on('click', events.placeMarker)
  $('.board-space-1').on('click', events.placeMarker)
  $('.board-space-2').on('click', events.placeMarker)
  $('.board-space-3').on('click', events.placeMarker)
  $('.board-space-4').on('click', events.placeMarker)
  $('.board-space-5').on('click', events.placeMarker)
  $('.board-space-6').on('click', events.placeMarker)
  $('.board-space-7').on('click', events.placeMarker)
  $('.board-space-8').on('click', events.placeMarker)
})
