import { Col, Container, Row } from 'react-bootstrap'

export function Footer () {
  return (
    <footer>
      <Container style={{ borderTop: '2px solid var(--navBorder)' }}>
        <Row className='mt-4'>
          <Col md={6} sm={12} style={{ display: 'flex', justifyContent: 'center' }}>
            <div id='credits'>
              <h4 className='subheading'>Credits</h4>
              <p style={{ fontSize: '1.8rem' }}>Icons from <a href='https://www.svgrepo.com/' target='_blank' rel='noreferrer'>SVG Repo</a></p>
              <p style={{ fontSize: '1.8rem' }}>
                Gif by&nbsp;
                <a href='https://icons8.com/illustrations/author/TQQ1qAnr9rn5' target='_blank' rel='noreferrer'>
                  Oleg Shcherba&nbsp;
                </a>
                from&nbsp;
                <a href='https://icons8.com/' target='_blank' rel='noreferrer'>Icons8</a>
              </p>
            </div>
          </Col>
          <Col md={6} sm={12} style={{ display: 'flex', justifyContent: 'center' }}>
            <p style={{ fontSize: '1.8rem' }}>Developed by <a href='https://www.linkedin.com/in/marco-franco-4b2b88218/' target='_blank' rel='noreferrer'>Marco Franco</a></p>
          </Col>
        </Row>
        <Row className='mt-3 pb-3'>
          <Col style={{ display: 'flex', justifyContent: 'center' }}>
            <div>
              <p style={{ fontSize: '1.8rem' }}>Thanks for visiting my portfolio!</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
