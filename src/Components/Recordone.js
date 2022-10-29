import React, { useContext, useEffect, useState } from 'react'
import { AudioContext } from '../Contexts/AudioContext'
import 'react-h5-audio-player/lib/styles.css'
import Audi from './Audi'
import Navbar from './Navbar'
import Audione from './Audione'

const Recordone = () => {
  const {
    dataone,
    id,
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
      <section className='mod mod1 text-center p-4'>
        <div className='mod-content1 p-4'>
          {dataone
            .filter((item) => {
              if (item.id === id) {
                return item
              }
            })
            .map((item, key) => {
              return (
                <div key={key}>
                  <div className='list'>
                    <Audione key={key} item={item} />
                  </div>
                </div>
              )
            })}
        </div>
      </section>
      <div className='dropdown text-center mt-1 dropdownn drpdownn mt-md-n5'>
        <button
          className='btn btn-secondary dropdown-toggle dropbutn'
          type='button'
          data-toggle='dropdown'
          aria-expanded='false'
        >
          Select Language
        </button>
        <div className='dropdown-menu text-center dropmenu'>
          <p onClick={() => setEnglish(!english)}>English</p>
          <p onClick={() => setYoruba(!yoruba)}>Yoruba</p>
          <p onClick={() => setIgbo(!igbo)}>Igbo</p>
          <p onClick={() => setHausa(!hausa)}>Hausa</p>
        </div>
      </div>
    </div>
  )
}

export default Recordone
