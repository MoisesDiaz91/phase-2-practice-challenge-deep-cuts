import React from 'react'
import defaultVinyl from '../assets/vinyl_PNG111.png'

function Track({track}) {

  return (
    <tr className="table-row">
        <td className="row-image">
            {/* you can use the default image if no image is given */}
            <img src={track.image} alt="title" />
        </td>
        <td className="row-title">{track.title}</td>
        <td>{track.artist}</td>
        <td>{track.BPM}</td>
    </tr>
  )
}

export default Track