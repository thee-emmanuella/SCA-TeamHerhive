import React from 'react'
import Navbar from './Navbar'
import rec from '../assets/rec2.png'

const About = () => {
  return (
    <div>
      <Navbar />
      <main className='p-4'>
        <section className='mt-2 first-section p-3 p-md-5'>
          <div className='flex-1'>
            <img src={rec} alt='' />
          </div>
          <article className='article-div'>
            <div className='flex1'>
              <h2 className='text-center'>About Us</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className='flex-onee'>
              <img src={rec} alt='' />
            </div>
          </article>
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
        <section className='flexbox3 p-3 mt-4 mb-1  p-md-5'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            repellat blanditiis recusandae esse similique soluta. Commodi
            adipisci quaerat optio quos ipsam. Reprehenderit laudantium veniam
            eum dicta odit placeat sunt minima?Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Eum repellat dolore doloremque, amet
            non repellendus veniam culpa hic molestias expedita animi harum
            adipisci recusandae quo sunt ad nulla minima voluptatibus!logo.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            harum quisquam labore possimus cum dicta accusantium est velit
            tempore sequi laborum illum ex assumenda, nobis dolor fugit ut.
            Tempore, corporis? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Vel ut obcaecati aliquid, sequi, est in incidunt
            fugit totam labore esse iusto illo impedit sunt deserunt facere
            debitis atque accusamus placeat. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptate nulla doloremque maxime!
            Ipsam ducimus dolorem ut soluta. Impedit numquam quisquam nam
            voluptas ab explicabo, alias, dolore doloribus quidem officiis sint.
          </p>
        </section>
      </main>
    </div>
  )
}

export default About
