import React, { useContext, useState } from 'react'
import Navbar from './Navbar'
import rec from '../assets/rec2.png'
import rec31 from '../assets/rec31.png'
import rec22 from '../assets/rec22.png'
import { Link } from 'react-router-dom'
import { BiPlayCircle } from 'react-icons/bi'
import Audio from './Audio'
import { AudioContext } from '../Contexts/AudioContext'

const Home = () => {
  const [show, setShow] = useState(false)
  const { data, setNameone, title, titleone, titletwo } =
    useContext(AudioContext)
  return (
    <div>
      <Navbar />
      <section className='sec-one text-center'>
        <img className='imgg-on' src={rec} alt='sec-image' />
        <div className='div-one'>
          <p className='p-one'>Lorem ipsum dolor sit amet consectetur.</p>
          <p className='mt-n3 p-two'>Lorem ipsum dolor sit amet consectetur.</p>
          <Link to='/About' className='text-capitalize p-1'>
            <button className='text-capitalize p-1'>about us</button>
          </Link>
        </div>
      </section>
      <div className='p-3 div-mid p-md-4'>
        <section className='sec-two d-flex p-3'>
          <p className='p-th mt-n2'>{title}</p>
          <div className='d-flex div-tw mt-n2'>
            <div>
              <Link to='/Record' className='linnk'>
                <BiPlayCircle
                  onClick={() => (setShow(true), setNameone(title))}
                  className='icon icconn ml-1'
                />
              </Link>
              <Audio show={show} onClose={() => setShow(false)} />
            </div>
            <div>
              <small className='ml-2 smmall'>Lorem, ipsum.</small>
            </div>
          </div>
        </section>
      </div>
      <section className='sec-three mt-2 p-3'>
        <p className='text-center p-fou mt-3'>Lorem ipsum dolor sit amet.</p>
        <article className='articl'>
          <div className='mt-md-4'>
            <img className='img-on' src={rec31} alt='rec31' />
            <div className='div-fiv text-center p-3'>
              <p className='mt-3 div-fiv-p'>{titleone}</p>
              <div className='d-flex div-tw mt-n2 div-teo'>
                <div>
                  <Link to='/Record' className='linnk'>
                    <BiPlayCircle
                      onClick={() => (setShow(true), setNameone(titleone))}
                      className='icon ml-1'
                    />
                  </Link>
                  <Audio show={show} onClose={() => setShow(false)} />
                </div>
                <div>
                  <small className='ml-2 div-smal'>Lorem, ipsum.</small>
                </div>
              </div>
            </div>
          </div>
          <div className=''>
            <img className='img-on mt-4' src={rec22} alt='rec22' />
            <div className='div-fiv text-center p-3'>
              <p className='mt-3 div-fiv-p'>{titletwo}</p>
              <div className='d-flex div-tw mt-n2 div-teo'>
                <div>
                  <Link to='/Record' className='linnk'>
                    <BiPlayCircle
                      onClick={() => (setShow(true), setNameone(titletwo))}
                      className='icon ml-1'
                    />
                  </Link>
                </div>
                <div>
                  <small className='ml-2 div-smal'>Lorem, ipsum.</small>
                </div>
              </div>
            </div>
          </div>
          <div className=''>
            <img className='img-on mt-4' src={rec31} alt='rec31' />
            <div className='div-fiv text-center p-3'>
              <p className='mt-3 div-fiv-p'>Lorem ipsum dolor sit.</p>
              <div className='d-flex div-tw mt-n2 div-teo'>
                <div>
                  <BiPlayCircle className='icon ml-1' />
                </div>
                <div>
                  <small className='ml-2 div-smal'>Lorem, ipsum.</small>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
      <section className='sec-four mt-2 p-3'>
        <p className='text-center p-fou mt-3'>Lorem ipsum dolor sit amet.</p>
        <article className='articl'>
          <div className='mt-md-4'>
            <img className='img-on' src={rec22} alt='rec22' />
            <div className='div-fiv text-center p-3'>
              <p className='mt-3 div-fiv-p'>Lorem ipsum dolor sit.</p>
              <div className='d-flex div-tw mt-n2 div-teo'>
                <div>
                  <BiPlayCircle className='icon ml-1' />
                </div>
                <div>
                  <small className='ml-2 div-smal'>Lorem, ipsum.</small>
                </div>
              </div>
            </div>
          </div>
          <div className=''>
            <img className='img-on mt-4' src={rec22} alt='rec22' />
            <div className='div-fiv text-center p-3'>
              <p className='mt-3 div-fiv-p'>Lorem ipsum dolor sit.</p>
              <div className='d-flex div-tw mt-n2 div-teo'>
                <div>
                  <BiPlayCircle className='icon ml-1' />
                </div>
                <div>
                  <small className='ml-2 div-smal'>Lorem, ipsum.</small>
                </div>
              </div>
            </div>
          </div>
          <div className=''>
            <img className='img-on mt-4' src={rec22} alt='rec22' />
            <div className='div-fiv text-center p-3'>
              <p className='mt-3 div-fiv-p'>Lorem ipsum dolor sit.</p>
              <div className='d-flex div-tw mt-n2 div-teo'>
                <div>
                  <BiPlayCircle className='icon ml-1' />
                </div>
                <div>
                  <small className='ml-2 div-smal'>Lorem, ipsum.</small>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
      <section className='sec-six mt-3 p-3'>
        <p className='text-center p-sx'>
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <article className=''>
          <div>
            <img className='img-on image-one' src={rec22} alt='' />
          </div>
          <article className='arti-one'>
            <div className='arrtticle'>
              <div className='mt-3 p-sv d-flex'>
                <p className='mt-2 p-eig'>
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <BiPlayCircle className='icon-on mt-2' />
              </div>
              <div className='mt-3 p-sv d-flex'>
                <p className='mt-2 p-eig'>
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <BiPlayCircle className='icon-on mt-2' />
              </div>
              <div className='mt-3 p-sv d-flex'>
                <p className='mt-2 p-eig'>
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <BiPlayCircle className='icon-on mt-2' />
              </div>
            </div>
            <div>
              <img className='image-two mt-md-2' src={rec22} alt='' />
            </div>
          </article>
        </article>
      </section>
      <section className='mt-3 p-3 secc-on'>
        <div>
          <img className='img-on mt-md-5' src={rec22} alt='rec22' />
        </div>
        <div className='div-sept mt-3 text-center p-5'>
          <p className='p-sept'>Lorem ipsum dolor sit amet.</p>
          <small className='pp-p'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            quibusdam officia debitis amet quis fugit doloribus suscipit? A.
          </small>{' '}
          <br />
          <Link to='/About' className='text-capitalize p-1'>
            <button className='text-capitalize p-1 buttn buttnn mt-2'>
              about us
            </button>
          </Link>
        </div>
      </section>
      <section className='mt-3 p-3'>
        <div className='divv'>
          <img className='img-on' src={rec22} alt='rec22' />
        </div>
        <article className='secc-on'>
          <div className='div-sept div-eig mt-3 text-center p-5'>
            <p className='p-sept'>Lorem ipsum dolor sit amet.</p>
            <small className='pp-p'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              quibusdam officia debitis amet quis fugit doloribus suscipit? A.
            </small>{' '}
            <br />
            <Link to='/Stories' className='text-capitalize p-1'>
              <button className='text-capitalize p-1 buttn buttnn mt-2'>
                more stories
              </button>
            </Link>
          </div>
          <div className='mt-md-3 divv-on'>
            <img className='img-on mt-md-4' src={rec22} alt='rec22' />
          </div>
        </article>
      </section>
      <section className='sec-six mt-3 p-3'>
        <p className='text-center p-sx'>
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <article>
          <div>
            <img className='img-on image-one' src={rec22} alt='' />
          </div>
          <article className='arti-one'>
            <div className='arrtticle'>
              <div className='mt-3 p-sv d-flex'>
                <p className='mt-2 p-eig'>
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <BiPlayCircle className='icon-on mt-2' />
              </div>
              <div className='mt-3 p-sv d-flex'>
                <p className='mt-2 p-eig'>
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <BiPlayCircle className='icon-on mt-2' />
              </div>
              <div className='mt-3 p-sv d-flex'>
                <p className='mt-2 p-eig'>
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <BiPlayCircle className='icon-on mt-2' />
              </div>
            </div>
            <div>
              <img className='image-two mt-md-2' src={rec22} alt='' />
            </div>
          </article>
        </article>
        <div className='text-center'>
          <Link to='/Contact' className='text-capitalize p-1'>
            <button className='text-capitalize p-1 buttn butn mt-3 mb-4'>
              send your questions
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
