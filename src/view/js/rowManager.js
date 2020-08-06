function expand() {
  this.querySelector('[data-expanded]').classList.remove('pm-is-hidden')
  this.querySelector('[data-expandable]').classList.add('pm-is-hidden')
  this.querySelector('[data-expandable-container]').classList.remove('td-expandable')
  this.onclick = compress
}

function compress() {
  this.querySelector('[data-expanded]').classList.add('pm-is-hidden')
  this.querySelector('[data-expandable]').classList.remove('pm-is-hidden')
  this.querySelector('[data-expandable-container]').classList.add('td-expandable')
  this.onclick = expand
}

document.querySelectorAll('[data-request-row]').forEach(function(el) {
  el.onclick = expand
})
