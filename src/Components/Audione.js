import React, { useContext, useState } from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import { AudioContext } from '../Contexts/AudioContext'

const Audione = ({ item }) => {
  const { dataone } = useContext(AudioContext)
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
      <img className='audioimg' src={dataone[trackIndex].image} alt='' />
      <p className='audiop'>{dataone[trackIndex].name}</p>
      <AudioPlayer
        className='audiolib mt-n3'
        // autoPlay
        src={dataone[trackIndex].record}
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
