import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import myPhoto from '../assets/me.webp'

export function About () {
  return (
    <>
      <Container style={{ marginTop: 20 }}>
        <Row>
          <Col xs={12} sm={6}>
            <div id='aboutWrap'>
              <h1>Marco Franco</h1>
              <h2>Web Developer</h2>
              <p id='aboutDescription'>
                Professional, structured and clean.
                That's the way I work. delivering
                innovation to your business.
              </p>
              <Button id='contactButton' href='#contactMe' as='a'>Let's get in touch</Button>
            </div>
          </Col>
          <Col xs={12} sm={6} style={{ display: 'flex', alignItems: 'center' }} id='photoColumn'>
            <div id='photoWrap'>
              <img src={myPhoto} alt='Marco&apos;s photo' id='myPhoto' height={248} width={248} />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
