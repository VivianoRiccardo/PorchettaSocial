
// contiene variabili e funzioni globali del mainserver


// per stampare informazioni di debug
const debug_stdout = true

// in ascolto di connessioni sulla porta
const port = 80


// for debugging pursposes, i have an unique id of every user request, like a client id
var req_id = 0

function get_req_id() {
  return req_id
}

function increase_req_id() {
  req_id++
}

// unique message identifier, to be used when communicating with queues
var msg_id = 0

function request_msg_id() {
  msg_id++
  return msg_id
}


// logging
var fs = require('fs')  // filesystem library

function log(msg) {
  var entry = '[MainServer] '+new Date+' | '+msg
  if (debug_stdout)
	console.log(entry)
  fs.appendFile('mainserver.log', entry+'\n', (err) => {if (err) console.log('Error writing on logfile')})
}



// esporto
module.exports = {
  increase_req_id,
  request_msg_id,
  port,
  log
}
