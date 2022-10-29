// storeContext contains our data from data.json
import React, { useState, createContext, useEffect } from 'react'

export const AudioContext = createContext()

const AudioContextProvider = ({ children }) => {
  // the array of data to hold the json data provided, data here as an array is empty.
  const [data, setData] = useState([])
  const [dataone, setDataone] = useState([])
  const [loading, setLoading] = useState(true)
  const [nameone, setNameone] = useState()
  const [yoruba, setYoruba] = useState(false)
  const [igbo, setIgbo] = useState(false)
  const [hausa, setHausa] = useState(false)
  const [english, setEnglish] = useState(false)
  const [id, setId] = useState(0)
  const [title, setTitle] = useState('Here is a story of a survivor')
  const [titleone, setTitleone] = useState('What is Gender Based Violence?')
  const [titletwo, setTitletwo] = useState('Forms of Gender Based Violence')
  const [titlethree, setTitlethree] = useState(
    'Solution to Gender Based Violence according to UNICEF'
  )
  const [titlefour, setTitlefour] = useState(
    'Tackling Child Abuse and Sexual Harassment'
  )
  const [titlefive, setTitlefive] = useState(
    'The Need for the Child Protection Committee'
  )
  const [titlesix, setTitlesix] = useState(
    'Tips for Youth to Prevent Gender-Based Violence and Inequality'
  )
  const [titlesept, setTitlesept] = useState(
    'Providing Safe Spaces for Survivors of Gender-Based Violence'
  )
  const [titleeig, setTitleeig] = useState(
    'Doesn’t sexual violence only happen to girls?'
  )
  const [titlenine, setTitlenine] = useState('What happens afterwards?')
  const [titleten, setTitleten] = useState('Whose fault is it?')
  const [titleele, setTitleele] = useState(
    'Is there anything that can be done?'
  )
  const [titletwe, setTitletwe] = useState(
    '16 Days of Activism against Gender-Based Violence runs from November 25 annually'
  )
  //get json data using the fetch api. this fetch api gets the data stored in our json file and stores it in the variable data as declared above.
  // async-await=> async function makes sure that a promise is returned. await is a keyword that makes the code wait until the promise returns a result.
  const fetchPackages = async () => {
    try {
      const response = await fetch(`/data.json`)
      const products = await response.json()
      // console.log(products)
      setLoading(false)
      setData(products)
    } catch (error) {
      console.log(error)
    }
  }
  // access data once, when the component (App) renders
  useEffect(() => {
    fetchPackages()
  }, [])

  const fetchPackagesone = async () => {
    try {
      const response = await fetch(`/dataone.json`)
      const products = await response.json()
      // console.log(products)
      setLoading(false)
      setDataone(products)
    } catch (error) {
      console.log(error)
    }
  }
  // access data once, when the component (App) renders
  useEffect(() => {
    fetchPackagesone()
  }, [])

  return (
    <AudioContext.Provider
      value={{
        data,
        dataone,
        setNameone,
        setId,
        id,
        nameone,
        title,
        titleone,
        titletwo,
        titlethree,
        titlefour,
        titlefive,
        titlesix,
        titlesept,
        titleeig,
        titlenine,
        titleten,
        titleele,
        titletwe,
        setYoruba,
        yoruba,
        setIgbo,
        igbo,
        setHausa,
        hausa,
        setEnglish,
        english,
        loading,
      }}
    >
      {children}
    </AudioContext.Provider>
  )
}

export default AudioContextProvider
