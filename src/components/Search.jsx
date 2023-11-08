import React from 'react'

function Search({updateSearchText}) {

  return (
    <div className="search">
        <input
          type="text"
          placeholder="Search your Tracks"
          onChange={updateSearchText}
        />
        <i>🔎</i>
  </div>
  )
}

export default Search