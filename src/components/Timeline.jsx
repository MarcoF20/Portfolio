import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import wordpressIcon from '../assets/wordpress-icon.svg'
import htmlIcon from '../assets/html-icon.svg'
import cssIcon from '../assets/css-icon.svg'
import jsIcon from '../assets/js-icon.svg'

export function Timeline () {
  return (
    <section>
      <Container>
        <Row>
          <Col>
            <h2 className='sectionHeading'>Experience</h2>
          </Col>
        </Row>
        <Row
          style={{
            borderLeft: '1px solid var(--aqua)',
            position: 'relative'
          }}
          className='job'
        >
          <Col style={{ paddingLeft: '2.6rem' }} md={6} xs={12}>
            <div className='circle' />
            <span className='date'>Jan 2023 - May 2023</span>
            <h3 className='jobTitle'>Wordpress Developer Trainee</h3>
            <p className='jobDescription'>Built websites using WordPress plugins like elementor for layout and design, customized styles using CSS and JavaScript, website optimizations using WordPress plugins, design of prototypes in Figma and using prototypes for real implementation.</p>
            <img src={wordpressIcon} alt='WordPress icon' className='jobIcon' />
            <img src={htmlIcon} alt='HTML icon' className='jobIcon' />
            <img src={cssIcon} alt='CSS icon' className='jobIcon' />
            <img src={jsIcon} alt='JavaScript icon' className='jobIcon' />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
