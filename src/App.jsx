import { About } from './components/About'
import { NavigationBar } from './components/NavigationBar'
import { Projects } from './components/Projects'
import { Timeline } from './components/Timeline'
// import { jobs } from './data/jobsData'

function App () {
  return (
    <>
      <NavigationBar />
      <About />
      <Timeline />
      <Projects />
    </>
  )
}

export default App
