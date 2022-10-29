import React from 'react'
import Navbar from './Navbar'
import rec24 from '../assets/rec24.png'

const About = () => {
  return (
    <div>
      <Navbar />
      <main className='p-4'>
        <section className='mt-2 first-section p-3 p-md-5'>
          <div className='flex-1'>
            <img src={rec24} alt='' />
          </div>
          <article className='article-div'>
            <div className='flex1'>
              <h2 className='text-center'>About Us</h2>
              <p>
                Aidryse is a platform for accessing audio information based on
                Gender Based Domestic Violence. This project is in collaboration
                with South Sahara Social Development Organization (SSDO). This
                project is focused on a section of their many projects. Aidryse
                is also a form of help to victims and people who to want to
                share their experiences to help others. The audio web
                application will also come in three different languages which
                are Yoruba, Hausa and Igbo including English.
              </p>
            </div>
            <div className='flex-onee'>
              <img src={rec24} alt='' />
            </div>
          </article>
        </section>
        <section className='flexbox3 p-3 mt-4 mb-1  p-md-5'>
          <h2 className='text-center flexbox3-h2'>
            About The NGO We Are Collaborating With
          </h2>
          <p>
            South Saharan Social Development Organization (SSDO) is a duly
            registered non-profit organization in Nigeria, with a primary focus
            of equipping women, youth and children with the social, health,
            economic, educational and political skills needed to survive and
            compete favorably in a vastly changing and urbanizing Sub-Saharan
            Africa. <br />
            The Sister Guardian Initiative (SGI) is an SSDO-funded project that
            institutes community structures called SGI Chapter with a mandate to
            provide survivor centered care to Violence against Women (VAW)
            victims while advocating for institutional deterrence against the
            practice in Southeast Nigeria.
          </p>
        </section>
        <section className='mt-4 first-section p-3 p-md-5 article-div'>
          <div className='flex2'>
            <h2 className='text-center'>Our Mission</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              facilis quisquam dolorum ratione? Quam rem, quibusdam commodi odit
              tempora officia nam eius sequi nihil consequatur beatae in totam,
              voluptate delectus. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Aspernatur esse asperiores magnam corrupti
              deleniti aperiam. Quo, ducimus architecto. Dolores consequuntur
              maiores minus impedit odit a dolore, ab inventore minima
              obcaecati.
            </p>
          </div>
          <div className='flex-2'>
            <h2 className='text-center'>Our Vision</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
              obcaecati unde mollitia facilis facere quaerat, dolorum dolore
              provident earum labore ipsam doloribus enim laborum, fuga
              similique officia reprehenderit cum beatae. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Dignissimos quas nostrum autem
              deserunt corrupti cupiditate, rem non dolore sunt excepturi
              repudiandae accusantium, aut voluptatibus possimus in ex ea
              asperiores perferendis!
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default About
