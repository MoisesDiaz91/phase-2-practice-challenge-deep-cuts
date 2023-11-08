import React from 'react'
import Search from './Search'
import AddTrackForm from './AddTrackForm'
import TracksList from './TracksList'
import { useState, useEffect } from 'react' /*Deliverable One: Step One. (Create useState), Deliverable One: Step Three. (add useEffect to line 5) */

function TracksPage() {

  const [tracks, setTracks] = useState([]) 
  const [formData, setFormData] = useState({})
  const [searchText, setSerachText] = useState('')
  useEffect(() => {
    fetch('http://localhost:3000/tracks')
      .then(response => response.json())
      .then(tracksData =>{
        setTracks(tracksData)
      })
  }, [])

  function addTrack(event){
    event.preventDefault()

    fetch("http://localhost:3000/tracks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(newTrack => {
      setTracks([...tracks, newTrack])
    })
  }

  function updateFormData(event){
    if(event.target.name === 'BPM'){
    setFormData({...formData, [event.target.name]: event.target.value})}
    else {
      setFormData({...formData, [event.target.name]: event.target.value})
    }
  }

  function updateSearchText(event){
    setSerachText(event.target.value)
  }

  const filteredTracks = tracks.filter((track) => {
    return track.title.toLowerCase().includes(searchText.toLowerCase()) || track.artist.toLowerCase().includes(searchText.toLowerCase())
  })
  
  return (
    <div>
      <Search updateSearchText={updateSearchText} />
      <AddTrackForm addTrack={addTrack} updateFormData={updateFormData}/>
      <TracksList tracks={filteredTracks}  />
    </div>
  )
}

export default TracksPage



