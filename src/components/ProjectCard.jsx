import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import undraw from '../assets/undraw.svg'
import jsIcon from '../assets/js-icon.svg'
export function ProjectCard () {
  return (
    <Col
      xs={12} md={4} style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '5rem'
      }}
    >
      <Card style={{ width: '40.8rem', backgroundColor: '#CAE9FF', border: 'none', borderRadius: '2.2rem', filter: 'drop-shadow(0px 8px 24px rgba(57, 55, 52, 0.10))' }}>
        <Card.Img variant='top' src={undraw} style={{ backgroundColor: 'white' }} />
        <Card.Body>
          <Card.Title className='projectTitle'>Card Title</Card.Title>
          <Card.Text className='projectText'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
              <img src={jsIcon} alt='' className='jobIcon' />
            </div>
            <a href='#' className='projectButton'>Repository</a>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}
