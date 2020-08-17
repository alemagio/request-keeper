import { expand } from './rowManager'

export const buildRequestRow = function(doc) {
  return setDocument(doc)
}

export const setDocument = function(doc) {
  return req => {
    const tr = doc.createElement('tr')
    tr.classList.add('request-row')
    tr.setAttribute('data-request-row', true)
    tr.onclick = expand
    const tdUrl = doc.createElement('td')
    tdUrl.textContent = req.url
    const tdMethod = doc.createElement('td')
    tdMethod.textContent = req.method
    const tdBody = doc.createElement('td')
    tdBody.classList.add('td-expandable')
    tdBody.setAttribute('data-expandable-container', true)
    tdBody.innerHTML = `
      <span class="expandable" data-expandable="true">
        ${req.body}
      </span>
      <pre class="pm-is-hidden" data-expanded="true"><code>${req.body}</code></pre>
    `
    const tdTimestamp = doc.createElement('td')
    tdTimestamp.textContent = req.timestamp

    tr.appendChild(tdUrl)
    tr.appendChild(tdMethod)
    tr.appendChild(tdBody)
    tr.appendChild(tdTimestamp)
    doc.querySelector('tbody').appendChild(tr)
  }
}
