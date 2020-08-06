// TODO: move this to a module using a bundler
function buildRequestRow(req) {
  const tr = document.createElement('tr')
  tr.classList.add('request-row')
  tr.setAttribute('data-request-row', true)
  tr.onclick = expand
  const tdUrl = document.createElement('td')
  tdUrl.textContent = req.url
  const tdMethod = document.createElement('td')
  tdMethod.textContent = req.method
  const tdBody = document.createElement('td')
  tdBody.classList.add('td-expandable')
  tdBody.setAttribute('data-expandable-container', true)
  tdBody.innerHTML = `
    <span class="expandable" data-expandable="true">
      ${req.body}
    </span>
    <pre class="pm-is-hidden" data-expanded="true"><code>${req.body}</code></pre>
  `
  const tdTimestamp = document.createElement('td')
  tdTimestamp.textContent = req.timestamp

  tr.appendChild(tdUrl)
  tr.appendChild(tdMethod)
  tr.appendChild(tdBody)
  tr.appendChild(tdTimestamp)
  document.querySelector('tbody').appendChild(tr)
}
