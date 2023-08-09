import { Col, Container, Row } from 'react-bootstrap'
import myPhoto from '../assets/me.jpg'

export function About () {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} sm={6}>
            <div id='aboutWrap'>
              <h1>Marco Franco</h1>
              <h2>Web Developer</h2>
              <p id='aboutDescription'>
                Profesional, structured and clean.
                That's the way a I work. delivering
                innovation to your business.
              </p>
              <a id='contactButton' href='#'>Contact Me</a>
            </div>
          </Col>
          <Col xs={12} sm={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div>
              <img src={myPhoto} alt='Marco&apos;s photo' id='myPhoto' height={248} width={248} />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
