import React from 'react'
import search from '../lib/search'

export default ({ onResults }) => (
  <button
    type="button"
    onClick={async () => {
      onResults(await search('doors'))
    }}
  >
    Search: Doors
  </button>
)
