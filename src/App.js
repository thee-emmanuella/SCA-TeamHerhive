import { Switch, Route } from 'react-router-dom'
import Home from './Components/Home'
import Contact from './Components/Contact'
import Stories from './Components/Stories'
import About from './Components/About'
import Record from './Components/Record'
import Recordone from './Components/Recordone'
import './style/All.css'
import './style/About.css'
import './style/Stories.css'
import './style/Contact.css'
import { AudioContext } from './Contexts/AudioContext'
import { Fragment, useContext } from 'react'
const App = () => {
  const { loading } = useContext(AudioContext)
  return (
    <div className='App'>
      {loading === false && (
        <Fragment>
          <div>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/Contact' component={Contact} />
              <Route exact path='/Stories' component={Stories} />
              <Route exact path='/About' component={About} />
              <Route exact path='/Record' component={Record} />
              <Route exact path='/Recordone' component={Recordone} />
            </Switch>
          </div>
        </Fragment>
      )}
    </div>
  )
}

export default App
