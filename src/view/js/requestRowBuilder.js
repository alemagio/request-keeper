// TODO: move this to a module using a bundler
function buildRequestRow(req) {
  const tr = document.createElement('tr')
  const tdUrl = document.createElement('td')
  tdUrl.textContent = req.url
  const tdMethod = document.createElement('td')
  tdMethod.textContent = req.method
  const tdBody = document.createElement('td')
  tdBody.innerHTML = `<pre><code>${req.body}</code></pre>`
  const tdTimestamp = document.createElement('td')
  tdTimestamp.textContent = req.timestamp

  tr.appendChild(tdUrl)
  tr.appendChild(tdMethod)
  tr.appendChild(tdBody)
  tr.appendChild(tdTimestamp)
  document.querySelector('tbody').appendChild(tr)
}
