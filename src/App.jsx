import { About } from './components/About'
import { NavigationBar } from './components/NavigationBar'
import { Timeline } from './components/Timeline'
// import { jobs } from './data/jobsData'

function App () {
  return (
    <>
      <NavigationBar />
      <About />
      <Timeline />
      {/* {
        jobs.map(job => {
          return (
            <div key={job.jobId}>
              <p>{job.date}</p>
              <p>{job.jobTitle}</p>
              <p>{job.jobDescription}</p>
              {
                job.jobSkills.map((skill, id) => {
                  return (
                    <img src={skill} alt='' key={id} height={64} width={64} />
                  )
                })
              }
            </div>
          )
        })
      } */}
    </>
  )
}

export default App
