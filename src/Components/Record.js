import React, { useContext, useEffect, useState } from 'react'
import { AudioContext } from '../Contexts/AudioContext'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import Audi from './Audi'
import { AiOutlineClose } from 'react-icons/ai'
import Navbar from './Navbar'

const Record = () => {
  const {
    data,
    nameone,
    setYoruba,
    yoruba,
    setIgbo,
    igbo,
    setHausa,
    hausa,
    setEnglish,
    english,
  } = useContext(AudioContext)

  return (
    <div>
      <Navbar />
      <section className='mod text-center p-4 mt-3'>
        <div className='mod-content p-4'>
          {data
            .filter((item) => {
              if (item.name === nameone) {
                return item
              }
            })
            .map((item, key) => {
              return (
                <div key={key}>
                  <div className='list'>
                    <Audi key={key} item={item} />
                  </div>
                </div>
              )
            })}
        </div>
      </section>
      <div className='dropdown text-center mt-1 dropdownn'>
        <button
          className='btn btn-secondary dropdown-toggle dropbutn'
          type='button'
          data-toggle='dropdown'
          aria-expanded='false'
        >
          Select Language
        </button>
        <div className='dropdown-menu text-center dropmenu'>
          <p onClick={() => setEnglish(true)}>English</p>
          <p onClick={() => setYoruba(true)}>Yoruba</p>
          <p onClick={() => setIgbo(true)}>Igbo</p>
          <p onClick={() => setHausa(true)}>Hausa</p>
        </div>
      </div>
    </div>
  )
}

export default Record
