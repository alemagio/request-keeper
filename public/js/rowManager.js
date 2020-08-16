export const expand = function() {
  this.querySelector('[data-expanded]').classList.remove('pm-is-hidden')
  this.querySelector('[data-expandable]').classList.add('pm-is-hidden')
  this.querySelector('[data-expandable-container]').classList.remove('td-expandable')
  this.onclick = compress
}

export const compress = function() {
  this.querySelector('[data-expanded]').classList.add('pm-is-hidden')
  this.querySelector('[data-expandable]').classList.remove('pm-is-hidden')
  this.querySelector('[data-expandable-container]').classList.add('td-expandable')
  this.onclick = expand
}
