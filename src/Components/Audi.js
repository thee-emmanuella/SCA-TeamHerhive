import React, { useContext, useState } from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import { AudioContext } from '../Contexts/AudioContext'

const Audi = ({ item }) => {
  const { data, yoruba, igbo, hausa, english } = useContext(AudioContext)
  const [trackIndex, setTrackIndex] = useState(item.id)

  const handleClickPrevious = () => {
    setTrackIndex((currentTrack) =>
      currentTrack === 0 ? data.length - 1 : currentTrack - 1
    )
  }

  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < data.length - 1 ? currentTrack + 1 : 0
    )
  }
  return (
    <div>
      <img className='audioimg' src={data[trackIndex].image} alt='' />
      <p className='audiop mt-2'>
        {english === true
          ? data[trackIndex].name
          : igbo === true
          ? data[trackIndex].nameigbo
          : yoruba === true
          ? data[trackIndex].nameyoruba
          : hausa === true
          ? data[trackIndex].namehausa
          : data[trackIndex].name}
      </p>
      <AudioPlayer
        className='audiolib mt-n3'
        autoPlay
        src={
          english === true
            ? data[trackIndex].record
            : igbo === true
            ? data[trackIndex].igbo
            : yoruba === true
            ? data[trackIndex].yoruba
            : hausa === true
            ? data[trackIndex].hausa
            : data[trackIndex].record
        }
        onPlay={(e) => console.log('onPlay')}
        showSkipControls={true}
        showJumpControls={false}
        onClickPrevious={handleClickPrevious}
        onClickNext={handleClickNext}
        onEnded={handleClickNext}
      />
    </div>
  )
}

export default Audi
