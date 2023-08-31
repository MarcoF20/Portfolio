import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import externalIcon from '../assets/icons/external-link.svg'
import emailIcon from '../assets/icons/email.svg'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import gif from '../assets/programmer.gif'
export function Contact () {
  return (
    <section>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <h2 className='sectionHeading' style={{ textAlign: 'left' }} id='contact'>Contact Me</h2>
            <p id='contactMessage'>
              I would like to work with you!
            </p>
            <div style={{ objectFit: 'contain', display: 'flex', justifyContent: 'center' }}>
              <img src={gif} alt='Illustrative gif' style={{ maxWidth: '100%', borderRadius: '1rem' }} id='animatedGif' />
            </div>
          </Col>
          <Col
            xs={12} md={6}
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'flex-end',
              flexDirection: 'column'
            }}
          >
            <Button className='contactButtons' as='a' href='mailto:l.i.franco.t@gmail.com'>
              <img src={emailIcon} alt='email icon' className='actionIcon' />
              Mail Me
            </Button>
            <Button className='contactButtons secondary' as='a' href='/CV-en.pdf' target='_blank' rel='noreferrer'>
              <img src={externalIcon} alt='external link icon' className='actionIcon' />
              View Resume
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
