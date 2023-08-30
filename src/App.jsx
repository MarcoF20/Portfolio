import { useEffect, useState } from 'react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { NavigationBar } from './components/NavigationBar'
import { Projects } from './components/Projects'
import { Timeline } from './components/Timeline'
// import { jobs } from './data/jobsData'

function App () {
  const devicePreference = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [darkMode, setDarkMode] = useState(devicePreference)
  document.documentElement.setAttribute('data-theme', darkMode === true ? 'dark' : 'light')
  const checkDarkMode = () => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      setDarkMode(event.matches)
    })
  }

  useEffect(checkDarkMode, [darkMode])

  return (
    <>
      <NavigationBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <About />
      <Timeline />
      <Projects />
      <Contact darkMode={darkMode}/>
    </>
  )
}

export default App
