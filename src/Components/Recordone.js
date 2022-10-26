import React, { useContext, useEffect, useState } from 'react'
import { AudioContext } from '../Contexts/AudioContext'
import 'react-h5-audio-player/lib/styles.css'
import Audi from './Audi'
import Navbar from './Navbar'
import Audione from './Audione'

const Recordone = () => {
  const { dataone, id } = useContext(AudioContext)
  return (
    <div>
      <Navbar />
      <section className='mod text-center p-4'>
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
    </div>
  )
}

export default Recordone
