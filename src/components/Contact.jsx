import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import externalIcon from '../assets/icons/external-link.svg'
import emailIcon from '../assets/icons/email.svg'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
export function Contact () {
  return (
    <section>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <h2 className='sectionHeading' style={{ textAlign: 'left' }} id='contactMe'>Contact Me</h2>
            <p
              style={{
                fontSize: '4.8rem',
                color: 'var(--dark-green-opacity)',
                maxWidth: '15ch'
              }}
            >I would like to work with you!
            </p>
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
            <Button className='actionButton' as='a' href='mailto:l.i.franco.t@gmail.com'>
              <img src={emailIcon} alt='' className='jobIcon' />
              Mail Me
            </Button>
            <Button className='actionButton' as='a' href='/CV-en.pdf'>
              <img src={externalIcon} alt='' className='jobIcon' />
              View Resume
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
