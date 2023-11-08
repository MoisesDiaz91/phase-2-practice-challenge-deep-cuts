import React from 'react'

function AddTrackForm({addTrack, updateFormData}) {

  return (
      <form onSubmit={addTrack}>
        <div>
          <input onChange={updateFormData} type="text" name="image" placeholder="Image URL"/>
          <input onChange={updateFormData} type="text" name="title" placeholder="title" />
          <input onChange={updateFormData}type="text" name="artist" placeholder="Artist" />
          <input onChange={updateFormData} type="number" name="BPM" placeholder="BPM" step="1.00" />
        </div>
        <input className="" type="submit" value="Add Track" />
      </form>
  )
}

export default AddTrackForm