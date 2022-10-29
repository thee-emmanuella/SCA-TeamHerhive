import React, { useRef } from 'react'
import Navbar from './Navbar'
import { CgMail } from 'react-icons/cg'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { IoIosHome } from 'react-icons/io'
import { IoLogoFacebook } from 'react-icons/io'
import { AiFillTwitterSquare } from 'react-icons/ai'
import { IoLogoInstagram } from 'react-icons/io'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_357jzo4',
        'template_xo7mb1i',
        form.current,
        'Q-q9bpmvVqf4ym0qc'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    alert('Email sent!')
  }

  const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : ''
    if (subject) params += `subject=${encodeURIComponent(subject)}`
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`

    return <a href={`mailto:${email}${params}`}>{children}</a>
  }

  return (
    <div>
      <Navbar />
      <section className='p-4'>
        <main className='maiin p-4'>
          <div className='flexbox1'>
            <h2 className='contactus text-center'>Contact Us</h2>
            <p className='contactp text-center mt-n3'>
              Feel free to contact us anytime
            </p>
            <form ref={form} onSubmit={sendEmail}>
              <div className='form-group'>
                <label htmlFor='exampleFormControlInput1' className='contactp'>
                  Name
                </label>
                <input
                  type='text'
                  required
                  className='form-control'
                  id='exampleFormControlInput1'
                  name='name'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleFormControlInput1' className='contactp'>
                  Email address
                </label>
                <input
                  type='email'
                  required
                  className='form-control'
                  id='exampleFormControlInput1'
                  name='email'
                />
              </div>
              <div className='form-group'>
                <label
                  htmlFor='exampleFormControlTextarea1'
                  className='contactp'
                >
                  Message
                </label>
                <textarea
                  className='form-control'
                  id='exampleFormControlTextarea1'
                  rows='3'
                  name='message'
                  required
                ></textarea>
              </div>
              <button type='submit' className='submitbtn'>
                Send
              </button>
            </form>
          </div>
          <div className='flexbox2 mt-5 p-4'>
            <h2 className='contactus text-center'>INFORMATION</h2>
            <div className='mail' id='flex'>
              <CgMail className='flexicon' />
              <Mailto
                email='info@southsaharan.org'
                subject='Hello & Welcome'
                body='Hello world!'
              >
                <p className='contactp ml-2 ml-md-4'>info@southsaharan.org</p>
              </Mailto>
            </div>
            <div className='tel' id='flex'>
              <BsFillTelephoneFill className='flexicon' />
              <p className='contactp ml-2 ml-md-4'>+234 814 812 3790</p>
            </div>
            <div className='contactflex' id='flex'>
              <IoIosHome className='flexicon' />
              <p className='contactp ml-2 ml-md-4'>
                13 Link Road Independence Layout <br /> Enugu, Nigeria
              </p>
            </div>
            <div className='footlogo'>
              <a
                className='footlogoa'
                href='https://web.facebook.com/southsaharan1'
              >
                <IoLogoFacebook className='ml-4 ml-md-5' />
              </a>
              <a className='footlogoa' href='https://twitter.com/southsaharan'>
                <AiFillTwitterSquare className='ml-4 ml-md-5' />
              </a>
              <a
                className='footlogoa'
                href='https://www.instagram.com/southsaharan/'
              >
                <IoLogoInstagram className='ml-4 ml-md-5' />
              </a>
            </div>
          </div>
        </main>
      </section>
    </div>
  )
}

export default Contact
