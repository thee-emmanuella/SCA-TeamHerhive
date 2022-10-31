import React, { useContext, useEffect } from 'react'
import Navbar from './Navbar'
import { BiPlayCircle } from 'react-icons/bi'
import { AudioContext } from '../Contexts/AudioContext'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Stories = () => {
  const { dataone, setId } = useContext(AudioContext)
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <div>
      <Navbar />
      <section className='stories-mod text-center p-3'>
        <div>
          <article className='p-4 stories-art'>
            <p className='stories-p text-capitalize mt-3'>
              stories of warriors
            </p>
            <article
              data-aos='slide-right'
              data-aos-offset='200'
              data-aos-easing='ease-in-sine'
              data-aos-duration='500'
            >
              {dataone.map((item, key) => (
                <div key={key} className='mt-3 p-sv1 d-flex'>
                  <p className='mt-2 p-eig stori-p ml-1 ml-md-2'>{item.name}</p>
                  <Link to='/Recordone' className='linkkk ml-n1 ml-md-n4'>
                    <BiPlayCircle
                      className='icon-on1 mt-2'
                      onClick={() => setId(item.id)}
                    />
                  </Link>
                </div>
              ))}
            </article>
          </article>
          <a
            className='linkkk'
            href='https://tinyurl.com/scaHackfestTeamHerHiveForm'
          >
            <button type='submit' className='submitbtn1 text-capitalize mt-3'>
              send your stories
            </button>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Stories
