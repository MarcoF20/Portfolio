import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Job } from './Job'
import { jobs } from '../data/jobsData'
export function Timeline () {
  return (
    <section>
      <Container>
        <Row>
          <Col>
            <h2 className='sectionHeading'>Experience</h2>
          </Col>
        </Row>
      </Container>
      <Container
        className='job'
        style={{
          borderLeft: '1px solid var(--aqua)',
          position: 'relative'
        }}
      >
        {
          jobs.map(job => {
            return (
              <Job
                key={job.jobId}
                jobTitle={job.jobTitle}
                jobDescription={job.jobDescription}
                date={job.date}
                skills={job.jobSkills}
              />
            )
          })
        }
      </Container>
    </section>
  )
}
