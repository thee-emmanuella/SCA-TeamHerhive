import React, { useContext, useState } from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import { AudioContext } from '../Contexts/AudioContext'

const Audi = ({ item }) => {
  const { data } = useContext(AudioContext)
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
      <p className='audiop'>{data[trackIndex].name}</p>
      <AudioPlayer
        className='audiolib mt-n3'
        // autoPlay
        src={data[trackIndex].record}
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
