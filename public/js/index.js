import { expand } from './rowManager'
import { buildRequestRow } from './requestRowBuilder'
import io from 'socket.io-client'

document.querySelectorAll('[data-request-row]').forEach(function(el) {
  el.onclick = expand
})

const socket = io()
socket.on('request-received', buildRequestRow)
