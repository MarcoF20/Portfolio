import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ProjectCard } from './ProjectCard'
import { projects } from '../data/projectsData'

export function Projects () {
  return (
    <section>
      <Container>
        <Row>
          <Col>
            <h2 className='sectionHeading'>Projects</h2>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          {
            projects.map((project, index) => {
              return (
                <ProjectCard
                  key={index}
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  skills={project.skills}
                  repo={project.repo}
                  demo={project.demo}
                />
              )
            })
          }
        </Row>
      </Container>
    </section>
  )
}
