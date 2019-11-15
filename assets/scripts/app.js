'use strict'

const events = require('./events.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#bs0').on('click', events.placeMarker)
  $('#bs1').on('click', events.placeMarker)
  $('#bs2').on('click', events.placeMarker)
  $('#bs3').on('click', events.placeMarker)
  $('#bs4').on('click', events.placeMarker)
  $('#bs5').on('click', events.placeMarker)
  $('#bs6').on('click', events.placeMarker)
  $('#bs7').on('click', events.placeMarker)
  $('#bs8').on('click', events.placeMarker)
})
