import React, { useContext, useState } from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import { AudioContext } from '../Contexts/AudioContext'

const Audione = ({ item }) => {
  const { dataone, yoruba, igbo, hausa, english } = useContext(AudioContext)
  const [trackIndex, setTrackIndex] = useState(item.id)

  const handleClickPrevious = () => {
    setTrackIndex((currentTrack) =>
      currentTrack === 0 ? dataone.length - 1 : currentTrack - 1
    )
  }

  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < dataone.length - 1 ? currentTrack + 1 : 0
    )
  }
  return (
    <div>
      <img
        className='audioimg audimgg'
        src={dataone[trackIndex].image}
        alt=''
      />
      <p className='audiop'>
        {english === true
          ? dataone[trackIndex].name
          : igbo === true
          ? dataone[trackIndex].nameigbo
          : yoruba === true
          ? dataone[trackIndex].nameyoruba
          : hausa === true
          ? dataone[trackIndex].namehausa
          : dataone[trackIndex].name}
      </p>
      <AudioPlayer
        className='audiolib mt-n3'
        autoPlay
        src={
          english === true
            ? dataone[trackIndex].record
            : igbo === true
            ? dataone[trackIndex].igbo
            : yoruba === true
            ? dataone[trackIndex].yoruba
            : hausa === true
            ? dataone[trackIndex].hausa
            : dataone[trackIndex].record
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

export default Audione
