import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { ProjectButton } from './ProjectButton'

export function ProjectCard ({ image, title, description, skills, repo, demo }) {
  return (
    <Col
      xs={12} md={6} style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '5rem'
      }}
    >
      <Card
        style={{
          width: '40.8rem',
          backgroundColor: '#CAE9FF',
          border: 'none',
          borderRadius: '2.2rem',
          filter: 'drop-shadow(0px 4px 18px rgba(57, 55, 52, 0.1))'
        }}
      >
        <Card.Img variant='top' src={image} style={{ backgroundColor: 'white' }} />
        <Card.Body>
          <Card.Title className='projectTitle'>{title}</Card.Title>
          <Card.Text className='projectText'>{description}</Card.Text>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem' }}>
            <div>
              {
                skills.map((skill, index) => {
                  return (
                    <img src={skill} alt='' className='jobIcon' key={index} />
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
