import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { ProjectButton } from './ProjectButton'

export function ProjectCard ({ image, title, description, skills, repo, demo }) {
  return (
    <Col
      xs={12} md={6} style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '5rem',
        alignItems: 'flex-start'
      }}
    >
      <Card className='card'>
        <Card.Img variant='top' src={image} style={{ backgroundColor: 'white' }} />
        <Card.Body>
          <Card.Title className='projectTitle'>{title}</Card.Title>
          <Card.Text className='projectText'>{description}</Card.Text>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem' }}>
            <div className='iconWrap'>
              {
                skills.map((skill, index) => {
                  return (
                    <img src={skill} alt='Icon of the skill' className='jobIcon' key={index} />
                  )
                })
              }
            </div>
            <ProjectButton demo={demo} repo={repo} />
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}
